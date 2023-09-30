const { render } = wp.element;

import { CardsGridEvents } from "@asu/component-events/dist/asuEvents.es";

// It is possible to load multiple events grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Events Grid block
const grids = document.querySelectorAll(".wp-block-unityblocks-asu-events");

grids.forEach((eventsGrid) => {
  const enableHeader = eventsGrid.dataset.enableheader === "true";
  const dataSource = JSON.parse(eventsGrid.dataset.datasource);
  const noResultsText = eventsGrid.dataset.noresultstext;
  const maxItems = eventsGrid.dataset.maxitems;

  const props = enableHeader
    ? {
        header: JSON.parse(eventsGrid.dataset.header),
        ctaButton: JSON.parse(eventsGrid.dataset.ctabutton),
        dataSource,
        noResultsText,
        maxItems,
      }
    : {
        dataSource,
        noResultsText,
        maxItems,
      };

  render(<CardsGridEvents {...props} />, eventsGrid);
});
