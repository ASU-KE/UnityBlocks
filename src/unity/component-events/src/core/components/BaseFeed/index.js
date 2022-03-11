// @ts-check
import {
	FeedContainerProvider,
	FeedHeader,
	FeedBody,
	feedHeaderShape,
	feedCtaButtonShape,
	feedDataSourceShape,
} from '../../../../../components-core/src';
import PropTypes from 'prop-types';
import React from 'react';

import { defaultProps } from '../../constants/default-props';
import { filterData as filterDrupalData } from '../../services/dataManager';
import { transformData as transformDrupalData } from '../../transformers/drupal.transformer';
import { transformData as transformKeEventsData } from '../../transformers/ke-graphql.transformer';

const BaseFeed = ( { children, header, ctaButton, dataSource, maxItems } ) => (
	// Calling the components-core component to fetch the data, transform it and filter it
	// We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
	// We provide in the renderHeader the components-core header, if it is desired to be shown
	// We provide the maxItems prop to limit the items rendered
	// We provide the dataSource to read the url to fetch the data
	// We provide the defaultProps to use some needed default values in case they are not provided
	<FeedContainerProvider
		renderHeader={
			header && ctaButton ? (
				<FeedHeader
					header={ header }
					ctaButton={ ctaButton }
					defaultProps={ defaultProps }
				/>
			) : null
		}
		renderBody={ <FeedBody>{ children }</FeedBody> }
		dataTransformer={
			dataSource.type === 'keGraphql'
				? transformKeEventsData
				: transformDrupalData
		}
		dataFilter={
			dataSource.type === 'asuDrupal' ? filterDrupalData : undefined
		}
		dataSource={ dataSource }
		defaultProps={ defaultProps }
		noFeedText="No events to show."
		maxItems={ maxItems }
	/>
);

BaseFeed.propTypes = {
	header: feedHeaderShape,
	ctaButton: feedCtaButtonShape,
	dataSource: feedDataSourceShape,
	maxItems: PropTypes.number,
	children: PropTypes.element,
};

export { BaseFeed };
