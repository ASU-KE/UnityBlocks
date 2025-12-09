// @ts-check
import { CardCarousel } from "@asu/component-carousel";
import React, { useContext } from "react";

import { FeedContext } from "../../../../components-core/src";
import { BaseFeed } from "../../core/components/BaseFeed";
import { defaultProps } from "../../core/constants/default-props";
import { NewsWrapper } from "./index.styles";

/**
 * @param {Object} story
 * @param {number} index
 * @param {import("../../core/types/news-types").CardButton} cardButton
 */
const cardRow = (story, index, cardButton) => ({
  id: index,
  imageSource: story.featuredImageUrl ? story.featuredImageUrl : story.headerImageUrl,
  imageAltText: story.title,
  title: story.title,
  content: story.excerpt,
  buttons: [
    {
      ariaLabel: cardButton.text,
      color: cardButton.color,
      label: cardButton.text,
      size: cardButton.size,
      href: story.storyLink,
    },
  ],
});

/**
 * @param {import("../../core/types/news-types").TemplateProps} props
 */

const CarouselTemplate = ({ cardButton }) => {
  const { stories } = useContext(FeedContext); // Reading the "stories" object from the context
  const cardItems = stories?.map((story, index) =>
    cardRow(story, index, cardButton)
  );

  return (
    <NewsWrapper>
      <CardCarousel
        width="auto"
        cardType="story"
        perView="3"
        cardItems={cardItems || []}
      />
    </NewsWrapper>
  );
};
// eslint-enable-next-line react/prop-types

/**
 * @typedef {import("../../core/types/news-types").FeedType} FeedType
 */

/**
 * @param {FeedType} props
 */
const CardCarouselNews = ({ cardButton, ...props }) => (
  // Calling the high order component that fetches the data
  <BaseFeed {...props}>
    <CarouselTemplate
      cardButton={{ ...defaultProps.cardButton, ...cardButton }}
    />
  </BaseFeed>
);

// CardCarouselNews.propTypes = BaseFeed.propTypes;

export { CardCarouselNews };
