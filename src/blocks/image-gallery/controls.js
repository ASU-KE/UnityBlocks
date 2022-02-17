// @ts-check

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { IconButton, Toolbar } from '@wordpress/components';

/**
 * Internal dependencies
 */

import icon from './iconEdit';

/**
 * Block controls
 *
 * @param {Object} props
 */
const Controls = ( props ) => {
	const {
		attributes: { imageIds },
		setAttributes,
	} = props;

	const onSelectMedia = ( gallery ) => {
		const images = gallery.map( ( media ) => {
			return {
				id: media.id,
				imageSource: media.sizes.full.url,
				imageAltText: media.alt,
				thumbnailSource: media.sizes.medium.url,
				title: media.title,
				content: media.caption,
			};
		} );

		const imageIds = images.map( ( img ) => img.id );
		const imageSources = images.map( ( img ) => img.imageSource );
		const imageAltTexts = images.map( ( img ) => img.imageAltText );
		const imageThumbnailSources = images.map(
			( img ) => img.thumbnailSource
		);
		const imageTitles = images.map( ( img ) => img.title );
		const imageContents = images.map( ( img ) => img.content );

		setAttributes( {
			imageIds,
			imageSources,
			imageAltTexts,
			imageThumbnailSources,
			imageTitles,
			imageContents,
		} );
	};

	return (
		<>
			{ imageIds.length > 0 && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							value={ imageIds }
							onSelect={ onSelectMedia }
							allowedTypes={ [ 'image' ] }
							multiple
							gallery
							render={ ( { open } ) => (
								<IconButton
									label={ __(
										'Edit gallery',
										'unityblocks'
									) }
									icon="edit"
									onClick={ open }
								/>
							) }
						/>
					</Toolbar>
				</BlockControls>
			) }
			{ imageIds.length === 0 && (
				<MediaUploadCheck>
					<MediaPlaceholder
						labels={ {
							title: __( 'Gallery', 'unityblocks' ),
							instructions: __(
								'Drag images, upload new ones, or select files from your library.',
								'unityblocks'
							),
						} }
						icon={ icon }
						accept="images/*"
						multiple
						onSelect={ onSelectMedia }
					/>
				</MediaUploadCheck>
			) }
		</>
	);
};

export { Controls };
