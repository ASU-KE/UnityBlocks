import ApplyCard from './ApplyCard';
import LearnMoreCard from './LearnMoreCard';
import VisitCard from './VisitCard';

/**
 * Block controls
 *
 * @param {Object} props
 */
const NextStepsSettings = ( props ) => {
	return (
		<>
			<h2>Customize Next Steps cards</h2>

			<LearnMoreCard { ...props } />
			<ApplyCard { ...props } />
			<VisitCard { ...props } />
		</>
	);
};

export default NextStepsSettings;
