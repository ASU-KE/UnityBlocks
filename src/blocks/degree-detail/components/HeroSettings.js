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
	CardHeader,
	CardMedia,
	IconButton,
	RadioControl,
	TextControl,
	Toolbar,
} from '@wordpress/components';

import icon from './icon';

/**
 * Block controls
 *
 * @param {Object} props
 */
const HeroSettings = ( props ) => {
	const {
		attributes: {
			heroType,
			heroMediaId,
			heroMediaUrl,
			heroMediaAltText,
			heroMediaCssClass,
			heroMediaSize,
			heroSubTitleText,
			heroSubTitleHighlightColor,
			heroSubTitleMaxWidth,
			heroSubTitleCssClass,
			heroTitleText,
			heroTitleHighlightColor,
			heroTitleMaxWidth,
			heroTitleCssClass,
			heroContentsText,
			heroContentsMaxWidth,
			heroContentsCssClass,
			heroContentsHighlightColor,
			heroContentsColor,
		},
		setAttributes,
	} = props;

	const onSelectMedia = ( media ) => {
		props.setAttributes( {
			heroMediaId: media.id,
			heroMediaUrl: media.url,
			heroMediaAltText: media.alt,
		} );
	};

	return (
		<>
			{ !! heroMediaId && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							value={ heroMediaId }
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

			<Card elevation={ 0 } size={ 'small' } style={ { width: '50%' } }>
				<CardHeader>
					<h2>Customize the degree page hero</h2>
				</CardHeader>

				<CardBody>
					<RadioControl
						label={ __( 'Type', 'unityblocks' ) }
						selected={ heroType }
						options={ [
							{
								label: __( 'Standard', 'unityblocks' ),
								value: 'heading-hero',
							},
							{
								label: __(
									'Story (Not Implemented)',
									'unityblocks'
								),
								value: 'story-hero',
							},
						] }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroType: newValue,
							} )
						}
					/>
				</CardBody>

				<CardBody>
					<RadioControl
						label={ __( 'Size', 'unityblocks' ) }
						selected={ heroMediaSize }
						options={ [
							{
								label: __( 'Small (1920x256)', 'unityblocks' ),
								value: 'small',
							},
							{
								label: __( 'Medium (1920x512)', 'unityblocks' ),
								value: 'medium',
							},
							{
								label: __( 'Large (1920x640)', 'unityblocks' ),
								value: 'large',
							},
						] }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroMediaSize: newValue,
							} )
						}
					/>
				</CardBody>

				<CardBody>
					<TextControl
						label={ 'Hero CSS classes' }
						help="Separate multiple classes with spaces."
						value={ heroMediaCssClass }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroMediaCssClass: newValue,
							} )
						}
					/>
				</CardBody>

				{ heroMediaId === 0 && (
					<CardBody>
						<MediaUploadCheck>
							<MediaPlaceholder
								labels={ {
									title: __( 'Hero image', 'unityblocks' ),
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
				) }
				{ heroMediaId !== 0 && (
					<CardMedia>
						<img alt={ heroMediaAltText } src={ heroMediaUrl } />
					</CardMedia>
				) }

				<CardDivider />

				<CardBody>
					<TextControl
						label={ 'Title text' }
						placeholder="Text"
						value={ heroTitleText }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroTitleText: newValue,
							} )
						}
					/>
					<RadioControl
						label={ __( 'Title highlight color', 'unityblocks' ) }
						selected={ heroTitleHighlightColor }
						options={ [
							{
								label: __( 'Gold', 'unityblocks' ),
								value: 'gold',
							},
							{
								label: __( 'White', 'unityblocks' ),
								value: 'white',
							},
							{
								label: __( 'Black', 'unityblocks' ),
								value: 'black',
							},
						] }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroTitleHighlightColor: newValue,
							} )
						}
					/>
					<TextControl
						label={ 'Title max width' }
						placeholder="e.g. 0px"
						value={ heroTitleMaxWidth }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroTitleMaxWidth: newValue,
							} )
						}
					/>
					<TextControl
						label={ 'Title CSS classes' }
						help="Separate multiple classes with spaces."
						value={ heroTitleCssClass }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroTitleCssClass: newValue,
							} )
						}
					/>
				</CardBody>

				<CardDivider />

				<CardBody>
					<TextControl
						label={ 'Subtitle text' }
						placeholder="Text"
						value={ heroSubTitleText }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroSubTitleText: newValue,
							} )
						}
					/>
					<RadioControl
						label={ __(
							'Subtitle highlight color',
							'unityblocks'
						) }
						selected={ heroSubTitleHighlightColor }
						options={ [
							{
								label: __( 'Gold', 'unityblocks' ),
								value: 'gold',
							},
							{
								label: __( 'White', 'unityblocks' ),
								value: 'white',
							},
							{
								label: __( 'Black', 'unityblocks' ),
								value: 'black',
							},
						] }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroSubTitleHighlightColor: newValue,
							} )
						}
					/>
					<TextControl
						label={ 'Subtitle max width' }
						placeholder="e.g. 0px"
						value={ heroSubTitleMaxWidth }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroSubTitleMaxWidth: newValue,
							} )
						}
					/>
					<TextControl
						label={ 'Subtitle CSS classes' }
						help="Separate multiple classes with spaces."
						value={ heroSubTitleCssClass }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroSubTitleCssClass: newValue,
							} )
						}
					/>
				</CardBody>

				<CardDivider />

				<CardBody>
					<TextControl
						label={ 'Contents text' }
						value={ heroContentsText }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroContentsText: newValue,
							} )
						}
					/>
					<RadioControl
						label={ __( 'Contents text color', 'unityblocks' ) }
						selected={ heroContentsColor }
						options={ [
							{
								label: __( 'White', 'unityblocks' ),
								value: 'white',
							},
							{
								label: __( 'Gold', 'unityblocks' ),
								value: 'gold',
							},
							{
								label: __( 'Black', 'unityblocks' ),
								value: 'black',
							},
						] }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroContentsColor: newValue,
							} )
						}
					/>
					<RadioControl
						label={ __(
							'Contents highlight color',
							'unityblocks'
						) }
						selected={ heroContentsHighlightColor }
						options={ [
							{
								label: __( 'White', 'unityblocks' ),
								value: 'white',
							},
							{
								label: __( 'Gold', 'unityblocks' ),
								value: 'gold',
							},
							{
								label: __( 'Black', 'unityblocks' ),
								value: 'black',
							},
						] }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroContentsHighlightColor: newValue,
							} )
						}
					/>
					<TextControl
						label={ 'Contents max width' }
						placeholder="e.g. 0px"
						value={ heroContentsMaxWidth }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroContentsMaxWidth: newValue,
							} )
						}
					/>
					<TextControl
						label={ 'Contents CSS classes' }
						help="Separate multiple classes with spaces."
						value={ heroContentsCssClass }
						onChange={ ( newValue ) =>
							setAttributes( {
								heroContentsCssClass: newValue,
							} )
						}
					/>
				</CardBody>
			</Card>
		</>
	);
};

export default HeroSettings;
