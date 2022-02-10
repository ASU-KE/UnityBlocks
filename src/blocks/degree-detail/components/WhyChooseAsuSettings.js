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
const WhyChooseAsuSettings = ( props ) => {
	const {
		attributes: { whyChooseAsu__hide, whyChooseAsu__sectionIntroText },
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

export default WhyChooseAsuSettings;
