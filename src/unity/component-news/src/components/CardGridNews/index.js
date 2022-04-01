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
 * @param {import("../../core/types/news-types").CardButton} cardButton
 */
const gridRow = ( story, cardButton ) => (
	<div
		className="col col-12 col-md-6 col-lg-4 cards-items-container"
		key={ story.id }
	>
		<Card
			type="default"
			clickable={ !! story.buttonLink }
			clickHref={ story.buttonLink }
			title={ story.title }
			body={ `<p class="card-text text-dark">${ story.content }</p>` }
			image={ story.imageUrl }
			imageAltText={ story.title }
			linkLabel={ story.eventButtonText }
			linkUrl={ story.eventButtonUrl }
			buttons={ [
				{
					ariaLabel: cardButton.text,
					color: cardButton.color,
					label: cardButton.text,
					size: cardButton.size,
					href: story.buttonLink,
				},
			] }
			tags={ parseInterests( story?.interests ) }
		/>
	</div>
);

/**
 * @param {import("../../core/types/news-types").TemplateProps} props
 */
// eslint-disable-next-line react/prop-types
const GridTemplate = ( { cardButton } ) => {
	const { stories } = useContext( FeedContext ); // Reading the "stories" object from the context

	return (
		<NewsWrapper
			className="row row-spaced"
			data-testid="grid-view-container"
		>
			{ stories?.map( ( story, index ) => (
				// eslint-disable-next-line react/no-array-index-key
				<React.Fragment key={ index }>
					{ gridRow( story, cardButton ) }
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
const CardGridNews = ( { cardButton, ...props } ) => (
	// Calling the high order component that fetch the data
	<BaseFeed { ...props }>
		<GridTemplate
			cardButton={ { ...defaultProps.cardButton, ...cardButton } }
		/>
	</BaseFeed>
);

// CardGridNews.propTypes = {
// 	...BaseFeed.propTypes,
// 	cardButton: feedCardButtonShape,
// };

export { CardGridNews };
