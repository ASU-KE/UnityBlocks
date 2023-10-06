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
      enableHeader,
      headerText,
      headerColor,
      ctaColor,
      ctaText,
      ctaUrl,
      dataSourceUrl,
      dataSourceFilters,
      noResultsText,
      maxItems,
    },
  } = props;

  const header = enableHeader
    ? JSON.stringify({
        color: headerColor,
        text: headerText,
      })
    : null;

  const ctaButton = enableHeader
    ? JSON.stringify({
        color: ctaColor,
        text: ctaText,
        url: ctaUrl,
      })
    : null;

  let dataSource = JSON.stringify({
    url: dataSourceUrl,
    filters: dataSourceFilters,
  });

  const dataAttributes = {
    "data-enableheader": enableHeader,
    "data-header": header,
    "data-ctabutton": ctaButton,
    "data-datasource": dataSource,
    "data-noresultstext": noResultsText,
    "data-maxitems": maxItems,
  };

  return <div {...useBlockProps.save()} {...dataAttributes}></div>;
};

export default save;
