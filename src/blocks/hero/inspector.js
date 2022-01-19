/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	PanelRow,
	RadioControl,
	ResponsiveWrapper,
	TextControl,
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
			// mediaCssClass,
			mediaSize,
			subTitleText,
			subTitleHighlightColor,
			subTitleMaxWidth,
			// subTitleCssClass,
			titleText,
			titleHighlightColor,
			titleMaxWidth,
			// titleCssClass,
			contentsText,
			contentsMaxWidth,
			// contentsCssClass,
			contentsHighlightColor,
			contentsColor,
		},
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
					title={ __( 'Hero format', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
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
							onChange={ ( heroType ) =>
								setAttributes( { heroType } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __( 'Size', 'unityblocks' ) }
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
				</PanelBody>

				<PanelBody
					title={ __( 'Hero title', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="hero__title-text"
							label={ 'Title text' }
							placeholder="Text"
							value={ titleText }
							onChange={ ( titleText ) =>
								setAttributes( { titleText } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __(
								'Title highlight color',
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
							className="hero__title-maxwidth"
							label={ 'Title max width' }
							placeholder="e.g. 0px"
							value={ titleMaxWidth }
							onChange={ ( titleMaxWidth ) =>
								setAttributes( { titleMaxWidth } )
							}
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'Hero subtitle', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="hero__subtitle-text"
							label={ 'Subtitle text' }
							placeholder="Text"
							value={ subTitleText }
							onChange={ ( subTitleText ) =>
								setAttributes( { subTitleText } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __(
								'Subtitle highlight color',
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
								setAttributes( {
									subTitleHighlightColor,
								} )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="hero__subtitle-maxwidth"
							label={ 'Subtitle max width' }
							placeholder="e.g. 0px"
							value={ subTitleMaxWidth }
							onChange={ ( subTitleMaxWidth ) =>
								setAttributes( { subTitleMaxWidth } )
							}
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'Hero contents', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="hero__contents-text"
							label={ 'Contents text' }
							placeholder="Text"
							value={ contentsText }
							onChange={ ( contentsText ) =>
								setAttributes( { contentsText } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __( 'Contents text color', 'unityblocks' ) }
							selected={ contentsColor }
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
							onChange={ ( contentsColor ) =>
								setAttributes( {
									contentsColor,
								} )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __(
								'Contents highlight color',
								'unityblocks'
							) }
							selected={ contentsHighlightColor }
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
							onChange={ ( contentsHighlightColor ) =>
								setAttributes( {
									contentsHighlightColor,
								} )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="hero__contents-maxwidth"
							label={ 'Contents max width' }
							placeholder="e.g. 0px"
							value={ contentsMaxWidth }
							onChange={ ( contentsMaxWidth ) =>
								setAttributes( { contentsMaxWidth } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
