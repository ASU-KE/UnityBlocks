/**
 * External dependencies
 */
import classnames from 'classnames';

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
		},
		className,
	} = props;

	return (
		<div
			className={ classnames( className ) }
			data-campus={ campus }
			data-actualcampus={ actualCampus }
			data-college={ college }
			data-department={ department }
			data-studenttype={ studentType }
			data-areainterest={ areaOfInterest }
			data-programinterest={ programOfInterest }
			data-programinterestoptional={ programOfInterestOptional }
			data-iscertminor={ isCertMinor }
			data-country={ country }
			data-stateprovince={ stateProvince }
			data-successmsg={ successMsg }
			data-test={ test }
			data-datasource={ dataSourceDegreeSearch }
			data-datasourceonline={ dataSourceAsuOnline }
			data-datasourcecountriesstates={ dataSourceCountriesStates }
			data-submissionurl={ submissionUrl }
		></div>
	);
};

export default save;
