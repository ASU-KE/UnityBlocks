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
const MentorsCard = ( props ) => {
	const {
		attributes: {
			whyChooseAsu__mentorsImageId,
			whyChooseAsu__mentorsImageUrl,
			whyChooseAsu__mentorsImageAltText,
			whyChooseAsu__mentorsImageCss,
			whyChooseAsu__mentorsTitle,
			whyChooseAsu__mentorsText,
			whyChooseAsu__mentorsButtonLabel,
			whyChooseAsu__mentorsButtonAria,
			whyChooseAsu__mentorsButtonUrl,
			whyChooseAsu__mentorsButtonColor,
			whyChooseAsu__mentorsButtonSize,
		},
		setAttributes,
	} = props;

	const onSelectMedia = ( media ) => {
		props.setAttributes( {
			whyChooseAsu__mentorsImageId: media.id,
			whyChooseAsu__mentorsImageUrl: media.url,
			whyChooseAsu__mentorsImageAltText: media.alt,
		} );
	};

	return (
		<>
			{ whyChooseAsu__mentorsImageId !== undefined && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							value={ whyChooseAsu__mentorsImageId }
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
				<PanelBody title="Mentors Card" initialOpen={ false }>
					<CardBody>
						<MediaUploadCheck>
							<MediaPlaceholder
								labels={ {
									whyChooseAsu__mentorsTitle: __(
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
					{ whyChooseAsu__mentorsImageId !== undefined && (
						<CardBody>
							<CardMedia>
								<img
									alt={ whyChooseAsu__mentorsImageAltText }
									src={ whyChooseAsu__mentorsImageUrl }
								/>
							</CardMedia>
						</CardBody>
					) }
					<CardBody>
						<TextControl
							label={ 'Image CSS classes' }
							help="Separate multiple classes with spaces."
							value={ whyChooseAsu__mentorsImageCss }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__mentorsImageCss: newValue,
								} )
							}
						/>
					</CardBody>

					<CardDivider />

					<CardBody>
						<TextControl
							label={ 'Card title' }
							value={ whyChooseAsu__mentorsTitle }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__mentorsTitle: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextareaControl
							label={ 'Card content' }
							value={ whyChooseAsu__mentorsText }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__mentorsText: newValue,
								} )
							}
						/>
					</CardBody>

					<CardDivider />

					<CardBody>
						<TextControl
							label={ 'Card button label' }
							value={ whyChooseAsu__mentorsButtonLabel }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__mentorsButtonLabel: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button ARIA label' }
							value={ whyChooseAsu__mentorsButtonAria }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__mentorsButtonAria: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<TextControl
							label={ 'Card button URL' }
							value={ whyChooseAsu__mentorsButtonUrl }
							onChange={ ( newValue ) =>
								setAttributes( {
									whyChooseAsu__mentorsButtonUrl: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button color', 'unityblocks' ) }
							selected={ whyChooseAsu__mentorsButtonColor }
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
									whyChooseAsu__mentorsButtonColor: newValue,
								} )
							}
						/>
					</CardBody>
					<CardBody>
						<RadioControl
							label={ __( 'Card button size', 'unityblocks' ) }
							selected={ whyChooseAsu__mentorsButtonSize }
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
									whyChooseAsu__mentorsButtonSize: newValue,
								} )
							}
						/>
					</CardBody>
				</PanelBody>
			</Card>
		</>
	);
};

export { MentorsCard };
