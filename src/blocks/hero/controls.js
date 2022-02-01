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
import {
	Button,
	// RadioControl,
	// TextControl,
	Toolbar,
} from '@wordpress/components';

/**
 * Block dependencies
 */

import icon from './icon';

/**
 * Block controls
 *
 * @param {Object} props
 */
const Controls = ( props ) => {
	const {
		attributes: {
			// heroType,
			mediaId,
			// mediaCssClass,
			// mediaSize,
			// subTitleText,
			// subTitleHighlightColor,
			// subTitleMaxWidth,
			// subTitleCssClass,
			// titleText,
			// titleHighlightColor,
			// titleMaxWidth,
			// titleCssClass,
			// contentsText,
			// contentsMaxWidth,
			// contentsCssClass,
			// contentsHighlightColor,
			// contentsColor,
		},
		className,
		// setAttributes,
	} = props;

	// const removeMedia = () => {
	// 	props.setAttributes( {
	// 		mediaId: 0,
	// 		mediaUrl: '',
	// 	} );
	// };

	const onSelectMedia = ( media ) => {
		props.setAttributes( {
			mediaId: media.id,
			mediaUrl: media.url,
			mediaAltText: media.alt,
		} );
	};

	return (
		<>
			{ mediaId !== 0 && (
				<BlockControls>
					<Toolbar>
						<MediaUploadCheck>
							<MediaUpload
								value={ mediaId }
								onSelect={ onSelectMedia }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button onClick={ open } isDefault isLarge>
										{ __( 'Replace image', 'unityblocks' ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</Toolbar>
				</BlockControls>
			) }
			{ mediaId === 0 && (
				<div className={ `${ className }` }>
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
				</div>
			) }
		</>
	);
};

export default Controls;
