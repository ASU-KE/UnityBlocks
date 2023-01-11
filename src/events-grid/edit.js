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
import { formatISO, startOfToday } from "date-fns";
import { CardsGridEvents } from "../../resources/unity/component-events/src/components/CardsGridEvents";

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
      ctaText,
      ctaColor,
      ctaUrl,
      dataSourceType,
      dataSourceAsuUrl,
      dataSourceKeUrl,
      dataSourceFeed,
      asuFilterUnits,
      keFilterUnits,
      keSortEvents,
      keShowPastEvents,
      keShowFutureEvents,
      keEventBasePath,
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

  const keFilter = {
    categorySlugs: keFilterUnits,
  };

  if (!keShowPastEvents) {
    keFilter.endAt_gt = formatISO(startOfToday());
  }

  if (!keShowFutureEvents) {
    keFilter.endAt_lt = formatISO(startOfToday());
  }

  const keSort = {
    table: "event",
    field: "startAt",
    order: keSortEvents,
  };

  let dataSource;
  if (dataSourceType === "asuDrupal") {
    dataSource = {
      type: "asuDrupal",
      url: dataSourceAsuUrl + dataSourceFeed,
      filters: asuFilterUnits,
    };
  } else {
    dataSource = {
      type: "keGraphql",
      url: dataSourceKeUrl,
      filter: keFilter,
      sort: keSort,
      eventBasePath: keEventBasePath,
    };
  }

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
