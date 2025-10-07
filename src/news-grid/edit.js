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
import { CardGridNews } from "../../resources/unity/component-news/src/components";

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
      enableHeader,
      headerText,
      headerColor,
      ctaText,
      ctaColor,
      ctaUrl,
      cardButtonText,
      cardButtonColor,
      cardButtonSize,
      enableStoryDate,
      enableStoryAuthor,
      enableCardTags,
      enableAsuDataSource,
      asuDataSourceUrl,
      asuDataSourceFeed,
      asuDataSourceFilters,
      enableKeDataSource,
      keDataSourceUrl,
      keStoryBasePath,
      keDataSourceUnits,
      keDataSourceInterests,
      keDataSourceLocations,
      keDataSourcePage,
      keDataSourcePerPage,
      maxItems,
      numberColumns,
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

  const cardButton = {
    color: cardButtonColor,
    text: cardButtonText,
    size: cardButtonSize,
  };

  const asuDataSource = enableAsuDataSource
    ? {
        url: asuDataSourceUrl + asuDataSourceFeed,
        filters: asuDataSourceFilters,
      }
    : null;

  const keSourceFilters = {
    units: keDataSourceUnits,
    interests: keDataSourceInterests,
    locations: keDataSourceLocations,
  };

  const keSourcePagination = {
  	page: keDataSourcePage,
  	perPage: keDataSourcePerPage,
  };

  const keDataSource = enableKeDataSource
    ? {
        url: keDataSourceUrl,
        storyBasePath: keStoryBasePath,
        filters: keSourceFilters,
        pagination: keSourcePagination
      }
    : null;

  const args = {
    header,
    ctaButton,
    cardButton,
    enableStoryDate,
    enableStoryAuthor,
    enableCardTags,
    drupalDataSource: asuDataSource,
    wpDataSource: keDataSource,
    maxItems,
    numberColumns,
    keDataSourcePage,
    keDataSourcePerPage,
  };

  return (
    <>
      <Inspector {...props} />
      <div {...useBlockProps()}>
        <CardGridNews {...args} />
      </div>
    </>
  );
};

export default Edit;
