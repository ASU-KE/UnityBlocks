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

import icon from '../icon';

/**
 * Block controls
 *
 * @param {Object} props
 */
const ProgramsCard = ( props ) => {
	const {
		attributes: {
			whyChooseAsu__programsImageId,
			whyChooseAsu__programsImageUrl,
			whyChooseAsu__programsImageAltText,
			whyChooseAsu__programsImageCss,
			whyChooseAsu__programsTitle,
			whyChooseAsu__programsText,
			whyChooseAsu__programsButtonIcon,
			whyChooseAsu__programsButtonLabel,
			whyChooseAsu__programsButtonAria,
			whyChooseAsu__programsButtonUrl,
			whyChooseAsu__programsButtonColor,
			whyChooseAsu__programsButtonSize,
		},
		setAttributes,
	} = props;

	const onSelectMedia = ( media ) => {
		props.setAttributes( {
			whyChooseAsu__programsImageId: media.id,
			whyChooseAsu__programsImageUrl: media.url,
			whyChooseAsu__programsImageAltText: media.alt,
		} );
	};

	return (
		<>
			{ whyChooseAsu__programsImageId !== undefined && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							value={ whyChooseAsu__programsImageId }
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
				<PanelBody title="Programs Card" initialOpen={ false }>
					<CardBody>
						<MediaUploadCheck>
							<MediaPlaceholder
								labels={ {
									whyChooseAsu__programsTitle: __(
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
					{ whyChooseAsu__programsImageId !== undefined && (
						<CardBody>
							<CardMedia>
								<img
									alt={ whyChooseAsu__programsImageAltText }
									src={ whyChooseAsu__programsImageUrl }
								/>
							</CardMedia>
						</CardBody>
					) }
					<CardBody>
						<TextControl
							label={ 'Image CSS classes' }
							help="Separate multiple classes with spaces."
							value={ whyChooseAsu__programsImageCss }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__programsImageCss: newValue,
								} )
							}
						/>
					</CardBody>

					<CardDivider />

					<CardBody>
						<TextControl
							label={ 'Card title' }
							value={ whyChooseAsu__programsTitle }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__programsTitle: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextareaControl
							label={ 'Card content' }
							value={ whyChooseAsu__programsText }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__programsText: newValue,
								} )
							}
						/>
					</CardBody>

					<CardDivider />

					<CardBody>
						<TextControl
							label={ 'Card button icon' }
							help={
								'Enter Font Awesome icon classnames separated by spaces. e.g. "fas info-circle"'
							}
							value={ whyChooseAsu__programsButtonIcon }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__programsButtonIcon: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button label' }
							value={ whyChooseAsu__programsButtonLabel }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__programsButtonLabel: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button ARIA label' }
							value={ whyChooseAsu__programsButtonAria }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__programsButtonAria: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button URL' }
							value={ whyChooseAsu__programsButtonUrl }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__programsButtonUrl: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button color', 'unityblocks' ) }
							selected={ whyChooseAsu__programsButtonColor }
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
									whyChooseAsu__programsButtonColor: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button size', 'unityblocks' ) }
							selected={ whyChooseAsu__programsButtonSize }
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
									whyChooseAsu__programsButtonSize: newValue,
								} )
							}
						/>
					</CardBody>
				</PanelBody>
			</Card>
		</>
	);
};

export { ProgramsCard };
