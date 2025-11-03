// @ts-check
import {
  FeedContext,
  Card,
  // feedCardButtonShape,
} from "../../../../components-core/src";
import React, { useContext } from "react";
import classNames from "classnames";

import { BaseFeed } from "../../core/components/BaseFeed";
// import { defaultProps } from '../../core/constants/default-props';
import { parseInterests } from "../../core/utils";
import { NewsWrapper } from "./index.styles";

/**
 *
 * @param {Object} story
 * @param {Boolean} enableStoryAuthor
 * @param {Boolean} enableStoryDate
 */
const storyBody = (story, enableStoryAuthor, enableStoryDate) => {
  if (enableStoryDate) {
    return enableStoryAuthor && story.author?.name
      ? `<p><b>${story.date} - ${story.author.name}</b></p><p class="card-text text-dark">${story.excerpt}</p>`
      : `<p><b>${story.date}</b></p><p class="card-text text-dark">${story.excerpt}</p>`;
  }

  return `<p class="card-text text-dark">${story.excerpt}</p>`;
};

/**
 *
 * @param {Object} story
 * @param {Boolean} enableCardTags
 * @param {Boolean} enableStoryAuthor
 * @param {Boolean} enableStoryDate
 * @param {String} numberColumns
 */
const gridRow = (
  story,
  enableCardTags,
  enableStoryAuthor,
  enableStoryDate,
  numberColumns
) => {
  const cardClasses = classNames(
    "col",
    "col-12",
    "col-md-6",
    "cards-items-container",
    {
      "col-lg-6": numberColumns === "2",
      "col-lg-4": numberColumns === "3",
    }
  );
  return (
    <div className={cardClasses} key={story.id}>
      <Card
        type="story"
        clickable={false}
        title={story.title}
        body={storyBody(story, enableStoryAuthor, enableStoryDate)}
        image={
          story.featuredImageUrl ? story.featuredImageUrl : story.headerImageUrl
        }
        imageAltText={story.title}
        linkLabel={"Read"}
        linkUrl={story.storyLink}
        // buttons={ [
        // 	{
        // 		ariaLabel: cardButton.text,
        // 		color: cardButton.color,
        // 		label: cardButton.text,
        // 		size: cardButton.size,
        // 		href: story.storyLink,
        // 	},
        // ] }
        tags={enableCardTags ? parseInterests(story?.interests) : null}
      />
    </div>
  );
};

/**
 * @param {import("../../core/types/news-types").TemplateProps} props
 */

const GridTemplate = ({
  enableCardTags,
  enableStoryAuthor,
  enableStoryDate,
  numberColumns,
}) => {
  const { stories } = useContext(FeedContext); // Reading the "stories" object from the context

  return (
    <NewsWrapper className="row row-spaced" data-testid="grid-view-container">
      {stories?.map((story, index) => (
        <React.Fragment key={index}>
          {gridRow(
            story,
            enableCardTags,
            enableStoryAuthor,
            enableStoryDate,
            numberColumns
          )}
        </React.Fragment>
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
const CardGridNews = ({
  enableCardTags,
  enableStoryAuthor,
  enableStoryDate,
  numberColumns,
  ...props
}) => (
  // Calling the high order component that fetch the data
  <BaseFeed {...props}>
    <GridTemplate
      enableCardTags={enableCardTags}
      enableStoryAuthor={enableStoryAuthor}
      enableStoryDate={enableStoryDate}
      numberColumns={numberColumns}
    />
  </BaseFeed>
);

// CardGridNews.propTypes = {
// 	...BaseFeed.propTypes,
// };

export { CardGridNews };
