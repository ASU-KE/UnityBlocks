/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import {
	Button,
	IconButton,
	PanelBody,
	PanelRow,
	RadioControl,
	ResponsiveWrapper,
	TextControl,
	Toolbar,
} from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: {
			heroType,
			mediaId,
			mediaUrl,
			mediaAltText,
			mediaCssClass,
			mediaSize,
			subTitleText,
			subTitleHighlightColor,
			subTitleMaxWidth,
			subTitleCssClass,
			titleText,
			titleHighlightColor,
			titleMaxWidth,
			titleCssClass,
			contentsText,
			contentsMaxWidth,
			contentsCssClass,
			contentsHighlightColor,
			contentsColor,
		},
		className,
		setAttributes,
	} = props;

	const removeMedia = () => {
		props.setAttributes( {
			mediaId: 0,
			mediaUrl: '',
		} );
	};

	const onSelectMedia = ( media ) => {
		// console.error( media );

		props.setAttributes( {
			mediaId: media.id,
			mediaUrl: media.url,
			mediaAltText: media.alt,
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __(
						'Select hero background image',
						'unityblocks'
					) }
					initialOpen={ true }
				>
					<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectMedia }
								value={ mediaId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={
											mediaId == 0
												? 'editor-post-featured-image__toggle'
												: 'editor-post-featured-image__preview'
										}
										onClick={ open }
									>
										{ mediaId == 0 &&
											__(
												'Choose an image',
												'unityblocks'
											) }
										{ props.media !== undefined && (
											<ResponsiveWrapper
												naturalWidth={
													props.media.media_details
														.width
												}
												naturalHeight={
													props.media.media_details
														.height
												}
											>
												<img
													alt={ props.media.alt }
													src={
														props.media.source_url
													}
												/>
											</ResponsiveWrapper>
										) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
						{ mediaId !== 0 && (
							<MediaUploadCheck>
								<MediaUpload
									title={ __(
										'Replace image',
										'unityblocks'
									) }
									value={ mediaId }
									onSelect={ onSelectMedia }
									allowedTypes={ [ 'image' ] }
									render={ ( { open } ) => (
										<Button
											onClick={ open }
											isDefault
											isLarge
										>
											{ __(
												'Replace image',
												'unityblocks'
											) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
						) }
						{ mediaId !== 0 && (
							<MediaUploadCheck>
								<Button
									onClick={ removeMedia }
									isLink
									isDestructive
								>
									{ __( 'Remove image', 'unityblocks' ) }
								</Button>
							</MediaUploadCheck>
						) }
					</div>
				</PanelBody>

				<PanelBody
					title={ __( 'Unity hero settings', 'unityblocks' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<RadioControl
							label={ __( 'Hero size', 'unityblocks' ) }
							selected={ mediaSize }
							options={ [
								{
									label: __(
										'Small (1920x256)',
										'unityblocks'
									),
									value: 'small',
								},
								{
									label: __(
										'Medium (1920x512)',
										'unityblocks'
									),
									value: 'medium',
								},
								{
									label: __(
										'Large (1920x640)',
										'unityblocks'
									),
									value: 'large',
								},
							] }
							onChange={ ( mediaSize ) =>
								setAttributes( { mediaSize } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="hero__title-text"
							label={ 'Hero title text' }
							placeholder="Title text"
							value={ titleText }
							onChange={ ( titleText ) =>
								setAttributes( { titleText } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __(
								'Hero title highlight color',
								'unityblocks'
							) }
							selected={ titleHighlightColor }
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
							onChange={ ( titleHighlightColor ) =>
								setAttributes( { titleHighlightColor } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="hero__subtitle-text"
							label={ 'Hero subtitle text' }
							placeholder="Subtitle text"
							value={ subTitleText }
							onChange={ ( subTitleText ) =>
								setAttributes( { subTitleText } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __(
								'Hero subtitle highlight color',
								'unityblocks'
							) }
							selected={ subTitleHighlightColor }
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
							onChange={ ( subTitleHighlightColor ) =>
								setAttributes( { subTitleHighlightColor } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
