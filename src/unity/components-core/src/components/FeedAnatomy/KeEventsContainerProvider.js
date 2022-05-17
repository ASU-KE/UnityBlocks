/* eslint-disable react/prop-types */
// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { FeedContext } from './FeedContext';
import { useFetchKeGraphql } from '../../core/hooks/use-fetch-ke-graphql';
import { TEST_EVENTS_QUERY } from '../../../../component-events/src/core/graphql';
import { Loader } from '../Loader';

const Container = styled.section``;

/**
 * This component is the HOC(high order component) used on component-events
 * @param {{
 *  renderHeader: JSX.Element
 *  renderBody: JSX.Element
 *  dataSource: import("../../core/types/feed-types").DataSource
 *  maxItems?: number
 *  dataTransformer?: (data: object) => object
 *  dataFilter?: (data: object, filters: string) => object
 *  noFeedText: string
 * }} props
 * @returns {JSX.Element}
 * @ignore
 */
const KeEventsContainerProvider = ( {
	dataSource,
	noFeedText,
	renderHeader,
	renderBody,
	dataTransformer = ( item ) => item,
	maxItems,
} ) => {
	// Fetch KE Events Graphql data.
	const { payload, loading, error } = useFetchKeGraphql(
		TEST_EVENTS_QUERY,
		dataSource.url,
		dataSource.filters,
		dataSource.pagination
	);

	let events = [];
	if ( ! loading ) {
		// Work all the data and set the filtered and mapped stories
		const transformedData = payload?.allEvents?.data?.map(
			dataTransformer
		);

		// remap story link with base application path
		transformedData.map(
			( story ) =>
				( story.storyLink = `${ dataSource.storyBasePath }${ story.storyLink }` )
		);

		events = maxItems
			? transformedData?.slice( 0, maxItems )
			: transformedData;
	}

	return (
		// Init the context to be used on its childrens
		<FeedContext.Provider value={ { events } }>
			<Container>
				{ renderHeader }
				{ error ? (
					<span>Error, try again!</span>
				) : (
					<>
						{ loading && ! events?.length && (
							<div className="text-center mt-4">
								<Loader />
							</div>
						) }
						{ events?.length
							? renderBody
							: ! loading && (
									<p className="text-center">
										{ noFeedText }
									</p>
							  ) }
					</>
				) }
			</Container>
		</FeedContext.Provider>
	);
};

// KeEventsContainerProvider.propTypes = {
// 	renderHeader: PropTypes.element,
// 	renderBody: PropTypes.element,
// 	maxItems: PropTypes.number,
// 	dataTransformer: PropTypes.func,
// 	noFeedText: PropTypes.string,
// };

export { KeEventsContainerProvider };
