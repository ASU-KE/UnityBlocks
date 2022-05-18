// @ts-check

import { request } from 'graphql-request';
import useSWR from 'swr';

const fetchData = ( url, query, filters, pagination ) => {
	filters.statusId = 3; // Published events only

	const variables = {
		pagination: {
			// page: parseInt( page, 10 ),
			// perPage: parseInt( perPage, 10 ),
			page: 1,
			perPage: 9,
		},
		sort: {
			table: 'event',
			field: 'startAt',
			order: 'DESC',
		},
		// filters,
	};

	// Run GraphQL queries/mutations using a static function
	return request( url, query, variables ).then( ( data ) => data );
};

/**
 * @template S
 * @typedef {{
 *    payload: KeGraphqlFetchPayload
 *    loading: boolean
 *    error: object
 * }} FetchResponse
 */

/**
 *  @typedef {Object} KeGraphqlFetchPayload
 *  @property {number} [totalPages]
 *  @property {Object} [data]
 */

/**
 * @template T
 * @returns {FetchResponse<T>}
 */
const useFetchKeGraphql = ( query, url, filters, pagination ) => {
	const { data, error } = useSWR(
		[ url, query, filters, pagination ],
		fetchData
	);

	return {
		payload: data,
		loading: ! error && ! data,
		error,
	};
};

export { useFetchKeGraphql };
