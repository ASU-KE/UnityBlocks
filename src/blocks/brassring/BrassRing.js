import React, { useState, useEffect } from 'react';
import { decode } from 'html-entities';

const { XMLParser } = require( 'fast-xml-parser' );

const options = {
	ignoreAttributes: false,
};

const parser = new XMLParser( options );

function BrassRing( props ) {
	const siteType = props.siteType;
	const depList = props.depList;
	//	'Office of Univ Events&Protocol, Solar Fab, Knowledge Enterprise Events';
	//props.depList;

	const [ jobs, setJobs ] = useState( [] );
	const [ info, setInfo ] = useState( [] );

	function makeXML( siteID, depList ) {
		return `<Envelope version='01.00'><Sender><Id>12345</Id><Credential>25620</Credential></Sender><TransactInfo transactId='1' transactType='data'><TransactId>01/27/2010</TransactId><TimeStamp>12:00:00 AM</TimeStamp></TransactInfo><Unit UnitProcessor='SearchAPI'><Packet><PacketInfo packetType='data'><packetId>1</packetId></PacketInfo><Payload><InputString> <ClientId>25620</ClientId><SiteId>${ siteID }</SiteId><PageNumber>1</PageNumber><OutputXMLFormat>0</OutputXMLFormat> <AuthenticationToken/><HotJobs/><ProximitySearch><Distance/><Measurement/><Country/><State/><City/><zipCode/></ProximitySearch><JobMatchCriteriaText/><SelectedSearchLocaleId/><Questions><Question Sortorder='ASC' Sort='No'><Id>8318</Id> <Value><![CDATA[${ depList }]]></Value></Question></Questions></InputString></Payload></Packet></Unit></Envelope>`;
	}

	let siteID = ''; //For student jobs
	if ( siteType === 'staff' ) siteID = '5494'; //For staff jobs
	else if ( siteType === 'student' ) siteID = '5495'; //For student jobs

	/*const depList =
		'College of Global Futures,CGF Recrt Admissions Outreach,CGF Undergrad Student Services,CGF Career & Alumni Services, CGF Instructional Support,CGF Student Services SW,CGF Ambassador SW,Global Futures Staff,CGF Executive & Prof Education,CGF Admin Support,Business Services,Events,Communications & Marketing,School of Sustainability,SOS Grad Student Services,SOS Faculty & Researchers,SOS Graduate Assistants Assocs,SOS Instructional Support,SOS International Programs,SOS Outreach & Relations,SOS Student Services,SOS Student Workers,Walton Sust Teachers Academics,Wetland Ecosystem Ecology Lab,SOS Instructional SW,Sch Future of Innov in Society,CSPO Grad Assists Assocs,Sci & Imag-Grad Assist/Assocs,Sch Complex Adaptive Systems,Ofc EVP Knowldge Enterprise,KE Staff Support,KE Planning Budget,Knowledge Enterprise HR,KE Luminosity Lab,Health & Clinical Partnerships,Knowledge Enterprise Events,Univ Research Space Planning,International Projects & Mgmt,Clinical Initiatives Dignity,McCain Inst Intl Leadership,Knowldg Enterprise Initiatives,University Innovation Alliance,Decision Theater,Economic Development,Knowledge Enterprise Analytics,Research Integrity & Assurance,ASU International Development,Global Security Initiative,Ctr Cybersec Digital Forensics,Ctr Accelerating Op Efficiency,Ctr Human AI & Robot Teaming,Ctr Narr, Disinfo & Strat Infl,SkySong M+E Logistics,Entrepreneurship + Innovation,E+I Venture Mentors,Office of VP Research Develop,Advanced Materials Initiative,Flexible Electronics Display,Research Development,Collg Research Eval Serv Team,Materials of the Universe Ctr,Corp Engagemt & Strat Partnshp,Center for Engagement Science,Education for Humanity,SFAz Center for STEM,KE Financial Services,KE Finance Process Development,KE Business Units Finance,KE Serv & Rechg Ctrs Finan,KE Initiatives Finance,KE Biodesign Institute Finance,KE Procurement,KE Global Futures Finance,Interplanetary Initiative,Research Technology Office,RTO Business Intelligence,RTO Information Security,RTO Research Computing,RTO Research Editing,RTO Scientific Software Engrng,RTO Training,Research Tech Development,Research Tech Support,RTO Strategic Solutions,RTO Enterprise Architecture,KE Web Services,Knowldg Enterprise Operations,Ofc Research/Sponsored Project,Research Advancement Services,Research Project Management,Global Operations,Operations PMO,ORSPA Award Management,ORSPA Proposals & Negotiations,ORSPA Fiscal Oversight,Global Futures Laboratory,Global Inst of Sustain & Innov,ASU Wrigley Inst Development,ASU Wrigley Inst Outreach,CAP LTER,Center Biodiversity Outcomes,Decision Center Desert City,Future H2O,Global Drylands Center,Global Locust Initiative,Global Partnerships, LightWorks,Swette Ctr Sust Food Systems,The Global KAITEKI Center,Healthy Urban Environments,Global Consort Sustain Outcome,R&M Walton Sust Solutions Svc,The Sustainability Consortium,Sustainable Cities Network,UREx Sustainability Research,Sustainbl Phosphorus Alliance,Biodesign Institute,Biodesign Admin Support Ops,Biodesign Facilities,Biodesign ITS,Biodesign Resrch Opp Adv & Dev,Biodesign Administration,Biodesign CXLS Operations,Biodesign IM,Biodesign IVV,Biodesign SMB,Biodesign Swette EB,Biodesign BB,Biodesign BE,Biodesign Virginia G Piper PD,Biodesign PC,Biodesign EHE,Biodesign MDB,Biodesign ASD,ASU Banner NDRC,Biodesign FAM,Biodesign ME,Biodesign BSS,Biodesign Beus CXFEL Lab,Biodesign SM3,Biodesign CTL,Biodesign HTM,Dept Animal Care Technologies,KE Core Facilities,Cores Sales & Marketing,Instrument Design Fabrication,Advncd Electronics & Photonics,NanoFabrication,Eyring Materials Center,Biosciences,Solar Fab,Health and Clinical Services,Industry Contracts,Complex Adaptive Systems,Strategic Marketing and Comms,Engagement & Prof Development';
*/
	useEffect( () => {
		fetchData();
	}, [] );

	async function fetchData() {
		const result = await fetch(
			'https://import.brassring.com/WebRouter/WebRouter.asmx/route',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams( {
					inputXml: makeXML( siteID, depList ),
				} ),
			}
		);
		const text = await result.text();
		let jobs = parser.parse( decode( text ) ).string.Envelope.Unit.Packet
			.Payload.ResultSet.Jobs.Job;
		const info = parser.parse( decode( text ) ).string.Envelope.Unit.Packet
			.Payload.ResultSet.OtherInformation;

		if ( ! Array.isArray( jobs ) ) {
			jobs = [ jobs ];
		}
		//setJobs( Array.from( jobs ) );
		setJobs( jobs );
		setInfo( info );
	}

	const selectContainer = document.getElementsByClassName(
		'uds-brassring-selection'
	);
	for ( const el of selectContainer ) {
		const jobPosts = el.querySelectorAll( '[class="jobPost"]' );
		Object.values( jobPosts ).map( ( jobPost ) => {
			return ( jobPost.style.display = 'none' );
		} );
		el.closest( '.card' )
			.querySelector( 'select' )
			.addEventListener( 'change', function handleChange( event ) {
				const selected = event.target.value;

				const thisJobPosts = el
					.closest( '.card' )
					.querySelectorAll( '[sitetype="' + selected + '"]' );

				Object.values( thisJobPosts ).map( ( thisJobPost ) => {
					return ( thisJobPost.style.display = 'block' );
				} );

				//
				//console.log( event );

				//selected.style.display = 'block';
				// 👇️ get selected VALUE even outside event handler
				//console.log( select.options[ select.selectedIndex ].value );
				// 👇️ get selected TEXT in or outside event handler
				//console.log( select.options[ select.selectedIndex ].text );
			} );
	}

	// const selectWrapper = document.getElementsByClassName(
	// 	'uds-brassring-selection-wrapper'
	// );
	// for ( const el of selectWrapper ) {
	// 	const value = el.options[ el.selectedIndex ].value;

	// 	//var text = selectWrapper.options[ selectWrapper.selectedIndex ].text;
	// 	console.log( value );
	// }

	return (
		<div
			className="jobPost"
			MaxPages={ info.MaxPages }
			PageNumber={ info.PageNumber }
			StartDoc={ info.StartDoc }
			TotalRecordsFound={ info.TotalRecordsFound }
			siteType={ siteType }
		>
			<ul>
				{ jobs.length > 1 ? (
					jobs.map( ( job, index ) => (
						<li key={ index }>
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
						</li>
					) )
				) : (
					<li>No results found!</li>
				) }
			</ul>
		</div>
	);
}

export default BrassRing;
