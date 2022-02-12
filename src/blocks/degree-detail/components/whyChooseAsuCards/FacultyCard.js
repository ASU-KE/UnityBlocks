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
const FacultyCard = ( props ) => {
	const {
		attributes: {
			whyChooseAsu__facultyImageId,
			whyChooseAsu__facultyImageUrl,
			whyChooseAsu__facultyImageAltText,
			whyChooseAsu__facultyImageCss,
			whyChooseAsu__facultyTitle,
			whyChooseAsu__facultyText,
			whyChooseAsu__facultyButtonIcon,
			whyChooseAsu__facultyButtonLabel,
			whyChooseAsu__facultyButtonAria,
			whyChooseAsu__facultyButtonUrl,
			whyChooseAsu__facultyButtonColor,
			whyChooseAsu__facultyButtonSize,
		},
		setAttributes,
	} = props;

	const onSelectMedia = ( media ) => {
		props.setAttributes( {
			whyChooseAsu__facultyImageId: media.id,
			whyChooseAsu__facultyImageUrl: media.url,
			whyChooseAsu__facultyImageAltText: media.alt,
		} );
	};

	return (
		<>
			{ whyChooseAsu__facultyImageId !== undefined && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							value={ whyChooseAsu__facultyImageId }
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
									whyChooseAsu__facultyTitle: __(
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
					{ whyChooseAsu__facultyImageId !== undefined && (
						<CardBody>
							<CardMedia>
								<img
									alt={ whyChooseAsu__facultyImageAltText }
									src={ whyChooseAsu__facultyImageUrl }
								/>
							</CardMedia>
						</CardBody>
					) }
					<CardBody>
						<TextControl
							label={ 'Image CSS classes' }
							help="Separate multiple classes with spaces."
							value={ whyChooseAsu__facultyImageCss }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__facultyImageCss: newValue,
								} )
							}
						/>
					</CardBody>

					<CardDivider />

					<CardBody>
						<TextControl
							label={ 'Card title' }
							value={ whyChooseAsu__facultyTitle }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__facultyTitle: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextareaControl
							label={ 'Card content' }
							value={ whyChooseAsu__facultyText }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__facultyText: newValue,
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
							value={ whyChooseAsu__facultyButtonIcon }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__facultyButtonIcon: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button label' }
							value={ whyChooseAsu__facultyButtonLabel }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__facultyButtonLabel: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button ARIA label' }
							value={ whyChooseAsu__facultyButtonAria }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__facultyButtonAria: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button URL' }
							value={ whyChooseAsu__facultyButtonUrl }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__facultyButtonUrl: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button color', 'unityblocks' ) }
							selected={ whyChooseAsu__facultyButtonColor }
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
									whyChooseAsu__facultyButtonColor: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button size', 'unityblocks' ) }
							selected={ whyChooseAsu__facultyButtonSize }
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
									whyChooseAsu__facultyButtonSize: newValue,
								} )
							}
						/>
					</CardBody>
				</PanelBody>
			</Card>
		</>
	);
};

export { FacultyCard };
