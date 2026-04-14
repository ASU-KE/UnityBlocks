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
      useProdApi,
    },
  } = props;

  // Prod API endpoint hasn't been created yet, so we will have to use Dev for both options, for now.
  const baseApiPath = useProdApi
    ? 'https://api-dev-wus2.azure-api.net/wchm/wchm/'
    : 'https://localhost:7275/wchm/';

  const dataAttributes = {
    "data-baseapipath": baseApiPath,
  };

  return <div {...useBlockProps.save()} {...dataAttributes}></div>;
};

export default save;
