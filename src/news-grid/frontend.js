const { render } = wp.element;

import { CardGridNews } from "@unity-components/CardGridNews";

// It is possible to load multiple news grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Grid block
const grids = document.querySelectorAll(".wp-block-unityblocks-news-grid");

grids.forEach((newsGrid) => {
  const enableHeader = newsGrid.dataset.enableheader === "true";
  const cardButton = JSON.parse(newsGrid.dataset.cardbutton);
  const useCardButton = newsGrid.dataset.usecardbutton === "true";
  const cardLinkText = newsGrid.dataset.cardlinktext;
  const enableStoryDate = newsGrid.dataset.enablestorydate === "true";
  const enableStoryAuthor = newsGrid.dataset.enablestoryauthor === "true";
  const enableCardTags = newsGrid.dataset.enablecardtags === "true";
  const enableAsuSource = newsGrid.dataset.enableasusource === "true";
  const enableKeSource = newsGrid.dataset.enablekesource === "true";
  const keDataSourcePage = newsGrid.dataset.kedatasourcepage;
  const keDataSourcePerPage = newsGrid.dataset.kedatasourceperpage;

  const asuDataSource = enableAsuSource
    ? JSON.parse(newsGrid.dataset.asudatasource)
    : null;
  const keDataSource = enableKeSource
    ? JSON.parse(newsGrid.dataset.kedatasource)
    : null;
  const maxItems = Number(newsGrid.dataset.maxitems);
  const numberColumns = newsGrid.dataset.numbercolumns;

  const props = enableHeader
    ? {
        header: JSON.parse(newsGrid.dataset.header),
        ctaButton: JSON.parse(newsGrid.dataset.ctabutton),
        cardButton,
        useCardButton,
        cardLinkText,
        enableStoryDate,
        enableStoryAuthor,
        enableCardTags,
        drupalDataSource: asuDataSource,
        wpDataSource: keDataSource,
        maxItems,
        numberColumns,
        keDataSourcePage,
        keDataSourcePerPage,
      }
    : {
        cardButton,
        useCardButton,
        cardLinkText,
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

  render(<CardGridNews {...props} />, newsGrid);
});
