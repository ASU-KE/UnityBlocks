/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
const save = (props) => {
  const {
    attributes: {
      heroType,
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

  const image = {
    url: mediaUrl,
    altText: mediaAltText,
    cssClass: mediaCssClass,
    size: mediaSize,
  };

  const subTitle = {
    text: subTitleText,
    highlightColor: subTitleHighlightColor,
    maxWidth: subTitleMaxWidth,
    cssClass: subTitleCssClass,
  };

  const title = {
    text: titleText,
    highlightColor: titleHighlightColor,
    maxWidth: titleMaxWidth,
    cssClass: titleCssClass,
  };

  const contents = [
    {
      text: contentsText,
      maxWidth: contentsMaxWidth,
      cssClass: contentsCssClass,
      highlightColor: contentsHighlightColor,
    },
  ];

  return (
    <div
      id="unityblocks-hero"
      {...useBlockProps.save()}
      data-herotype={heroType}
      data-image={JSON.stringify(image)}
      data-subtitle={JSON.stringify(subTitle)}
      data-title={JSON.stringify(title)}
      data-contents={JSON.stringify(contents)}
      data-contentscolor={contentsColor}
    ></div>
  );
};

export default save;
