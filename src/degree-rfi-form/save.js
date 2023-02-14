/**
 * External dependencies
 */
//import classnames from 'classnames';
import { useBlockProps } from "@wordpress/block-editor";


const save = ( props ) => {
	const {
		attributes: {
			campus,
			actualCampus,
			college,
			department,
			studentType,
			areaOfInterest,
			programOfInterest,
			programOfInterestOptional,
			isCertMinor,
			country,
			stateProvince,
			successMsg,
			test,
			dataSourceDegreeSearch,
			dataSourceAsuOnline,
			dataSourceCountriesStates,
			submissionUrl,
      sourceID
		},
		className,
	} = props;

	return (
		<div
      id="asu-degree-rfi-container"
      {...useBlockProps.save()}
			data-campus={ campus }
			data-actualcampus={ actualCampus }
			data-college={ college }
			data-department={ department }
			data-studenttype={ studentType }
			data-areaofinterest={ areaOfInterest }
			data-programofinterest={ programOfInterest }
			data-programofinterestoptional={ programOfInterestOptional }
			data-iscertminor={ isCertMinor }
			data-country={ country }
			data-stateprovince={ stateProvince }
			data-successmsg={ successMsg }
			data-test={ test }
			data-datasource={ dataSourceDegreeSearch }
			data-datasourceonline={ dataSourceAsuOnline }
			data-datasourcecountriesstates={ dataSourceCountriesStates }
			data-submissionurl={ submissionUrl }
      data-sourceid={ sourceID }
		></div>
	);
};

export default save;
