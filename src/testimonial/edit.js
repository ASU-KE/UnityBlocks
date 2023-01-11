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
import { Testimonial } from "@asu-design-system/components-core/dist/libCore.es";

/**
 * Internal dependencies
 */
// import Controls from './controls';
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

  const args = {
    quote: {
      title: quoteTitle,
      content: quoteContent,
      cite: {
        name: quoteCiteName,
        description: quoteCiteDescription,
      },
    },
    imageSource: mediaUrl,
    imageAltText: mediaAltText,
    itemStyle: {
      containerCssClass,
      titleCssClass,
      contentCssClass,
    },
  };

  return (
    <>
      <Inspector {...props} />
      <div {...useBlockProps()}>
        <Testimonial {...args} />
      </div>
    </>
  );
};

export default Edit;
