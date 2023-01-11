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
      quoteTitle,
      quoteContent,
      quoteCiteName,
      quoteCiteDescription,
      mediaUrl,
      mediaAltText,
      containerCssClass,
      titleCssClass,
      contentCssClass,
    },
  } = props;

  const quote = {
    title: quoteTitle,
    content: quoteContent,
    cite: {
      name: quoteCiteName,
      description: quoteCiteDescription,
    },
  };

  const itemStyle = {
    containerCssClass,
    titleCssClass,
    contentCssClass,
  };

  return (
    <div
      {...useBlockProps.save()}
      data-quote={JSON.stringify(quote)}
      data-itemstyle={JSON.stringify(itemStyle)}
      data-imagesource={mediaUrl}
      data-imagealttext={mediaAltText}
    ></div>
  );
};

export default save;
