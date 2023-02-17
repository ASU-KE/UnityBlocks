import React, { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import Selection from './Selection';

const { XMLParser } = require( 'fast-xml-parser' );

const options = {
	ignoreAttributes: false,
};

const parser = new XMLParser( options );

function ASUCareers( props ) {
	const listType = props.listType;
	const deptList = props.deptList;
	//	'Office of Univ Events&Protocol, Solar Fab, Knowledge Enterprise Events';
	//props.deptList;

	const [ jobs, setJobs ] = useState( [] );
	const [ info, setInfo ] = useState( [] );

	function makeXML( siteID, deptList ) {
		return `<Envelope version='01.00'><Sender><Id>12345</Id><Credential>25620</Credential></Sender><TransactInfo transactId='1' transactType='data'><TransactId>01/27/2010</TransactId><TimeStamp>12:00:00 AM</TimeStamp></TransactInfo><Unit UnitProcessor='SearchAPI'><Packet><PacketInfo packetType='data'><packetId>1</packetId></PacketInfo><Payload><InputString> <ClientId>25620</ClientId><SiteId>${ siteID }</SiteId><PageNumber>1</PageNumber><OutputXMLFormat>0</OutputXMLFormat> <AuthenticationToken/><HotJobs/><ProximitySearch><Distance/><Measurement/><Country/><State/><City/><zipCode/></ProximitySearch><JobMatchCriteriaText/><SelectedSearchLocaleId/><Questions><Question Sortorder='ASC' Sort='No'><Id>8318</Id> <Value><![CDATA[${ deptList }]]></Value></Question></Questions></InputString></Payload></Packet></Unit></Envelope>`;
	}

	let siteID = ''; //For student jobs
	if ( listType === 'staff' ) siteID = '5494'; //For staff jobs
	else if ( listType === 'student' ) siteID = '5495'; //For student jobs

	useEffect( () => {
		fetchData();
	}, [] );

	async function fetchData() {
		const result = await fetch( 'https://brassring.api.rtd.asu.edu/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams( {
				inputXml: makeXML( siteID, deptList ),
			} ),
		} );
		const text = await result.text();
		let jobs = parser.parse( decode( text ) ).string.Envelope.Unit.Packet
			.Payload.ResultSet.Jobs.Job;
		const info = parser.parse( decode( text ) ).string.Envelope.Unit.Packet
			.Payload.ResultSet.OtherInformation;

		if ( ! Array.isArray( jobs ) && jobs ) {
			jobs = [ jobs ];
		}

		//setJobs( Array.from( jobs ) );
		setJobs( jobs );
		setInfo( info );
	}

	const selectContainer = document.getElementsByClassName(
		'uds-asu-careers-selection'
	);

	const hideJobPosts = ( el ) => {
		Object.values( el.querySelectorAll( '[class="jobPost"]' ) ).map(
			( jobPost ) => {
				return ( jobPost.style.display = 'none' );
			}
		);
	};

	for ( const el of selectContainer ) {
		hideJobPosts( el );

		el.closest( '.uds-asu-careers-selection-wrapper' )
			.querySelector( 'select' )
			.addEventListener( 'change', function handleChange( event ) {
				hideJobPosts( el );
				const selected = event.target.value;

				const thisJobPosts = el
					.closest( '.uds-asu-careers-selection-wrapper' )
					.querySelectorAll( '[listType="' + selected + '"]' );

				Object.values( thisJobPosts ).map( ( thisJobPost ) => {
					return ( thisJobPost.style.display = 'block' );
				} );
			} );
	}

	return (
		<div
			className="jobPost"
			MaxPages={ info.MaxPages }
			PageNumber={ info.PageNumber }
			StartDoc={ info.StartDoc }
			TotalRecordsFound={ info.TotalRecordsFound }
			listType={ listType }
		>
			<ul className="list-unstyled">
				{ siteID === '' ? (
					<div className="uds-asu-careers-selection-wrapper">
						<Selection />
						<div className="uds-asu-careers-selection">
							<ASUCareers
								listType="staff"
								deptList={ deptList }
							/>
							<ASUCareers
								listType="student"
								deptList={ deptList }
							/>
						</div>
					</div>
				) : (
					<>
						{ jobs?.length > 0 ? (
							jobs.map( ( job, index ) => (
								<li key={ index }>
									<div>
										<div>
											<a
												target="_blank"
												rel="noreferrer"
												href={ job.JobDetailLink }
											>
												{ job.Question[ 2 ][ '#text' ] }
											</a>
										</div>
										<div>
											<strong>Department: </strong>
											{ job.Question[ 5 ][ '#text' ] }
										</div>
										<div>
											<strong>Close date: </strong>
											{ job.Question[ 8 ][ '#text' ] }
										</div>
									</div>
								</li>
							) )
						) : (
							<li>No results found!</li>
						) }
					</>
				) }
			</ul>
		</div>
	);
}

export default ASUCareers;
