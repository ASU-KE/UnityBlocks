const { render } = wp.element;

import { AsuRfi } from '../../resources/unity/asu-degree-rfi/src/components/AsuRfi';

// It is possible to load multiple forms onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Testimonial block
const rfiForms = document.querySelectorAll( '.wp-block-unityblocks-degree-rfi-form' );

rfiForms.forEach( ( form ) => {
	const campus = form.dataset.campus;
	const actualCampus = form.dataset.actualCampus;
	const college = form.dataset.college;
	const department = form.dataset.department;
	const studentType = form.dataset.studentType;
	const areaOfInterest = form.dataset.areaOfInterest;
	const programOfInterest = form.dataset.programOfInterest;
	const programOfInterestOptional = form.dataset.programOfInterestOptional;
	const isCertMinor = form.dataset.isCertMinor;
	const country = form.dataset.country;
	const stateProvince = form.dataset.stateProvince;
	const successMsg = form.dataset.successMsg;
	const test = form.dataset.test;
	const dataSourceDegreeSearch = form.dataset.dataSourceDegreeSearch;
	const dataSourceAsuOnline = form.dataset.dataSourceAsuOnline;
	const dataSourceCountriesStates = form.dataset.dataSourceCountriesStates;
	const submissionUrl = form.dataset.submissionUrl;

	render(
		<AsuRfi
			campus={ campus }
			actualCampus={ actualCampus }
			college={ college }
			department={ department }
			studentType={ studentType }
			areaOfInterest={ areaOfInterest }
			programOfInterest={ programOfInterest }
			programOfInterestOptional={ programOfInterestOptional }
			isCertMinor={ isCertMinor }
			country={ country }
			stateProvince={ stateProvince }
			successMsg={ successMsg }
			test={ test }
			dataSourceDegreeSearch={ dataSourceDegreeSearch }
			dataSourceAsuOnline={ dataSourceAsuOnline }
			dataSourceCountriesStates={ dataSourceCountriesStates }
			submissionUrl={ submissionUrl }
		/>,
		form
	);
} );
