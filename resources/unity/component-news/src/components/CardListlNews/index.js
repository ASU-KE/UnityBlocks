// @ts-check
import React, { useContext } from "react";

import {
  Card,
  feedCardButtonShape,
  FeedContext,
} from "../../../../components-core/src";
import { BaseFeed } from "../../core/components/BaseFeed";
import { defaultProps } from "../../core/constants/default-props";
import { parseInterests } from "../../core/utils";
import { NewsWrapper } from "./index.styles";

/**
 * @param {object} story
 * @param {import("../../core/types/news-types").CardButton} cardButton
 * @param {Boolean} useCardButton
 * @param {String} cardLinkText
 */
const listRow = (story, cardButton, useCardButton, cardLinkText) => (
  <div className="card card-hover cards-items-container" key={story.id}>
    <Card
      type="story"
      horizontal
      clickable={false}
      title={story.title}
      body={`<p class="card-text text-dark">${story.excerpt}</p>`}
      image={story.featuredImageUrl ? story.featuredImageUrl : story.headerImageUrl}
      imageAltText={story.title}
      linkLabel={useCardButton ? undefined : cardLinkText}
      linkUrl={useCardButton ? undefined : story.storyLink}
      buttons={useCardButton ? [
        {
          ariaLabel: cardButton.text,
          color: cardButton.color,
          label: cardButton.text,
          size: cardButton.size,
          href: story.storyLink,
        },
      ] : undefined}
      tags={parseInterests(story?.interests)}
    />
  </div>
);

/**
 * @param {import("../../core/types/news-types").TemplateProps} props
 */

const ListTemplate = ({ cardButton, useCardButton, cardLinkText }) => {
  const { stories } = useContext(FeedContext); // Reading the "stories" object from the context

  return (
    <NewsWrapper className="row-spaced" data-testid="list-view-container">
      {stories?.map((story, index) => (
        <React.Fragment key={index}>{listRow(story, cardButton, useCardButton, cardLinkText)}</React.Fragment>
      ))}
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
const CardListlNews = ({ cardButton, useCardButton, cardLinkText, ...props }) => (
  // Calling the high order component that fetch the data
  <BaseFeed {...props}>
    <ListTemplate 
      cardButton={{ ...defaultProps.cardButton, ...cardButton }} 
      useCardButton={useCardButton}
      cardLinkText={cardLinkText}
    />
  </BaseFeed>
);

CardListlNews.propTypes = { ...BaseFeed.propTypes, feedCardButtonShape };

export { CardListlNews };
