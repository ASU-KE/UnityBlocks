/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	MediaUploadCheck,
	MediaUpload,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import {
	Card,
	CardBody,
	CardDivider,
	CardMedia,
	IconButton,
	PanelBody,
	RadioControl,
	TextareaControl,
	TextControl,
	Toolbar,
} from '@wordpress/components';

import icon from './icon';

/**
 * Block controls
 *
 * @param {Object} props
 */
const FacultyCard = ( props ) => {
	const {
		attributes: {
			whyChooseAsu__honorsImageId,
			whyChooseAsu__honorsImageUrl,
			whyChooseAsu__honorsImageAltText,
			whyChooseAsu__honorsImageCss,
			whyChooseAsu__honorsTitle,
			whyChooseAsu__honorsText,
			whyChooseAsu__honorsButtonIcon,
			whyChooseAsu__honorsButtonLabel,
			whyChooseAsu__honorsButtonUrl,
			whyChooseAsu__honorsButtonColor,
			whyChooseAsu__honorsButtonSize,
		},
		setAttributes,
	} = props;

	const onSelectMedia = ( media ) => {
		props.setAttributes( {
			whyChooseAsu__honorsImageId: media.id,
			whyChooseAsu__honorsImageUrl: media.url,
			whyChooseAsu__honorsImageAltText: media.alt,
		} );
	};

	return (
		<>
			{ whyChooseAsu__honorsImageId !== undefined && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							value={ whyChooseAsu__honorsImageId }
							onSelect={ onSelectMedia }
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<IconButton
									label={ __( 'Edit image', 'unityblocks' ) }
									icon="edit"
									onClick={ open }
								/>
							) }
						/>
					</Toolbar>
				</BlockControls>
			) }

			<Card size={ 'small' } style={ { width: '50%' } }>
				<PanelBody title="Faculty Card" initialOpen={ false }>
					<CardBody>
						<MediaUploadCheck>
							<MediaPlaceholder
								labels={ {
									whyChooseAsu__honorsTitle: __(
										'Hero image',
										'unityblocks'
									),
									instructions: __(
										'Drag image, upload a new one or select file from your library.',
										'unityblocks'
									),
								} }
								icon={ icon }
								accept="images/*"
								onSelect={ onSelectMedia }
							/>
						</MediaUploadCheck>
					</CardBody>
					{ whyChooseAsu__honorsImageId !== undefined && (
						<CardBody>
							<CardMedia>
								<img
									alt={ whyChooseAsu__honorsImageAltText }
									src={ whyChooseAsu__honorsImageUrl }
								/>
							</CardMedia>
						</CardBody>
					) }
					<CardBody>
						<TextControl
							label={ 'Image CSS classes' }
							help="Separate multiple classes with spaces."
							value={ whyChooseAsu__honorsImageCss }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__honorsImageCss: newValue,
								} )
							}
						/>
					</CardBody>

					<CardDivider />

					<CardBody>
						<TextControl
							label={ 'Card title' }
							value={ whyChooseAsu__honorsTitle }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__honorsTitle: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextareaControl
							label={ 'Card content' }
							value={ whyChooseAsu__honorsText }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__honorsText: newValue,
								} )
							}
						/>
					</CardBody>

					<CardDivider />

					<CardBody>
						<TextControl
							label={ 'Card button icon' }
							value={ whyChooseAsu__honorsButtonIcon }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__honorsButtonIcon: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button label' }
							value={ whyChooseAsu__honorsButtonLabel }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__honorsButtonLabel: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button URL' }
							value={ whyChooseAsu__honorsButtonUrl }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__honorsButtonUrl: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button color', 'unityblocks' ) }
							selected={ whyChooseAsu__honorsButtonColor }
							options={ [
								{
									label: __( 'Maroon', 'unityblocks' ),
									value: 'maroon',
								},
								{
									label: __( 'Gold', 'unityblocks' ),
									value: 'gold',
								},
								{
									label: __( 'Gray', 'unityblocks' ),
									value: 'gray',
								},
								{
									label: __( 'Dark', 'unityblocks' ),
									value: 'dark',
								},
							] }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__honorsButtonColor: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button size', 'unityblocks' ) }
							selected={ whyChooseAsu__honorsButtonSize }
							options={ [
								{
									label: __( 'Default', 'unityblocks' ),
									value: 'default',
								},
								{
									label: __( 'Small', 'unityblocks' ),
									value: 'small',
								},
								{
									label: __( 'Xsmall', 'unityblocks' ),
									value: 'xsmall',
								},
							] }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__honorsButtonSize: newValue,
								} )
							}
						/>
					</CardBody>
				</PanelBody>
			</Card>
		</>
	);
};

export default FacultyCard;
