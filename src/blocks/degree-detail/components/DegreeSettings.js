/**
 * WordPress dependencies
 */
import { Card, CardBody, TextControl } from '@wordpress/components';

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
		<>
			<h2>Degree Code</h2>
			<Card size={ 'small' } style={ { width: '50%' } }>
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
		</>
	);
};

export default DegreeSettings;
