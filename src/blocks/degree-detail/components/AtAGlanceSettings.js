/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { Card, CardBody, CardHeader, TextControl } from '@wordpress/components';

/**
 * Block controls
 *
 * @param {Object} props
 */
const AtAGlanceSettings = ( props ) => {
	const {
		attributes: {
			atAGlance__offeredByText,
			atAGlance__offeredByUrl,
			atAGlance__offeredByIsActive,
			atAGlance__locationsText,
			atAGlance__locationsUrl,
			atAGlance__locationsIsActive,
			atAGlance__firstRequirementMathCourse,
			atAGlance__mathIntensity,
			atAGlance__timeCommitment,
		},
		setAttributes,
	} = props;

	return (
		<Card>
			<CardHeader>
				<h2>Override section images</h2>
			</CardHeader>
			<CardBody>
				<TextControl
					label={ 'Academic Plan Code' }
					value={ acadPlan }
					onChange={ ( newValue ) =>
						setAttributes( {
							acadPlan: newValue,
						} )
					}
				/>
			</CardBody>
		</Card>
	);
};

export default AtAGlanceSettings;
