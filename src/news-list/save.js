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
      cardButtonText,
      cardButtonColor,
      cardButtonSize,
      enableAsuDataSource,
      asuDataSourceUrl,
      asuDataSourceFeed,
      asuDataSourceFilters,
      enableKeDataSource,
      keDataSourceUrl,
      keDataSourceUnits,
      keDataSourceInterests,
      keDataSourceLocations,
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

  const cardButton = {
    color: cardButtonColor,
    text: cardButtonText,
    url: cardButtonSize,
  };

  const asuDataSource = {
    url: asuDataSourceUrl + asuDataSourceFeed,
    filters: asuDataSourceFilters,
  };

  const keSourceFilters = {
    units: keDataSourceUnits,
    interests: keDataSourceInterests,
    locations: keDataSourceLocations,
  };

  // const keSourcePagination = {
  // 	page,
  // 	perPage,
  //   order,
  //   orderBy
  // };

  const keDataSource = {
    url: keDataSourceUrl,
    filters: keSourceFilters,
    // pagination: keSourcePagination
  };

  const dataAttributes = {
    "data-enableheader": enableHeader,
    "data-header": JSON.stringify(header),
    "data-ctabutton": JSON.stringify(ctaButton),
    "data-cardbutton": JSON.stringify(cardButton),
    "data-enableasusource": enableAsuDataSource,
    "data-enablekesource": enableKeDataSource,
    "data-asudatasource": enableAsuDataSource
      ? JSON.stringify(asuDataSource)
      : null,
    "data-kedatasource": enableKeDataSource
      ? JSON.stringify(keDataSource)
      : null,
    "data-maxitems": maxItems,
  };

  return <div {...useBlockProps.save()} {...dataAttributes}></div>;
};

export default save;
