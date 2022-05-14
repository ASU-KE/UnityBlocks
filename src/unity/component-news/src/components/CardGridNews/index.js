// @ts-check
import {
	FeedContext,
	Card,
	// feedCardButtonShape,
} from '../../../../components-core/src';
import React, { useContext } from 'react';

import { BaseFeed } from '../../core/components/BaseFeed';
// import { defaultProps } from '../../core/constants/default-props';
import { parseInterests } from '../../core/utils';
import { NewsWrapper } from './index.styles';

/**
 *
 * @param {Object} story
 * @param {Boolean} enableStoryAuthor
 * @param {Boolean} enableStoryDate
 */
const storyBody = ( story, enableStoryAuthor, enableStoryDate ) => {
	if ( enableStoryDate ) {
		return enableStoryAuthor && story.author
			? `<p><b>${ story.date } - ${ story.author.name }</b></p><p class="card-text text-dark">${ story.excerpt }</p>`
			: `<p><b>${ story.date }</b></p><p class="card-text text-dark">${ story.excerpt }</p>`;
	}

	return `<p class="card-text text-dark">${ story.excerpt }</p>`;
};

/**
 *
 * @param {Object} story
 * @param {Boolean} enableCardTags
 * @param {Boolean} enableStoryAuthor
 * @param {Boolean} enableStoryDate
 */
const gridRow = (
	story,
	enableCardTags,
	enableStoryAuthor,
	enableStoryDate
) => (
	<div
		className="col col-12 col-md-6 col-lg-4 cards-items-container"
		key={ story.id }
	>
		<Card
			type="story"
			clickable={ false }
			title={ story.title }
			body={ storyBody( story, enableStoryAuthor, enableStoryDate ) }
			image={ story.headerImageUrl }
			imageAltText={ story.title }
			linkLabel={ 'Read' }
			linkUrl={ story.storyLink }
			// buttons={ [
			// 	{
			// 		ariaLabel: cardButton.text,
			// 		color: cardButton.color,
			// 		label: cardButton.text,
			// 		size: cardButton.size,
			// 		href: story.storyLink,
			// 	},
			// ] }
			tags={ enableCardTags ? parseInterests( story?.interests ) : null }
		/>
	</div>
);

/**
 * @param {import("../../core/types/news-types").TemplateProps} props
 */
// eslint-disable-next-line react/prop-types
const GridTemplate = ( {
	enableCardTags,
	enableStoryAuthor,
	enableStoryDate,
} ) => {
	const { stories } = useContext( FeedContext ); // Reading the "stories" object from the context

	return (
		<NewsWrapper
			className="row row-spaced"
			data-testid="grid-view-container"
		>
			{ stories?.map( ( story, index ) => (
				// eslint-disable-next-line react/no-array-index-key
				<React.Fragment key={ index }>
					{ gridRow(
						story,
						enableCardTags,
						enableStoryAuthor,
						enableStoryDate
					) }
				</React.Fragment>
			) ) }
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
const CardGridNews = ( {
	enableCardTags,
	enableStoryAuthor,
	enableStoryDate,
	...props
} ) => (
	// Calling the high order component that fetch the data
	<BaseFeed { ...props }>
		<GridTemplate
			enableCardTags={ enableCardTags }
			enableStoryAuthor={ enableStoryAuthor }
			enableStoryDate={ enableStoryDate }
		/>
	</BaseFeed>
);

// CardGridNews.propTypes = {
// 	...BaseFeed.propTypes,
// };

export { CardGridNews };
