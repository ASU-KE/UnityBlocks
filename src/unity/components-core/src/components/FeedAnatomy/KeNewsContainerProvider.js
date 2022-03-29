/* eslint-disable react/prop-types */
// @ts-check
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { feedWpRestDataSourceShape } from '../../../../components-core/src';
import { FeedContext } from './FeedContext';
import { useFetchWpRest } from '../../core/hooks/use-fetch-wp-rest';
import { Loader } from '../Loader';

const Container = styled.section``;

/**
 * This component is the HOC(high order component) used in component-news packages
 * @param {{
 *  renderHeader: JSX.Element
 *  renderBody: JSX.Element
 *  wpDataSource: import("../../core/types/feed-types").WpDataSource
 *  maxItems?: number
 *  wpDataTransformer?: (data: object) => object
 *  noResultsText: string
 * }} props
 * @returns {JSX.Element}
 * @ignore
 */
const KeNewsContainerProvider = ( {
	wpDataSource,
	noResultsText,
	renderHeader,
	renderBody,
	wpDataTransformer = ( item ) => item,
	maxItems,
} ) => {
	const [ wpStories, setWpStories ] = useState( [] );

	// Fetch KE News via WP-REST.
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

	return (
		// Init the context to be used on its childrens
		<FeedContext.Provider value={ { wpStories } }>
			<Container>
				{ renderHeader }
				{ wpError ? (
					<span>Error, try again!</span>
				) : (
					<>
						{ wpLoading && ! wpStories?.length && (
							<div className="text-center mt-4">
								<Loader />
							</div>
						) }
						{ wpStories?.length
							? renderBody
							: ! wpLoading && (
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
	wpDataSource: feedWpRestDataSourceShape,
	renderHeader: PropTypes.element,
	renderBody: PropTypes.element,
	maxItems: PropTypes.number,
	wpDataTransformer: PropTypes.func,
	noResultsText: PropTypes.string,
};

export { KeNewsContainerProvider };
