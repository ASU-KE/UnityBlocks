/**
 * WordPress dependencies
 */
import { Card, CardBody, CardHeader, TextControl } from '@wordpress/components';

/**
 * Block controls
 *
 * @param {Object} props
 */
const DegreeSettings = ( props ) => {
	const {
		attributes: { acadPlan },
		setAttributes,
	} = props;

	return (
		<Card size={ 'small' } style={ { width: '50%' } }>
			<CardHeader>
				<h2>Degree Code</h2>
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

export default DegreeSettings;
