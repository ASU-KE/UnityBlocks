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
const ProgramContactsSettings = ( props ) => {
	const {
		attributes: {
			programContactInfo__department,
			programContactInfo__email,
		},
		setAttributes,
	} = props;

	return (
		<Card>
			<CardHeader>
				<h2>Override Program Contact details</h2>
			</CardHeader>
			<CardBody>
				<TextControl
					label={ 'Department' }
					value={ programContactInfo__department }
					onChange={ ( newValue ) =>
						setAttributes( {
							programContactInfo__department: newValue,
						} )
					}
				/>
			</CardBody>
			<CardBody>
				<TextControl
					label={ 'Email' }
					value={ programContactInfo__email }
					onChange={ ( newValue ) =>
						setAttributes( {
							programContactInfo__email: newValue,
						} )
					}
				/>
			</CardBody>
		</Card>
	);
};

export default ProgramContactsSettings;
