/**
 * External dependencies
 */
import { AsuRfi } from '../../unity/app-rfi/src/components/AsuRfi';

/**
 * Internal dependencies
 */
// import Controls from './controls';
import Inspector from './inspector';

/**
 * Block edit function
 *
 * @param {Object} props
 */
const Edit = ( props ) => {
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

	const args = {
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
	};

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<AsuRfi { ...args } />
			</div>
		</>
	);
};

export default Edit;
