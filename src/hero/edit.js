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
 * External dependencies
 */
import { Hero } from "@asu-unity-stack/packages/unity-react-core/src/components/Hero/Hero";

/**
 * Internal dependencies
 */
import Controls from "./controls";
import Inspector from "./inspector";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const Edit = (props) => {
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
  } = props;

  const args = {
    heroType,
    image: {
      url: mediaUrl,
      altText: mediaAltText,
      cssClass: mediaCssClass,
      size: mediaSize,
    },
    subTitle: {
      text: subTitleText,
      highlightColor: subTitleHighlightColor,
      maxWidth: subTitleMaxWidth,
      cssClass: subTitleCssClass,
    },
    title: {
      text: titleText,
      highlightColor: titleHighlightColor,
      maxWidth: titleMaxWidth,
      cssClass: titleCssClass,
    },
    contents: [
      {
        text: contentsText,
        maxWidth: contentsMaxWidth,
        cssClass: contentsCssClass,
        highlightColor: contentsHighlightColor,
      },
    ],
    contentsColor,
  };

  return (
    <>
      <Inspector {...props} />
      <Controls {...props} />

      {mediaId !== 0 && (
        <div {...useBlockProps()}>
          <Hero {...args} />
        </div>
      )}
    </>
  );
};

export default Edit;
