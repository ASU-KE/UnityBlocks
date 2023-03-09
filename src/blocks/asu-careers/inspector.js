/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: { listType, deptList, titleText },
		setAttributes,
	} = props;

	const options = [
		{
			label: 'all departments',
			value: 'Advanced Materials Initiative, Advncd Electronics & Photonics, ASU Banner NDRC, ASU International Development, ASU Wrigley Inst Development, ASU Wrigley Inst Outreach, Biodesign Admin Support Ops, Biodesign Administration, Biodesign ASD, Biodesign BB, Biodesign BE, Biodesign Beus CXFEL Lab, Biodesign BSS, Biodesign CTL, Biodesign CXLS Operations, Biodesign EHE, Biodesign Facilities, Biodesign FAM, Biodesign HTM, Biodesign IM, Biodesign Institute, Biodesign ITS, Biodesign IVV, Biodesign MDB, Biodesign ME, Biodesign PC, Biodesign Resrch Opp Adv & Dev, Biodesign SM3, Biodesign SMB, Biodesign Swette EB, Biodesign Virginia G Piper PD, Biosciences, Business Services, CAP LTER, Center Biodiversity Outcomes, Center for Engagement Science, CGF Admin Support, CGF Ambassador SW, CGF Career & Alumni Services, CGF Executive & Prof Education, CGF Instructional Support, CGF Recrt Admissions Outreach, CGF Student Services SW, CGF Undergrad Student Services, Clinical Initiatives Dignity, College of Global Futures, Collg Research Eval Serv Team, Communications & Marketing, Complex Adaptive Systems, Cores Sales & Marketing, Corp Engagemt & Strat Partnshp, CSPO Grad Assists Assocs, Ctr Accelerating Op Efficiency, Ctr Cybersec Digital Forensics, Ctr Human AI & Robot Teaming, Ctr Narr, Decision Center Desert City, Decision Theater, Dept Animal Care Technologies, Disinfo & Strat Infl, E+I Venture Mentors, Economic Development, Education for Humanity, Engagement & Prof Development, Entrepreneurship + Innovation, Events, Eyring Materials Center, Flexible Electronics Display, Future H2O, Global Consort Sustain Outcome, Global Drylands Center, Global Futures Laboratory, Global Futures Staff, Global Inst of Sustain & Innov, Global Locust Initiative, Global Operations, Global Partnerships, Global Security Initiative, Health & Clinical Partnerships, Health and Clinical Services, Healthy Urban Environments, Industry Contracts, Instrument Design Fabrication, International Projects & Mgmt, Interplanetary Initiative, KE Biodesign Institute Finance, KE Business Units Finance, KE Core Facilities, KE Finance Process Development, KE Financial Services, KE Global Futures Finance, KE Initiatives Finance, KE Luminosity Lab, KE Planning Budget, KE Procurement, KE Serv & Rechg Ctrs Finan, KE Staff Support, KE Web Services, Knowldg Enterprise Initiatives, Knowldg Enterprise Operations, Knowledge Enterprise Analytics, Knowledge Enterprise Events, Knowledge Enterprise HR, LightWorks, Materials of the Universe Ctr, McCain Inst Intl Leadership, NanoFabrication, Ofc EVP Knowldge Enterprise, Ofc Research/Sponsored Project, Office of VP Research Develop, Operations PMO, ORSPA Award Management, ORSPA Fiscal Oversight, ORSPA Proposals & Negotiations, R&M Walton Sust Solutions Svc, Research Advancement Services, Research Development, Research Integrity & Assurance, Research Project Management, Research Tech Development, Research Tech Support, Research Technology Office, RTO Business Intelligence, RTO Enterprise Architecture, RTO Information Security, RTO Research Computing, RTO Research Editing, RTO Scientific Software Engrng, RTO Strategic Solutions, RTO Training, Sch Complex Adaptive Systems, Sch Future of Innov in Society, School of Sustainability, Sci & Imag-Grad Assist/Assocs, SFAz Center for STEM, SkySong M+E Logistics, Solar Fab, SOS Faculty & Researchers, SOS Grad Student Services, SOS Graduate Assistants Assocs, SOS Instructional Support, SOS Instructional SW, SOS International Programs, SOS Outreach & Relations, SOS Student Services, SOS Student Workers, Strategic Marketing and Comms, Sustainable Cities Network, Sustainbl Phosphorus Alliance, Swette Ctr Sust Food Systems, The Global KAITEKI Center, The Sustainability Consortium, Univ Research Space Planning, University Innovation Alliance, UREx Sustainability Research, Walton Sust Teachers Academics, Wetland Ecosystem Ecology Lab',
		},
		{
			label: 'Advanced Materials Initiative',
			value: 'Advanced Materials Initiative',
		},
		{
			label: 'Advncd Electronics & Photonics',
			value: 'Advncd Electronics & Photonics',
		},
		{
			label: 'ASU Banner NDRC',
			value: 'ASU Banner NDRC',
		},
		{
			label: 'ASU International Development',
			value: 'ASU International Development',
		},
		{
			label: 'ASU Wrigley Inst Development',
			value: 'ASU Wrigley Inst Development',
		},
		{
			label: 'ASU Wrigley Inst Outreach',
			value: 'ASU Wrigley Inst Outreach',
		},
		{
			label: 'Biodesign Administration',
			value: 'Biodesign Admin Support Ops, Biodesign Administration',
		},
		{
			label: 'Biodesign Center for Applied Structural Discovery',
			value: 'Biodesign ASD',
		},
		{
			label: 'Biodesign Center for Bioelectronics and Biosensors',
			value: 'Biodesign BB',
		},
		{
			label: 'Biodesign Center for Bioenergetics',
			value: 'Biodesign BE',
		},
		{
			label: 'CXFEL Labs',
			value: 'Biodesign Beus CXFEL Lab, Biodesign CXLS Operations',
		},
		{
			label: 'Biodesign Center for Biocomputing Security and Society',
			value: 'Biodesign BSS',
		},
		{
			label: 'Biodesign Center for Biomaterials Innovation and Translation',
			value: 'Biodesign BIT',
		},
		{
			label: 'ASU Biodesign Clinical Testing Laboratory',
			value: 'Biodesign CTL',
		},
		{
			label: 'Biodesign Center for Environmental Health Engineering',
			value: 'Biodesign EHE',
		},
		{
			label: 'KE Facilities Service FM',
			value: 'Biodesign Facilities',
		},
		{
			label: 'Biodesign Center for Fundamental and Applied Microbiomics',
			value: 'Biodesign FAM',
		},
		{
			label: 'Biodesign Center for Health Through Microbiomes',
			value: 'Biodesign HTM',
		},
		{
			label: 'Biodesign Center for Innovations in Medicine',
			value: 'Biodesign IM',
		},
		{
			label: 'Biodesign Institute',
			value: 'Biodesign Institute',
		},
		{
			label: 'KE Research Technology Support',
			value: 'Biodesign ITS',
		},
		{
			label: 'Biodesign Center for Immunotherapy, Vaccines and Virotherapy',
			value: 'Biodesign IVV',
		},
		{
			label: 'Biodesign Center for Molecular Design and Biomimetics',
			value: 'Biodesign MDB',
		},
		{
			label: 'Biodesign Center for Mechanisms of Evolution',
			value: 'Biodesign ME',
		},
		{
			label: 'Biodesign Pathfinder Center',
			value: 'Biodesign PC',
		},
		{
			label: 'Biodesign Research Opportunity Advancement and Development',
			value: 'Biodesign Resrch Opp Adv & Dev',
		},
		{
			label: 'Biodesign Center for Sustainable Macromolecular Materials and Manufacturing',
			value: 'Biodesign SM3',
		},
		{
			label: 'Biodesign Center for Single Molecule Biophysics',
			value: 'Biodesign SMB',
		},
		{
			label: 'Biodesign Swette Center for Environmental Biotechnology',
			value: 'Biodesign Swette EB',
		},
		{
			label: 'Biodesign Virginia G. Piper Center for Personalized Diagnostics',
			value: 'Biodesign Virginia G Piper PD',
		},
		{
			label: 'ASU Core Facilities',
			value: 'Biosciences',
		},
		{
			label: 'Business Services',
			value: 'Business Services',
		},
		{ label: 'CAP LTER', value: 'CAP LTER' },
		{
			label: 'Center Biodiversity Outcomes',
			value: 'Center Biodiversity Outcomes',
		},
		{
			label: 'Center for Engagement Science',
			value: 'Center for Engagement Science',
		},
		{
			label: 'CGF Admin Support',
			value: 'CGF Admin Support',
		},
		{
			label: 'CGF Ambassador SW',
			value: 'CGF Ambassador SW',
		},
		{
			label: 'CGF Career & Alumni Services',
			value: 'CGF Career & Alumni Services',
		},
		{
			label: 'CGF Executive & Prof Education',
			value: 'CGF Executive & Prof Education',
		},
		{
			label: 'CGF Instructional Support',
			value: 'CGF Instructional Support',
		},
		{
			label: 'CGF Recrt Admissions Outreach',
			value: 'CGF Recrt Admissions Outreach',
		},
		{
			label: 'CGF Student Services SW',
			value: 'CGF Student Services SW',
		},
		{
			label: 'CGF Undergrad Student Services',
			value: 'CGF Undergrad Student Services',
		},
		{
			label: 'Clinical Initiatives Dignity',
			value: 'Clinical Initiatives Dignity',
		},
		{
			label: 'College of Global Futures',
			value: 'College of Global Futures',
		},
		{
			label: 'Collg Research Eval Serv Team',
			value: 'Collg Research Eval Serv Team',
		},
		{
			label: 'Communications & Marketing',
			value: 'Communications & Marketing',
		},
		{
			label: 'Complex Adaptive Systems',
			value: 'Complex Adaptive Systems',
		},
		{
			label: 'Cores Sales & Marketing',
			value: 'Cores Sales & Marketing',
		},
		{
			label: 'Corp Engagemt & Strat Partnshp',
			value: 'Corp Engagemt & Strat Partnshp',
		},
		{
			label: 'CSPO Grad Assists Assocs',
			value: 'CSPO Grad Assists Assocs',
		},
		{
			label: 'Ctr Accelerating Op Efficiency',
			value: 'Ctr Accelerating Op Efficiency',
		},
		{
			label: 'Ctr Cybersec Digital Forensics',
			value: 'Ctr Cybersec Digital Forensics',
		},
		{
			label: 'Ctr Human AI & Robot Teaming',
			value: 'Ctr Human AI & Robot Teaming',
		},
		{ label: 'Ctr Narr', value: 'Ctr Narr' },
		{
			label: 'Decision Center Desert City',
			value: 'Decision Center Desert City',
		},
		{
			label: 'Decision Theater',
			value: 'Decision Theater',
		},
		{
			label: 'Dept Animal Care Technologies',
			value: 'Dept Animal Care Technologies',
		},
		{
			label: 'Disinfo & Strat Infl',
			value: 'Disinfo & Strat Infl',
		},
		{
			label: 'E+I Venture Mentors',
			value: 'E+I Venture Mentors',
		},
		{
			label: 'Economic Development',
			value: 'Economic Development',
		},
		{
			label: 'Education for Humanity',
			value: 'Education for Humanity',
		},
		{
			label: 'Engagement & Prof Development',
			value: 'Engagement & Prof Development',
		},
		{
			label: 'Entrepreneurship + Innovation',
			value: 'Entrepreneurship + Innovation',
		},
		{ label: 'Events', value: 'Events' },
		{
			label: 'Eyring Materials Center',
			value: 'Eyring Materials Center',
		},
		{
			label: 'Flexible Electronics Display',
			value: 'Flexible Electronics Display',
		},
		{ label: 'Future H2O', value: 'Future H2O' },
		{
			label: 'Global Consort Sustain Outcome',
			value: 'Global Consort Sustain Outcome',
		},
		{
			label: 'Global Drylands Center',
			value: 'Global Drylands Center',
		},
		{
			label: 'Global Futures Laboratory',
			value: 'Global Futures Laboratory',
		},
		{
			label: 'Global Futures Staff',
			value: 'Global Futures Staff',
		},
		{
			label: 'Global Inst of Sustain & Innov',
			value: 'Global Inst of Sustain & Innov',
		},
		{
			label: 'Global Locust Initiative',
			value: 'Global Locust Initiative',
		},
		{
			label: 'Global Operations',
			value: 'Global Operations',
		},
		{
			label: 'Global Partnerships',
			value: 'Global Partnerships',
		},
		{
			label: 'Global Security Initiative',
			value: 'Global Security Initiative',
		},
		{
			label: 'Health & Clinical Partnerships',
			value: 'Health & Clinical Partnerships',
		},
		{
			label: 'Health and Clinical Services',
			value: 'Health and Clinical Services',
		},
		{
			label: 'Healthy Urban Environments',
			value: 'Healthy Urban Environments',
		},
		{
			label: 'Industry Contracts',
			value: 'Industry Contracts',
		},
		{
			label: 'Instrument Design Fabrication',
			value: 'Instrument Design Fabrication',
		},
		{
			label: 'International Projects & Mgmt',
			value: 'International Projects & Mgmt',
		},
		{
			label: 'Interplanetary Initiative',
			value: 'Interplanetary Initiative',
		},
		{
			label: 'KE Biodesign Institute Finance',
			value: 'KE Biodesign Institute Finance',
		},
		{
			label: 'KE Business Units Finance',
			value: 'KE Business Units Finance',
		},
		{
			label: 'KE Core Facilities',
			value: 'KE Core Facilities',
		},
		{
			label: 'KE Finance Process Development',
			value: 'KE Finance Process Development',
		},
		{
			label: 'KE Financial Services',
			value: 'KE Financial Services',
		},
		{
			label: 'KE Global Futures Finance',
			value: 'KE Global Futures Finance',
		},
		{
			label: 'KE Initiatives Finance',
			value: 'KE Initiatives Finance',
		},
		{
			label: 'KE Luminosity Lab',
			value: 'KE Luminosity Lab',
		},
		{
			label: 'KE Planning Budget',
			value: 'KE Planning Budget',
		},
		{
			label: 'KE Procurement',
			value: 'KE Procurement',
		},
		{
			label: 'KE Serv & Rechg Ctrs Finan',
			value: 'KE Serv & Rechg Ctrs Finan',
		},
		{
			label: 'KE Staff Support',
			value: 'KE Staff Support',
		},
		{
			label: 'KE Web Services',
			value: 'KE Web Services',
		},
		{
			label: 'Knowldg Enterprise Initiatives',
			value: 'Knowldg Enterprise Initiatives',
		},
		{
			label: 'Knowldg Enterprise Operations',
			value: 'Knowldg Enterprise Operations',
		},
		{
			label: 'Knowledge Enterprise Analytics',
			value: 'Knowledge Enterprise Analytics',
		},
		{
			label: 'Knowledge Enterprise Events',
			value: 'Knowledge Enterprise Events',
		},
		{
			label: 'Knowledge Enterprise HR',
			value: 'Knowledge Enterprise HR',
		},
		{ label: 'LightWorks', value: 'LightWorks' },
		{
			label: 'Materials of the Universe Ctr',
			value: 'Materials of the Universe Ctr',
		},
		{
			label: 'McCain Inst Intl Leadership',
			value: 'McCain Inst Intl Leadership',
		},
		{
			label: 'NanoFabrication',
			value: 'NanoFabrication',
		},
		{
			label: 'Ofc EVP Knowldge Enterprise',
			value: 'Ofc EVP Knowldge Enterprise',
		},
		{
			label: 'Ofc Research/Sponsored Project',
			value: 'Ofc Research/Sponsored Project',
		},
		{
			label: 'Office of VP Research Develop',
			value: 'Office of VP Research Develop',
		},
		{
			label: 'Operations PMO',
			value: 'Operations PMO',
		},
		{
			label: 'ORSPA Award Management',
			value: 'ORSPA Award Management',
		},
		{
			label: 'ORSPA Fiscal Oversight',
			value: 'ORSPA Fiscal Oversight',
		},
		{
			label: 'ORSPA Proposals & Negotiations',
			value: 'ORSPA Proposals & Negotiations',
		},
		{
			label: 'R&M Walton Sust Solutions Svc',
			value: 'R&M Walton Sust Solutions Svc',
		},
		{
			label: 'Research Advancement Services',
			value: 'Research Advancement Services',
		},
		{
			label: 'Research Development',
			value: 'Research Development',
		},
		{
			label: 'Research Integrity & Assurance',
			value: 'Research Integrity & Assurance',
		},
		{
			label: 'Research Project Management',
			value: 'Research Project Management',
		},
		{
			label: 'Research Tech Development',
			value: 'Research Tech Development',
		},
		{
			label: 'Research Tech Support',
			value: 'Research Tech Support',
		},
		{
			label: 'Research Technology Office',
			value: 'Research Technology Office',
		},
		{
			label: 'RTO Business Intelligence',
			value: 'RTO Business Intelligence',
		},
		{
			label: 'RTO Enterprise Architecture',
			value: 'RTO Enterprise Architecture',
		},
		{
			label: 'RTO Information Security',
			value: 'RTO Information Security',
		},
		{
			label: 'RTO Research Computing',
			value: 'RTO Research Computing',
		},
		{
			label: 'RTO Research Editing',
			value: 'RTO Research Editing',
		},
		{
			label: 'RTO Scientific Software Engrng',
			value: 'RTO Scientific Software Engrng',
		},
		{
			label: 'RTO Strategic Solutions',
			value: 'RTO Strategic Solutions',
		},
		{ label: 'RTO Training', value: 'RTO Training' },
		{
			label: 'Sch Complex Adaptive Systems',
			value: 'Sch Complex Adaptive Systems',
		},
		{
			label: 'Sch Future of Innov in Society',
			value: 'Sch Future of Innov in Society',
		},
		{
			label: 'School of Sustainability',
			value: 'School of Sustainability',
		},
		{
			label: 'Sci & Imag-Grad Assist/Assocs',
			value: 'Sci & Imag-Grad Assist/Assocs',
		},
		{
			label: 'SFAz Center for STEM',
			value: 'SFAz Center for STEM',
		},
		{
			label: 'SkySong M+E Logistics',
			value: 'SkySong M+E Logistics',
		},
		{ label: 'Solar Fab', value: 'Solar Fab' },
		{
			label: 'SOS Faculty & Researchers',
			value: 'SOS Faculty & Researchers',
		},
		{
			label: 'SOS Grad Student Services',
			value: 'SOS Grad Student Services',
		},
		{
			label: 'SOS Graduate Assistants Assocs',
			value: 'SOS Graduate Assistants Assocs',
		},
		{
			label: 'SOS Instructional Support',
			value: 'SOS Instructional Support',
		},
		{
			label: 'SOS Instructional SW',
			value: 'SOS Instructional SW',
		},
		{
			label: 'SOS International Programs',
			value: 'SOS International Programs',
		},
		{
			label: 'SOS Outreach & Relations',
			value: 'SOS Outreach & Relations',
		},
		{
			label: 'SOS Student Services',
			value: 'SOS Student Services',
		},
		{
			label: 'SOS Student Workers',
			value: 'SOS Student Workers',
		},
		{
			label: 'Strategic Marketing and Comms',
			value: 'Strategic Marketing and Comms',
		},
		{
			label: 'Sustainable Cities Network',
			value: 'Sustainable Cities Network',
		},
		{
			label: 'Sustainbl Phosphorus Alliance',
			value: 'Sustainbl Phosphorus Alliance',
		},
		{
			label: 'Swette Ctr Sust Food Systems',
			value: 'Swette Ctr Sust Food Systems',
		},
		{
			label: 'The Global KAITEKI Center',
			value: 'The Global KAITEKI Center',
		},
		{
			label: 'The Sustainability Consortium',
			value: 'The Sustainability Consortium',
		},
		{
			label: 'Univ Research Space Planning',
			value: 'Univ Research Space Planning',
		},
		{
			label: 'University Innovation Alliance',
			value: 'University Innovation Alliance',
		},
		{
			label: 'UREx Sustainability Research',
			value: 'UREx Sustainability Research',
		},
		{
			label: 'Walton Sust Teachers Academics',
			value: 'Walton Sust Teachers Academics',
		},
		{
			label: 'Wetland Ecosystem Ecology Lab',
			value: 'Wetland Ecosystem Ecology Lab',
		},
	];

	return (
		<InspectorControls>
			<PanelBody title={ __( 'ASU Careers', 'unityblocks' ) }>
				<PanelRow>
					<TextControl
						className="Career block__title-text"
						label={ 'Title text' }
						placeholder="Text"
						value={ titleText }
						onChange={ ( titleText ) =>
							setAttributes( { titleText } )
						}
					/>
				</PanelRow>

				<PanelRow>
					<SelectControl
						label={ __( 'Staff or Students?' ) }
						value={ listType }
						options={ [
							{ label: 'User choice', value: 'user-choice' },
							{ label: 'Staff', value: 'staff' },
							{ label: 'Students', value: 'students' },
						] }
						onChange={ ( value ) => {
							return setAttributes( {
								listType: value,
							} );
						} }
					/>
				</PanelRow>

				<PanelRow>
					<Select
						className="uds-w-100"
						closeMenuOnSelect={ false }
						components={ animatedComponents }
						isMulti
						options={ options }
						value={ deptList }
						onChange={ ( value ) => {
							if ( value[ 0 ][ 'label' ] == 'All departments' ) {
								let deptListCodes = '';
								value.slice( 1 ).map( ( singleCode ) => {
									deptListCodes += ', ' + singleCode.value;
								} );
								deptListCodes = deptListCodes.substring( 2 );
								value[ 0 ][ 'value' ] = deptListCodes;
								//console.log( value[ 0 ][ 'value' ] );
							}
							return setAttributes( {
								deptList: value,
							} );
						} }
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
