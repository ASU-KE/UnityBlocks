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
import { WCHM } from "./components/WCHM";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import "./editor.scss";

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
      useProdApi,
    },
  } = props;

  // Prod API endpoint hasn't been created yet, so we will have to use Dev for both options, for now.
  // Using local host for now, but will need to change to the actual API endpoint when it is created.
  const baseApiPath = useProdApi
    ? 'https://api-dev-wus2.azure-api.net/wchm/wchm/'
    : 'https://localhost:7275/WCHM/';

  return (
    <>
      <Inspector {...props} />
      <div {...useBlockProps()}>
        <WCHM baseApiPath={baseApiPath} />
      </div>
    </>
  );
};

export default Edit;
