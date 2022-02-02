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
			quoteTitle,
			quoteContent,
			quoteCiteName,
			quoteCiteDescription,
			mediaId,
			containerCssClass,
			titleCssClass,
			contentCssClass,
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
					title={ __( 'Select testimonial image', 'unityblocks' ) }
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
											mediaId === 0
												? 'editor-post-featured-image__toggle'
												: 'editor-post-featured-image__preview'
										}
										onClick={ open }
									>
										{ mediaId === 0 &&
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
					title={ __( 'Testimonial quote', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="testimonial__quote-title"
							label={ 'Title' }
							placeholder="Text"
							value={ quoteTitle }
							onChange={ ( quoteTitle ) =>
								setAttributes( { quoteTitle } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="testimonial__quote-content"
							label={ 'Content' }
							placeholder="Text"
							value={ quoteContent }
							onChange={ ( quoteContent ) =>
								setAttributes( { quoteContent } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="testimonial__cite-name"
							label={ 'Cite name' }
							placeholder="Text"
							value={ quoteCiteName }
							onChange={ ( quoteCiteName ) =>
								setAttributes( { quoteCiteName } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="testimonial__cite-description"
							label={ 'Cite description' }
							placeholder="Text"
							value={ quoteCiteDescription }
							onChange={ ( quoteCiteDescription ) =>
								setAttributes( { quoteCiteDescription } )
							}
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'Testimonial styles', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="testimonial__style-container"
							label={ 'Container CSS class' }
							disabled
							placeholder="Not implemented"
							value={ containerCssClass }
							onChange={ ( containerCssClass ) =>
								setAttributes( { containerCssClass } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="testimonial__style-title"
							label={ 'Title CSS class' }
							disabled
							placeholder="Not implemented"
							value={ titleCssClass }
							onChange={ ( titleCssClass ) =>
								setAttributes( { titleCssClass } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="testimonial__style-content"
							label={ 'Content CSS class' }
							disabled
							placeholder="Not implemented"
							value={ contentCssClass }
							onChange={ ( contentCssClass ) =>
								setAttributes( { contentCssClass } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
