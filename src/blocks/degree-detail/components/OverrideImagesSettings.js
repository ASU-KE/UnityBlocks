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
const OverrideImagesSettings = ( props ) => {
	const {
		attributes: {
			careerOutlook__imageUrl,
			careerOutlook__imageAltText,
			careerOutlook__imageCssClass,
			globalOpportunity__imageUrl,
			globalOpportunity__imageAltText,
			globalOpportunity__imageCssClass,
			attendOnline__imageUrl,
			attendOnline__imageAltText,
			attendOnline__imageCssClass,
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

export default OverrideImagesSettings;
