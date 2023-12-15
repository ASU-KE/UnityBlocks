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

/**
 * External dependencies
 */
import { WCHM } from "./components/WCHM";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

const Edit = () => {
  return (
    <>
      <Inspector />
      <div>
        <WCHM />
      </div>
    </>
  );
};

export default Edit;
