/* eslint-disable react/prop-types */
// @ts-check
import { union, sortBy } from 'lodash-es';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
	feedDrupalDataSourceShape,
	feedWpRestDataSourceShape,
} from '../../../../components-core/src';
import { FeedContext } from './FeedContext';
import { useFetchDrupalFeed } from '../../core/hooks/use-fetch-drupal-feed';
import { useFetchWpRest } from '../../core/hooks/use-fetch-wp-rest';
import { Loader } from '../Loader';

const Container = styled.section``;

/**
 * This component is the HOC(high order component) used in component-news packages
 * @param {{
 *  renderHeader: JSX.Element
 *  renderBody: JSX.Element
 *  defaultProps: import("../../core/types/feed-types").FeedType
 *  drupalDataSource: import("../../core/types/feed-types").DrupalDataSource
 *  drupalDataTransformer?: (data: object) => object
 *  drupalDataFilter?: (data: object, filters: string) => object
 *  wpDataSource: import("../../core/types/feed-types").WpDataSource
 *  wpDataTransformer?: (data: object) => object
 *  maxItems?: number
 *  noResultsText: string
 * }} props
 * @returns {JSX.Element}
 * @ignore
 */
const MergedNewsContainerProvider = ( {
	defaultProps,
	drupalDataSource,
	drupalDataTransformer = ( item ) => item,
	drupalDataFilter = ( item ) => item,
	wpDataSource,
	wpDataTransformer = ( item ) => item,
	noResultsText,
	renderHeader,
	renderBody,
	maxItems,
} ) => {
	const [ drupalStories, setDrupalStories ] = useState( [] );
	const [ wpStories, setWpStories ] = useState( [] );
	const [ mergedStories, setMergedStories ] = useState( [] );

	const asuDataSource = { ...defaultProps.dataSource, ...drupalDataSource };

	// Fetch Drupal feed.
	const {
		payload: drupalData,
		loading: drupalLoading,
		error: drupalError,
	} = useFetchDrupalFeed( asuDataSource.url );

	useEffect( () => {
		// Work all the data and set the filterd and mapped feeds
		const transformedData = drupalData?.nodes.map( drupalDataTransformer );
		const filteredData = transformedData?.filter( ( item ) =>
			drupalDataFilter( item, asuDataSource?.filters )
		);
		setDrupalStories(
			maxItems ? filteredData?.slice( 0, maxItems ) : filteredData
		);
	}, [ drupalData ] );

	// Fetch KE Events Graphql data.
	const {
		payload: wpPayload,
		loading: wpLoading,
		error: wpError,
	} = useFetchWpRest(
		wpDataSource.url,
		wpDataSource.filters,
		wpDataSource.pagination
	);

	useEffect( () => {
		// Work all the data and set the filtered and mapped feeds
		const transformedData = wpPayload?.data.map( wpDataTransformer );
		setWpStories(
			maxItems ? transformedData?.slice( 0, maxItems ) : transformedData
		);
	}, [ wpPayload ] );

	useEffect( () => {
		const merged = union( drupalStories, wpStories );
		const sorted = sortBy( merged, [ 'date' ] ).reverse();

		setMergedStories( maxItems ? sorted?.slice( 0, maxItems ) : sorted );
	}, [ drupalStories, wpStories ] );

	return (
		// Init the context to be used on its childrens
		<FeedContext.Provider value={ { stories: mergedStories } }>
			<Container>
				{ renderHeader }
				{ drupalError || wpError ? (
					<span>Error, try again!</span>
				) : (
					<>
						{ ( drupalLoading || wpLoading ) &&
							! mergedStories?.length && (
								<div className="text-center mt-4">
									<Loader />
								</div>
							) }
						{ mergedStories?.length
							? renderBody
							: ! drupalLoading &&
							  ! wpLoading && (
									<p className="text-center">
										{ noResultsText }
									</p>
							  ) }
					</>
				) }
			</Container>
		</FeedContext.Provider>
	);
};

MergedNewsContainerProvider.propTypes = {
	defaultProps: PropTypes.object,
	drupalDataSource: feedDrupalDataSourceShape,
	wpDataSource: feedWpRestDataSourceShape,
	renderHeader: PropTypes.element,
	renderBody: PropTypes.element,
	maxItems: PropTypes.number,
	drupalDataTransformer: PropTypes.func,
	drupalDataFilter: PropTypes.func,
	wpDataTransformer: PropTypes.func,
	noResultsText: PropTypes.string,
};

export { MergedNewsContainerProvider };
