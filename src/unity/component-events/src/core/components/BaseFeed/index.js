// @ts-check
import {
	DrupalFeedContainerProvider,
	KeEventsContainerProvider,
	FeedHeader,
	FeedBody,
	feedHeaderShape,
	feedCtaButtonShape,
	feedDrupalDataSourceShape,
	feedKeGraphqlDataSourceShape,
} from '../../../../../components-core/src';
import PropTypes from 'prop-types';
import React from 'react';

import { defaultProps } from '../../constants/default-props';
import { filterData as filterDrupalData } from '../../services/dataManager';
import { transformData as transformDrupalData } from '../../transformers/drupal.transformer';
import { transformData as transformKeEventsData } from '../../transformers/ke-graphql.transformer';

const BaseFeed = ( {
	children,
	header,
	ctaButton,
	dataSource,
	noResultsText,
	maxItems,
} ) => {
	if ( 'asuDrupal' === dataSource.type ) {
		// return null;
		return (
			<DrupalFeedContainerProvider
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
				dataSource={ dataSource }
				dataTransformer={ transformDrupalData }
				dataFilter={ filterDrupalData }
				defaultProps={ defaultProps }
				noResultsText={ noResultsText }
				maxItems={ maxItems }
			/>
		);
	}

	if ( 'keGraphql' === dataSource.type ) {
		return (
			<KeEventsContainerProvider
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
				dataSource={ dataSource }
				dataTransformer={ transformKeEventsData }
				noResultsText={ noResultsText }
				maxItems={ maxItems }
			/>
		);
	}
};

BaseFeed.propTypes = {
	header: feedHeaderShape,
	ctaButton: feedCtaButtonShape,
	drupalDataSource: feedDrupalDataSourceShape,
	keGraphqlDataSource: feedKeGraphqlDataSourceShape,
	maxItems: PropTypes.number,
	children: PropTypes.element,
};

export { BaseFeed };
