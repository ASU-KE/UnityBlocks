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
	RichText,
} from '@wordpress/block-editor';
import {
	Card,
	CardBody,
	CardDivider,
	CardMedia,
	IconButton,
	// TextControl,
	ToggleControl,
	Toolbar,
} from '@wordpress/components';

import icon from '../icon';

/**
 * Block controls
 *
 * @param {Object} props
 */
const IntroductionSettings = ( props ) => {
	const {
		attributes: {
			appPathFolder,
			introContent__hideMarketText,
			introContent__hideProgramDesc,
			introContent__hideRequiredCourses,
			// introContent__breadcrumbsUrl,
			// introContent__breadcrumbsText,
			// introContent__breadcrumbsisActive,
			introContent__contentsText,
			// introContent__contentsCssClass,
			// introContent__videoType,
			// introContent__videoId,
			// introContent__videoUrl,
			// introContent__videoAltText,
			// introContent__videoVttUrl,
			// introContent__videoTitle,
			introContent__imageId,
			introContent__imageUrl,
			introContent__imageAltText,
			// introContent__imageCssClass,
		},
		setAttributes,
	} = props;

	const onSelectMedia = ( media ) => {
		props.setAttributes( {
			introContent__imageId: media.id,
			introContent__imageUrl: media.url,
			introContent__imageAltText: media.alt,
		} );
	};

	return (
		<>
			{ !! introContent__imageId && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							value={ introContent__imageId }
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

			<h2>Customize the Introduction</h2>
			<RichText
				tagName="div"
				multiline="p"
				placeholder={ __( 'Enter custom content here', 'unityblocks' ) }
				value={ introContent__contentsText }
				onChange={ ( newValue ) =>
					setAttributes( {
						introContent__contentsText: newValue,
					} )
				}
			/>

			<Card size={ 'small' } style={ { width: '50%' } }>
				<CardDivider />
				<CardBody>
					<ToggleControl
						label={ 'Enable "Market Text"' }
						help={
							introContent__hideMarketText
								? 'Hidden.'
								: 'Enabled.'
						}
						checked={ ! introContent__hideMarketText }
						onChange={ ( newValue ) => {
							setAttributes( {
								introContent__hideMarketText: ! newValue,
							} );
						} }
					/>
					<ToggleControl
						label={ 'Enable "Program Description"' }
						help={
							introContent__hideProgramDesc
								? 'Hidden.'
								: 'Enabled.'
						}
						checked={ ! introContent__hideProgramDesc }
						onChange={ ( newValue ) => {
							setAttributes( {
								introContent__hideProgramDesc: ! newValue,
							} );
						} }
					/>
					<ToggleControl
						label={ 'Enable "Required Courses"' }
						help={
							introContent__hideRequiredCourses
								? 'Hidden.'
								: 'Enabled.'
						}
						checked={ ! introContent__hideRequiredCourses }
						onChange={ ( newValue ) => {
							setAttributes( {
								introContent__hideRequiredCourses: ! newValue,
							} );
						} }
					/>
				</CardBody>

				{ /* <CardBody>
					<TextControl
						label={ 'Content CSS classes' }
						help="Separate multiple classes with spaces."
						value={ introContent__contentsCssClass }
						onChange={ ( newValue ) =>
							setAttributes( {
								introContent__contentsCssClass: newValue,
							} )
						}
					/>
				</CardBody> */ }

				<CardBody>
					<MediaUploadCheck>
						<MediaPlaceholder
							labels={ {
								title: __(
									'Introduction image or video',
									'unityblocks'
								),
								instructions: __(
									'Drag file, upload a new one or select file from your library.',
									'unityblocks'
								),
							} }
							icon={ icon }
							accept="images/*"
							onSelect={ onSelectMedia }
						/>
					</MediaUploadCheck>
				</CardBody>

				{ introContent__imageId !== undefined && (
					<CardBody>
						<CardMedia>
							<img
								alt={ introContent__imageAltText }
								src={ introContent__imageUrl }
							/>
						</CardMedia>
					</CardBody>
				) }
				{ introContent__imageId === undefined && (
					<CardBody>
						<CardMedia>
							<img
								alt=""
								src={
									appPathFolder +
									'/assets/img/detail-page/intro.jpg'
								}
							/>
						</CardMedia>
					</CardBody>
				) }
			</Card>
		</>
	);
};

export { IntroductionSettings };
