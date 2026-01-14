/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Deprecated version 1: Before the addition of useCardButton, cardButtonText,
 * cardButtonColor, cardButtonSize, and cardLinkText attributes.
 * 
 * These attributes were added in November 2025 (commits: acaaee48, 305b9942, 48b798cd).
 * This deprecated version handles blocks saved before the button/link toggle
 * functionality was added. The old version didn't support customizing button
 * text, color, or size, and didn't have a toggle between buttons and links.
 * Instead, it always rendered buttons with hardcoded "Read" text and "gold" color.
 */
const deprecated_v1 = {
  attributes: {
    enableHeader: {
      type: "boolean",
      default: true,
    },
    headerText: {
      type: "string",
      default: "News Grid",
    },
    headerColor: {
      type: "string",
      enum: ["dark", "white"],
      default: "dark",
    },
    ctaText: {
      type: "string",
      default: "Click to see more news",
    },
    ctaUrl: {
      type: "string",
      default: "https://news.asu.edu/",
    },
    ctaColor: {
      type: "string",
      enum: ["gold", "maroon", "gray", "dark"],
      default: "maroon",
    },
    // The following attributes don't exist in this deprecated version and will be
    // added by the migrate() function when the block is loaded in the editor:
    // - cardButtonText, cardButtonColor, cardButtonSize: Allow button customization
    // - useCardButton: Toggles between button and link display
    // - cardLinkText: Text for link when useCardButton is false
    enableStoryDate: {
      type: "boolean",
      default: true,
    },
    enableStoryAuthor: {
      type: "boolean",
      default: false,
    },
    enableCardTags: {
      type: "boolean",
      default: false,
    },
    enableAsuDataSource: {
      type: "boolean",
      default: true,
    },
    asuDataSourceUrl: {
      type: "string",
      default: "https://cors.api.rtd.asu.edu/news.asu.edu:443/feeds-json/",
    },
    asuDataSourceFeed: {
      type: "string",
      default: "biodesign_institute",
    },
    asuDataSourceFilters: {
      type: "string",
      default: "",
    },
    enableKeDataSource: {
      type: "boolean",
      default: false,
    },
    keDataSourceUrl: {
      type: "string",
      default: "https://ke.news.prod.rtd.asu.edu/wp-json/wp/v2/",
    },
    keStoryBasePath: {
      type: "string",
      default: "news/story",
    },
    keDataSourceUnits: {
      type: "array",
      default: [],
    },
    keDataSourceInterests: {
      type: "array",
      default: [],
    },
    keDataSourceLocations: {
      type: "array",
      default: [],
    },
    keDataSourcePage: {
      type: "string",
      default: "1",
    },
    keDataSourcePerPage: {
      type: "string",
      default: "100",
    },
    maxItems: {
      type: "number",
      default: 6,
    },
    numberColumns: {
      type: "string",
      enum: ["2", "3"],
      default: "3",
    },
  },

  save: (props) => {
    const {
      attributes: {
        enableHeader,
        headerText,
        headerColor,
        ctaText,
        ctaUrl,
        ctaColor,
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

    // Old version had a simple cardButton structure with fixed defaults
    // These values must match what was historically saved to ensure proper block validation
    const cardButton = {
      color: "gold",
      text: "Read",
      size: "default",
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

    const keSourcePagination = {
      page: keDataSourcePage,
      perPage: keDataSourcePerPage,
    };

    const keDataSource = {
      url: keDataSourceUrl,
      storyBasePath: keStoryBasePath,
      filters: keSourceFilters,
      pagination: keSourcePagination,
    };

    const dataAttributes = {
      "data-enableheader": enableHeader,
      "data-header": JSON.stringify(header),
      "data-ctabutton": JSON.stringify(ctaButton),
      "data-cardbutton": JSON.stringify(cardButton),
      // The following data attributes don't exist in the old block's saved HTML.
      // When frontend.js loads this block on the live site, it will handle these
      // missing attributes by defaulting to button mode (useCardButton: true) with
      // "Read" text. This ensures buttons display correctly even before users re-save.
      // Missing: data-usecardbutton, data-cardlinktext
      "data-enablestorydate": enableStoryDate,
      "data-enablestoryauthor": enableStoryAuthor,
      "data-enablecardtags": enableCardTags,
      "data-enableasusource": enableAsuDataSource,
      "data-enablekesource": enableKeDataSource,
      "data-asudatasource": enableAsuDataSource
        ? JSON.stringify(asuDataSource)
        : null,
      "data-kedatasource": enableKeDataSource
        ? JSON.stringify(keDataSource)
        : null,
      "data-maxitems": maxItems,
      "data-numbercolumns": numberColumns,
      "data-kedatasourcepage": keDataSourcePage,
      "data-kedatasourceperpage": keDataSourcePerPage,
    };

    return <div {...useBlockProps.save()} {...dataAttributes}></div>;
  },

  migrate: (attributes) => {
    // Migrate old attributes to new structure
    // Add the new attributes with sensible defaults that match the old behavior
    // These values must match the hardcoded cardButton values in the deprecated save function
    return {
      ...attributes,
      // Set useCardButton to true to maintain button behavior (old default)
      useCardButton: true,
      // Use default values for new button attributes (matching old hardcoded values)
      cardButtonText: "Read",
      cardButtonColor: "gold",
      cardButtonSize: "default",
      // Default link text in case user switches to link mode later
      cardLinkText: "Read",
    };
  },
};

/**
 * Deprecated version 2: Before the addition of displayType attribute.
 * 
 * The displayType attribute was added in December 2025 to allow users to choose
 * between grid, list, and carousel display modes. This deprecated version handles
 * blocks saved before this feature was added. The old version only supported grid
 * display mode, so the migrate function will default to "grid" to maintain the
 * original behavior.
 */
const deprecated_v2 = {
  attributes: {
    enableHeader: {
      type: "boolean",
      default: true,
    },
    headerText: {
      type: "string",
      default: "News Grid",
    },
    headerColor: {
      type: "string",
      enum: ["dark", "white"],
      default: "dark",
    },
    ctaText: {
      type: "string",
      default: "Click to see more news",
    },
    ctaUrl: {
      type: "string",
      default: "https://news.asu.edu/",
    },
    ctaColor: {
      type: "string",
      enum: ["gold", "maroon", "gray", "dark"],
      default: "maroon",
    },
    cardButtonText: {
      type: "string",
      default: "Read",
    },
    cardButtonColor: {
      type: "string",
      enum: ["gold", "maroon", "gray", "dark"],
      default: "gold",
    },
    cardButtonSize: {
      type: "string",
      enum: ["default", "small", "medium", "large"],
      default: "default",
    },
    useCardButton: {
      type: "boolean",
      default: true,
    },
    cardLinkText: {
      type: "string",
      default: "Read",
    },
    enableStoryDate: {
      type: "boolean",
      default: true,
    },
    enableStoryAuthor: {
      type: "boolean",
      default: false,
    },
    enableCardTags: {
      type: "boolean",
      default: false,
    },
    enableAsuDataSource: {
      type: "boolean",
      default: true,
    },
    asuDataSourceUrl: {
      type: "string",
      default: "https://cors.api.rtd.asu.edu/news.asu.edu:443/feeds-json/",
    },
    asuDataSourceFeed: {
      type: "string",
      default: "biodesign_institute",
    },
    asuDataSourceFilters: {
      type: "string",
      default: "",
    },
    enableKeDataSource: {
      type: "boolean",
      default: false,
    },
    keDataSourceUrl: {
      type: "string",
      default: "https://ke.news.prod.rtd.asu.edu/wp-json/wp/v2/",
    },
    keStoryBasePath: {
      type: "string",
      default: "news/story",
    },
    keDataSourceUnits: {
      type: "array",
      default: [],
    },
    keDataSourceInterests: {
      type: "array",
      default: [],
    },
    keDataSourceLocations: {
      type: "array",
      default: [],
    },
    keDataSourcePage: {
      type: "string",
      default: "1",
    },
    keDataSourcePerPage: {
      type: "string",
      default: "100",
    },
    maxItems: {
      type: "number",
      default: 6,
    },
    numberColumns: {
      type: "string",
      enum: ["2", "3"],
      default: "3",
    },
    // Note: displayType attribute doesn't exist in this version
  },

  save: (props) => {
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
        useCardButton,
        cardLinkText,
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

    const asuDataSource = {
      url: asuDataSourceUrl + asuDataSourceFeed,
      filters: asuDataSourceFilters,
    };

    const keSourceFilters = {
      units: keDataSourceUnits,
      interests: keDataSourceInterests,
      locations: keDataSourceLocations,
    };

    const keSourcePagination = {
      page: keDataSourcePage,
      perPage: keDataSourcePerPage,
    };

    const keDataSource = {
      url: keDataSourceUrl,
      storyBasePath: keStoryBasePath,
      filters: keSourceFilters,
      pagination: keSourcePagination,
    };

    const dataAttributes = {
      // Note: data-displaytype doesn't exist in this deprecated version
      "data-enableheader": enableHeader,
      "data-header": JSON.stringify(header),
      "data-ctabutton": JSON.stringify(ctaButton),
      "data-cardbutton": JSON.stringify(cardButton),
      "data-usecardbutton": useCardButton,
      "data-cardlinktext": cardLinkText,
      "data-enablestorydate": enableStoryDate,
      "data-enablestoryauthor": enableStoryAuthor,
      "data-enablecardtags": enableCardTags,
      "data-enableasusource": enableAsuDataSource,
      "data-enablekesource": enableKeDataSource,
      "data-asudatasource": enableAsuDataSource
        ? JSON.stringify(asuDataSource)
        : null,
      "data-kedatasource": enableKeDataSource
        ? JSON.stringify(keDataSource)
        : null,
      "data-maxitems": maxItems,
      "data-numbercolumns": numberColumns,
      "data-kedatasourcepage": keDataSourcePage,
      "data-kedatasourceperpage": keDataSourcePerPage,
    };

    return <div {...useBlockProps.save()} {...dataAttributes}></div>;
  },

  migrate: (attributes) => {
    // Migrate old attributes to new structure
    // Add the displayType attribute with "grid" as default to maintain the original behavior
    // since the old version only displayed grid layout
    return {
      ...attributes,
      // Default to "grid" to maintain the original display behavior
      displayType: "grid",
    };
  },
};

export default [deprecated_v2, deprecated_v1];
