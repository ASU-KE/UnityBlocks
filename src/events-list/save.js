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
      ctaText,
      ctaUrl,
      ctaColor,
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

  const keFilter = {
    categorySlugs: keFilterUnits,
  };

  if (!keShowPastEvents) {
    keFilter.endAt_gt = "TODAY";
  }

  if (!keShowFutureEvents) {
    keFilter.endAt_lt = "TODAY";
  }

  const keSort = {
    table: "event",
    field: "startAt",
    order: keSortEvents,
  };

  let dataSource;
  if (dataSourceType === "asuDrupal") {
    dataSource = JSON.stringify({
      type: "asuDrupal",
      url: dataSourceAsuUrl + dataSourceFeed,
      filters: asuFilterUnits,
    });
  } else {
    dataSource = JSON.stringify({
      type: "keGraphql",
      url: dataSourceKeUrl,
      filter: keFilter,
      sort: keSort,
      eventBasePath: keEventBasePath,
    });
  }

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
