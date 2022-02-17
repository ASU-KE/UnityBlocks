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
		attributes: { images },
		setAttributes,
	} = props;

	const onSelectMedia = ( newImages ) => {
		const images = newImages.map( ( img ) => {
			return {
				id: img.id,
				imageSource: img.sizes.full.url,
				imageAltText: img.alt,
				thumbnailSource: img.sizes.medium.url,
				title: img.title,
				content: img.caption,
			};
		} );

		setAttributes( { images } );
	};

	return (
		<>
			{ images.length > 0 && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							value={ images.map( ( img ) => img.id ) }
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
			{ images.length === 0 && (
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
