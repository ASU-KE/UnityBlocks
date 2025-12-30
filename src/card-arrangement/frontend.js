const { render } = wp.element;

import { RankingCard } from "@asu/unity-react-core/dist/unityReactCore.es";

// It is possible to load multiple events grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Events Grid block
const cards = document.querySelectorAll(".wp-block-unityblocks-ranking-card");

cards.forEach((rankingCard) => {
  const enableHeader = rankingCard.dataset.enableheader === "true";
  const dataSource = JSON.parse(rankingCard.dataset.datasource);
  const noResultsText = rankingCard.dataset.noresultstext;
  const maxItems = rankingCard.dataset.maxitems;

  const props = enableHeader
    ? {
        header: JSON.parse(rankingCard.dataset.header),
        ctaButton: JSON.parse(rankingCard.dataset.ctabutton),
        dataSource,
        noResultsText,
        maxItems,
      }
    : {
        dataSource,
        noResultsText,
        maxItems,
      };

  render(<RankingCard {...props} />, rankingCard);
});
