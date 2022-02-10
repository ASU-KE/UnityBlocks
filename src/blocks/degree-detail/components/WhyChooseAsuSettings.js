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
		attributes: { whyChooseAsu__sectionIntroText },
		setAttributes,
	} = props;

	return (
		<Card style={ { width: '50%' } }>
			<CardHeader>
				<h2>Customize the Why Choose ASU content.</h2>
			</CardHeader>

			<CardBody>
				<TextControl
					label={ 'Introductory text.' }
					value={ whyChooseAsu__sectionIntroText }
					onChange={ ( newValue ) =>
						setAttributes( {
							whyChooseAsu__sectionIntroText: newValue,
						} )
					}
				/>
			</CardBody>
		</Card>
	);
};

export default WhyChooseAsuSettings;
