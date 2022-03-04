/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { edit } from '@wordpress/icons';
import { BlockControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, Toolbar } from '@wordpress/components';

const Controls = ( props ) => {
  const {
		attributes: {
			type,
			width,
			horizontal,
			clickable,
			clickHref,
      imageId,
			image,
			imageAltText,
			title,
			icon,
			body,
			eventFormat,
			eventLocation,
			eventTime,
			buttonsColor,
			buttonsIcon,
			buttonsHref,
			buttonsLabel,
			buttonsOnclick,
			buttonsSize,
			buttonsTarget,
			linkLabel,
			linkUrl,
			tagsColor,
			tagsHref,
			tagsLabel,
			tagsOnclick,
		},
		className,
	} = props;


	const onSelectImage = ( media ) => setAttributes( { imageId: media.id, image: media.url, imageAltText: media.alt } );

	return (
		<BlockControls>
			{ image &&
				<MediaUploadCheck>
					<Toolbar label={ __( 'Author controls', 'unityblocks' ) }>
						<MediaUpload
							allowedTypes={ [ 'image' ] }
							onSelect={ onSelectImage }
							render={ ( { open } ) => (
								<Button
									className="components-toolbar__control"
									icon="edit"
									label={ __( 'Edit avatar', 'unityblocks' ) }
									onClick={ open }
								/>
							) }
							value={ imageId }
						/>
					</Toolbar>
				</MediaUploadCheck>
			}
		</BlockControls>
	);
};

export default Controls;
