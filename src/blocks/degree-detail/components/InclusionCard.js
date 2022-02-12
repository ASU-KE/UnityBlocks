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
const InclusionCard = ( props ) => {
	const {
		attributes: {
			whyChooseAsu__inclusionImageId,
			whyChooseAsu__inclusionImageUrl,
			whyChooseAsu__inclusionImageAltText,
			whyChooseAsu__inclusionImageCss,
			whyChooseAsu__inclusionTitle,
			whyChooseAsu__inclusionText,
			whyChooseAsu__inclusionButtonIcon,
			whyChooseAsu__inclusionButtonLabel,
			whyChooseAsu__inclusionButtonUrl,
			whyChooseAsu__inclusionButtonColor,
			whyChooseAsu__inclusionButtonSize,
		},
		setAttributes,
	} = props;

	const onSelectMedia = ( media ) => {
		props.setAttributes( {
			whyChooseAsu__inclusionImageId: media.id,
			whyChooseAsu__inclusionImageUrl: media.url,
			whyChooseAsu__inclusionImageAltText: media.alt,
		} );
	};

	return (
		<>
			{ whyChooseAsu__inclusionImageId !== undefined && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							value={ whyChooseAsu__inclusionImageId }
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
				<PanelBody title="Inclusion Card" initialOpen={ false }>
					<CardBody>
						<MediaUploadCheck>
							<MediaPlaceholder
								labels={ {
									whyChooseAsu__inclusionTitle: __(
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
					{ whyChooseAsu__inclusionImageId !== undefined && (
						<CardBody>
							<CardMedia>
								<img
									alt={ whyChooseAsu__inclusionImageAltText }
									src={ whyChooseAsu__inclusionImageUrl }
								/>
							</CardMedia>
						</CardBody>
					) }
					<CardBody>
						<TextControl
							label={ 'Image CSS classes' }
							help="Separate multiple classes with spaces."
							value={ whyChooseAsu__inclusionImageCss }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__inclusionImageCss: newValue,
								} )
							}
						/>
					</CardBody>

					<CardDivider />

					<CardBody>
						<TextControl
							label={ 'Card title' }
							value={ whyChooseAsu__inclusionTitle }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__inclusionTitle: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextareaControl
							label={ 'Card content' }
							value={ whyChooseAsu__inclusionText }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__inclusionText: newValue,
								} )
							}
						/>
					</CardBody>

					<CardDivider />

					<CardBody>
						<TextControl
							label={ 'Card button icon' }
							value={ whyChooseAsu__inclusionButtonIcon }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__inclusionButtonIcon: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button label' }
							value={ whyChooseAsu__inclusionButtonLabel }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__inclusionButtonLabel: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button URL' }
							value={ whyChooseAsu__inclusionButtonUrl }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__inclusionButtonUrl: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button color', 'unityblocks' ) }
							selected={ whyChooseAsu__inclusionButtonColor }
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
									whyChooseAsu__inclusionButtonColor: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button size', 'unityblocks' ) }
							selected={ whyChooseAsu__inclusionButtonSize }
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
									whyChooseAsu__inclusionButtonSize: newValue,
								} )
							}
						/>
					</CardBody>
				</PanelBody>
			</Card>
		</>
	);
};

export default InclusionCard;
