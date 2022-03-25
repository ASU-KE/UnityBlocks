/* eslint-disable react/prop-types */
// @ts-check
import { union, sortBy } from 'lodash-es';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
 *  drupalDataSource: import("../../core/types/feed-types").DataSource
 *  wpDataSource: import("../../core/types/feed-types").DataSource
 *  maxItems?: number
 *  drupalDataTransformer?: (data: object) => object
 *  drupalDataFilter?: (data: object, filters: string) => object
 *  wpDataTransformer?: (data: object) => object
 *  defaultProps: import("../../core/types/feed-types").FeedType
 *  noResultsText: string
 * }} props
 * @returns {JSX.Element}
 * @ignore
 */
const KeNewsContainerProvider = ( {
	defaultProps,
	drupalDataSource,
	wpDataSource,
	noResultsText,
	renderHeader,
	renderBody,
	drupalDataTransformer = ( item ) => item,
	drupalDataFilter = ( item ) => item,
	wpDataTransformer = ( item ) => item,
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
		<FeedContext.Provider value={ { mergedStories } }>
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

KeNewsContainerProvider.propTypes = {
	renderHeader: PropTypes.element,
	renderBody: PropTypes.element,
	maxItems: PropTypes.number,
	dataTransformer: PropTypes.func,
	dataFilter: PropTypes.func,
	noResultsText: PropTypes.string,
};

export { KeNewsContainerProvider };
