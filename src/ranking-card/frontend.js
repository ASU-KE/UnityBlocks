const { render } = wp.element;

import { RankingCard } from "@asu/unity-react-core/dist/unityReactCore.es";

// It is possible to load multiple ranking cards onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Ranking Card block
const cards = document.querySelectorAll(".wp-block-unityblocks-ranking-card");

cards.forEach((rankingCard) => {
  const imageSize = rankingCard.dataset.imagesize;
  const image = rankingCard.dataset.image;
  const imageAlt = rankingCard.dataset.imagealt;
  const heading = rankingCard.dataset.heading;
  const body = rankingCard.dataset.body;
  const readMoreLink = rankingCard.dataset.readmorelink;
  const citation = rankingCard.dataset.citation;

  const props = {
    imageSize,
    image,
    imageAlt,
    heading,
    body,
    readMoreLink,
    citation,
  };

  render(<RankingCard {...props} />, rankingCard);
});
