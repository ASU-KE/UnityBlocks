const { render } = wp.element;

import { CardsListEvents } from "../../resources/unity/component-events/src/components/CardsListEvents";

// It is possible to load multiple events lists onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Events List block
const lists = document.querySelectorAll(".wp-block-unityblocks-events-list");

lists.forEach((eventsList) => {
  const enableHeader = eventsList.dataset.enableheader === "true";
  const dataSource = JSON.parse(eventsList.dataset.datasource);
  const noResultsText = eventsList.dataset.noresultstext;
  const maxItems = eventsList.dataset.maxitems;

  const props = enableHeader
    ? {
        header: JSON.parse(eventsList.dataset.header),
        ctaButton: JSON.parse(eventsList.dataset.ctabutton),
        dataSource,
        noResultsText,
        maxItems,
      }
    : {
        dataSource,
        noResultsText,
        maxItems,
      };

  render(<CardsListEvents {...props} />, eventsList);
});
