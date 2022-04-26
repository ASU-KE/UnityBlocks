// @ts-check
import {
	FeedContext,
	Card,
	// feedCardButtonShape,
} from '../../../../components-core/src';
import React, { useContext } from 'react';

import { BaseFeed } from '../../core/components/BaseFeed';
import { defaultProps } from '../../core/constants/default-props';
import { parseInterests } from '../../core/utils';
import { NewsWrapper } from './index.styles';

/**
 *
 * @param {Object} story
 * @param {Boolean} enableStoryDate
 * @param {import("../../core/types/news-types").CardButton} cardButton
 */
const storyBody = ( story, enableStoryDate ) => {
	return enableStoryDate
		? `<p><b>${ story.date }</b></p><p class="card-text text-dark">${ story.content }</p>`
		: `<p class="card-text text-dark">${ story.content }</p>`;
};

/**
 *
 * @param {Object} story
 * @param {Boolean} enableCardTags
 * @param {Boolean} enableStoryDate
 * @param {import("../../core/types/news-types").CardButton} cardButton
 */
const gridRow = ( story, cardButton, enableCardTags, enableStoryDate ) => (
	<div
		className="col col-12 col-md-6 col-lg-4 cards-items-container"
		key={ story.id }
	>
		<Card
			type="story"
			clickable={ false }
			title={ story.title }
			body={ storyBody( story, enableStoryDate ) }
			image={ story.imageUrl }
			imageAltText={ story.title }
			linkLabel={ 'Read story' }
			linkUrl={ story.buttonLink }
			// buttons={ [
			// 	{
			// 		ariaLabel: cardButton.text,
			// 		color: cardButton.color,
			// 		label: cardButton.text,
			// 		size: cardButton.size,
			// 		href: story.buttonLink,
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
const GridTemplate = ( { cardButton, enableCardTags, enableStoryDate } ) => {
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
						cardButton,
						enableCardTags,
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
	cardButton,
	enableCardTags,
	enableStoryDate,
	...props
} ) => (
	// Calling the high order component that fetch the data
	<BaseFeed { ...props }>
		<GridTemplate
			cardButton={ { ...defaultProps.cardButton, ...cardButton } }
			enableCardTags={ enableCardTags }
			enableStoryDate={ enableStoryDate }
		/>
	</BaseFeed>
);

// CardGridNews.propTypes = {
// 	...BaseFeed.propTypes,
// 	cardButton: feedCardButtonShape,
// };

export { CardGridNews };
