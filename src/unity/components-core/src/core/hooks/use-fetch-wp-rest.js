// @ts-check

import useSWR from 'swr';

const fetcher = async ( url, filters, pagination ) => {
	const { categories } = filters;
	const { page, perPage, order, orderBy } = pagination;

	let response;
	let query = 'posts?';

	if ( categories.length ) {
		query = `${ query }categories=${ categories.shift() }`;
	}

	if ( categories.length ) {
		query = categories.reduce(
			( accumulator, currentValue ) =>
				`${ accumulator }&categories=${ currentValue }`,
			query
		);
	}

	query += `&per_page=${ perPage }`;
	query += `&page=${ page }`;
	query += `&order=${ order }`;
	query += `&orderby=${ orderBy }`;

	try {
		response = await fetch( url + query );
	} catch ( e ) {
		if (
			! process.env.NODE_ENV ||
			process.env.NODE_ENV === 'development'
		) {
			console.log(
				'***** Problem with fetch that results in an exception'
			);
			console.error( e );
		}
		throw new Error( 'Invalid Response' );
	}

	if ( response.ok ) {
		try {
			return {
				data: await response.json(),
				totalPages: Number( response.headers.get( 'x-wp-totalpages' ) ),
			};
		} catch ( e ) {
			if (
				! process.env.NODE_ENV ||
				process.env.NODE_ENV === 'development'
			) {
				console.log( '***** Problem with JSON payload', e );
			}
			throw 'Result OK but JSON borked';
		}
	} else {
		if (
			! process.env.NODE_ENV ||
			process.env.NODE_ENV === 'development'
		) {
			console.log(
				'****** Result ! OK',
				response.status,
				response.statusText
			);
		}
		throw response.statusText;
	}
};

/**
 * @template S
 * @typedef {{
 *    payload: WpFetchPayload
 *    loading: boolean,
 *    error: object
 * }} FetchResponse
 */

/**
 *  @typedef {Object} WpFetchPayload
 *  @property {number} [totalPages]
 *  @property {Object} [data]
 */

/**
 * @template T
 * @returns {FetchResponse<T>}
 */
const useFetchWpRest = ( url, filters, pagination ) => {
	const { data: response, error } = useSWR(
		[ url, filters, pagination ],
		fetcher
	);

	return {
		payload: {
			data: response.data,
			totalPages: response.totalPages,
		},
		loading: ! error && ! response.data,
		error,
	};
};

export { useFetchWpRest };
