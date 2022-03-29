// @ts-check
import {
	DrupalFeedContainerProvider,
	KeNewsContainerProvider,
	MergedNewsContainerProvider,
	FeedHeader,
	FeedBody,
	feedHeaderShape,
	feedCtaButtonShape,
	feedDrupalDataSourceShape,
	feedWpRestDataSourceShape,
} from '../../../../../components-core/src';
import PropTypes from 'prop-types';
import React from 'react';

import { defaultProps } from '../../constants/default-props';
import { filterDrupalData } from '../../services/data-manager';
import { transformData as transformDrupalData } from '../../transformers/drupal.transformer';
import { transformData as transformWpData } from '../../transformers/wordpress.transformer';

/**
 * @typedef {import("../../../../../components-core/src/core/types/feed-types").FeedType} FeedType
 */

/**
 * @param {FeedType & {children: object}} props
 */
const BaseFeed = ( {
	children,
	header,
	ctaButton,
	drupalDataSource,
	wpDataSource,
	maxItems,
} ) => {
	if ( drupalDataSource && ! wpDataSource ) {
		const filters = drupalDataSource?.filters?.replace( /_/g, ' ' );
		const formattedDrupalDataSource = drupalDataSource
			? { ...drupalDataSource, filters }
			: null;

		// We provide in the renderBody the view specified before in the parent component, received as "children" in this component.
		// We provide in the renderHeader the components-core header, if it is desired to be shown
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
				defaultProps={ defaultProps }
				drupalDataSource={ formattedDrupalDataSource }
				drupalDataFilter={ filterDrupalData }
				drupalDataTransformer={ transformDrupalData }
				noResultsText="No news to show."
				maxItems={ maxItems }
			/>
		);
	}

	if ( ! drupalDataSource && wpDataSource ) {
		return (
			<KeNewsContainerProvider
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
				wpDataSource={ wpDataSource }
				wpDataTransformer={ transformWpData }
				noResultsText="No news to show."
				maxItems={ maxItems }
			/>
		);
	}

	if ( drupalDataSource && wpDataSource ) {
		const filters = drupalDataSource?.filters?.replace( /_/g, ' ' );
		const formattedDrupalDataSource = drupalDataSource
			? { ...drupalDataSource, filters }
			: null;

		return (
			<MergedNewsContainerProvider
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
				defaultProps={ defaultProps }
				drupalDataSource={ formattedDrupalDataSource }
				drupalDataFilter={ filterDrupalData }
				drupalDataTransformer={ transformDrupalData }
				wpDataSource={ wpDataSource }
				wpDataTransformer={ transformWpData }
				noResultsText="No news to show."
				maxItems={ maxItems }
			/>
		);
	}
};

BaseFeed.propTypes = {
	header: feedHeaderShape,
	ctaButton: feedCtaButtonShape,
	drupalDataSource: feedDrupalDataSourceShape,
	wpDataSource: feedWpRestDataSourceShape,
	maxItems: PropTypes.number,
	children: PropTypes.element,
};

export { BaseFeed };
