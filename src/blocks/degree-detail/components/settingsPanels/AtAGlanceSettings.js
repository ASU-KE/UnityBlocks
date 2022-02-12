/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	Card,
	CardBody,
	CardDivider,
	IconButton,
	TextControl,
} from '@wordpress/components';

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
			atAGlance__firstRequirementMathCourse,
			atAGlance__mathIntensity,
			atAGlance__timeCommitment,
		},
		setAttributes,
	} = props;

	const handleAddLocation = () => {
		const locationTitles = [
			...props.attributes.atAGlance__locationsTitle,
		];
		const locationUrls = [ ...props.attributes.atAGlance__locationsUrl ];

		locationTitles.push( '' );
		locationUrls.push( '' );

		props.setAttributes( {
			atAGlance__locationsTitle: locationTitles,
			atAGlance__locationsUrl: locationUrls,
		} );
	};

	const handleRemoveLocation = ( index ) => {
		const locationTitles = [
			...props.attributes.atAGlance__locationsTitle,
		];
		const locationUrls = [ ...props.attributes.atAGlance__locationsUrl ];

		locationTitles.splice( index, 1 );
		locationUrls.splice( index, 1 );

		props.setAttributes( {
			atAGlance__locationsTitle: locationTitles,
			atAGlance__locationsUrl: locationUrls,
		} );
	};

	const handleTitleChange = ( title, index ) => {
		const locationTitles = [
			...props.attributes.atAGlance__locationsTitle,
		];
		locationTitles[ index ] = title;
		props.setAttributes( { atAGlance__locationsTitle: locationTitles } );
	};

	const handleUrlChange = ( link, index ) => {
		const locationUrls = [ ...props.attributes.atAGlance__locationsUrl ];
		locationUrls[ index ] = link;
		props.setAttributes( { atAGlance__locationsUrl: locationUrls } );
	};

	let locations;

	if ( props.attributes.atAGlance__locationsTitle.length ) {
		locations = props.attributes.atAGlance__locationsTitle.map(
			( title, index ) => {
				return (
					<CardBody key={ index }>
						<TextControl
							label={ 'Location title' }
							value={
								props.attributes.atAGlance__locationsTitle[
									index
								]
							}
							onChange={ ( newValue ) =>
								handleTitleChange( newValue, index )
							}
						/>
						<TextControl
							label={ 'Location URL' }
							value={
								props.attributes.atAGlance__locationsUrl[
									index
								]
							}
							onChange={ ( newValue ) =>
								handleUrlChange( newValue, index )
							}
						/>
						<IconButton
							icon="no-alt"
							label="Delete item"
							onClick={ () => handleRemoveLocation( index ) }
						/>
					</CardBody>
				);
			}
		);
	}

	return (
		<>
			<h2>Customize Program At a Glance settings</h2>
			<Card size={ 'small' } style={ { width: '50%' } }>
				<CardBody>
					<TextControl
						label={ 'Degree Offered By - Text' }
						value={ atAGlance__offeredByText }
						onChange={ ( newValue ) =>
							setAttributes( {
								atAGlance__offeredByText: newValue,
							} )
						}
					/>
					<TextControl
						label={ 'Degree Offered By - URL' }
						value={ atAGlance__offeredByUrl }
						onChange={ ( newValue ) =>
							setAttributes( {
								atAGlance__offeredByUrl: newValue,
							} )
						}
					/>
				</CardBody>

				<CardBody>
					<TextControl
						label={ 'First requirement math course' }
						value={ atAGlance__firstRequirementMathCourse }
						onChange={ ( newValue ) =>
							setAttributes( {
								atAGlance__firstRequirementMathCourse: newValue,
							} )
						}
					/>
					<TextControl
						label={ 'Math intensity' }
						value={ atAGlance__mathIntensity }
						onChange={ ( newValue ) =>
							setAttributes( {
								atAGlance__mathIntensity: newValue,
							} )
						}
					/>
					<TextControl
						label={ 'Time commitment' }
						value={ atAGlance__timeCommitment }
						onChange={ ( newValue ) =>
							setAttributes( {
								atAGlance__timeCommitment: newValue,
							} )
						}
					/>
				</CardBody>

				<CardDivider />

				<CardBody>
					<h4>Custom locations</h4>
				</CardBody>
				{ locations }
				<CardBody>
					<Button
						isDefault
						onClick={ handleAddLocation.bind( this ) }
					>
						{ __( 'Add Location' ) }
					</Button>
				</CardBody>
			</Card>
		</>
	);
};

export { AtAGlanceSettings };
