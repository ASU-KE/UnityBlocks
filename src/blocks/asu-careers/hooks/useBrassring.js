import { decode } from 'html-entities';
import useSWR from 'swr';
import { XMLParser } from 'fast-xml-parser';

import { transformBrassringJobs } from '../transformers/brassring-jobs.transformer';

const xmlParser = new XMLParser( {
	ignoreAttributes: false,
} );

const fetcher = async ( inputXml ) => {
	try {
		const response = await fetch(
			'https://import.brassring.com/WebRouter/WebRouter.asmx/route',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams( {
					inputXml,
				} ),
			}
		);

		const encodedXml = await response.text();
		const jsonResult = xmlParser.parse( decode( encodedXml ) ); //decode html entities in string and parse into JS object
		return jsonResult;
	} catch ( e ) {
		if (
			! process.env.NODE_ENV ||
			process.env.NODE_ENV === 'development'
		) {
			console.log(
				'***** Problem with fetch that resulted in an exception'
			);
			console.error( e );
		}
		throw new Error( 'Invalid response from server' );
	}
};

const useBrassring = ( listType, deptList ) => {
	// only query Brassring if the listType has been chosen (either in the Editor or by the user)
	if ( 'user-choice' === listType ) {
		return {
			payload: null,
			isLoading: false,
			isError: false,
		};
	}

	let siteID = '5494'; // Default to Staff listing
	if ( 'students' === listType ) {
		siteID = '5495'; // select Student listing
	}

	const inputXml = `<Envelope version='01.00'><Sender><Id>12345</Id><Credential>25620</Credential></Sender><TransactInfo transactId='1' transactType='data'><TransactId>01/27/2010</TransactId><TimeStamp>12:00:00 AM</TimeStamp></TransactInfo><Unit UnitProcessor='SearchAPI'><Packet><PacketInfo packetType='data'><packetId>1</packetId></PacketInfo><Payload><InputString> <ClientId>25620</ClientId><SiteId>${ siteID }</SiteId><PageNumber>1</PageNumber><OutputXMLFormat>0</OutputXMLFormat> <AuthenticationToken/><HotJobs/><ProximitySearch><Distance/><Measurement/><Country/><State/><City/><zipCode/></ProximitySearch><JobMatchCriteriaText/><SelectedSearchLocaleId/><Questions><Question Sortorder='ASC' Sort='No'><Id>8318</Id> <Value><![CDATA[${ deptList }]]></Value></Question></Questions></InputString></Payload></Packet></Unit></Envelope>`;

	const { data, error, isLoading } = useSWR( inputXml, fetcher );

	let jobs;
	let queryInfo;
	if ( ! isLoading ) {
		jobs =
			data?.string?.Envelope?.Unit?.Packet?.Payload?.ResultSet?.Jobs?.map(
				transformBrassringJobs()
			);

		queryInfo =
			data?.string.Envelope.Unit.Packet.Payload.ResultSet
				.OtherInformation;
	}

	return {
		payload: {
			jobs,
			totalRecords: queryInfo?.TotalRecordsFound,
			maxPages: queryInfo?.MaxPages,
			startDoc: queryInfo?.StartDoc,
			pageNumber: queryInfo?.PageNumber,
		},
		isLoading,
		isError: error,
	};
};

export { useBrassring };
