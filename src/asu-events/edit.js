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
import { CardsGridEvents } from "@asu/component-events/dist/asuEvents.es";

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
    ? {
        color: headerColor,
        text: headerText,
      }
    : null;

  const ctaButton = enableHeader
    ? {
        color: ctaColor,
        text: ctaText,
        url: ctaUrl,
      }
    : null;

  const dataSource = {
    type: "asuDrupal",
    url: dataSourceUrl,
    filters: dataSourceFilters,
  };

  const args = {
    header,
    ctaButton,
    dataSource,
    noResultsText,
    maxItems,
  };

  return (
    <>
      <Inspector {...props} />
      <div {...useBlockProps()}>
        <CardsGridEvents {...args} />
      </div>
    </>
  );
};

export default Edit;
