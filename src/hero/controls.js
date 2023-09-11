/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * WP Editor dependencies
 */
import {
  BlockControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { IconButton, Toolbar } from "@wordpress/components";

/**
 * Block dependencies
 */

import icon from "./icon";

/**
 * Block controls
 *
 * @param {Object} props
 */
const Controls = (props) => {
  const {
    attributes: { mediaId },
  } = props;

  const onSelectMedia = (media) => {
    props.setAttributes({
      mediaId: media.id,
      mediaUrl: media.url,
      mediaAltText: media.alt,
    });
  };

  return (
    <>
      {mediaId !== 0 && (
        <BlockControls>
          <Toolbar>
            <MediaUploadCheck>
              <MediaUpload
                value={mediaId}
                onSelect={onSelectMedia}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <IconButton
                    className="components-toolbar__control"
                    label={__("Edit image", "unityblocks")}
                    icon="edit"
                    onClick={open}
                  />
                )}
              />
            </MediaUploadCheck>
          </Toolbar>
        </BlockControls>
      )}
      {mediaId === 0 && (
        <div {...useBlockProps()}>
          <MediaPlaceholder
            labels={{
              title: __("Hero image", "unityblocks"),
              instructions: __(
                "Drag image, upload a new one or select file from your library.",
                "unityblocks"
              ),
            }}
            icon={icon}
            accept="images/*"
            onSelect={onSelectMedia}
          />
        </div>
      )}
    </>
  );
};

export default Controls;
