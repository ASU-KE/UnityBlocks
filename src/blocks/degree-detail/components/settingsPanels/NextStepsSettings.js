// @ts-check

import { ApplyCard, LearnMoreCard, VisitCard } from '../nextStepsCards';

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

export { NextStepsSettings };
