// @ts-check

import useSWR from 'swr';

const fetcher = async ( url, filters, pagination ) => {
	const units = filters.units ? filters.units.split( ' ' ) : [];
	const interests = filters.interests ? filters.interests.split( ' ' ) : [];
	const locations = filters.locations ? filters.locations.split( ' ' ) : [];

	const page = 1;
	const perPage = 10;
	// const { page, perPage, order, orderBy } = pagination;
	// const order = 'DESC';
	// const orderBy = ''

	let response;
	let query = '';

	if ( units.length ) {
		query = units.reduce(
			( accumulator, currentValue ) =>
				`${ accumulator }&college_unit=${ currentValue }`,
			query
		);
	}

	if ( interests.length ) {
		query = interests.reduce(
			( accumulator, currentValue ) =>
				`${ accumulator }&interest=${ currentValue }`,
			query
		);
	}

	if ( locations.length ) {
		query = locations.reduce(
			( accumulator, currentValue ) =>
				`${ accumulator }&location=${ currentValue }`,
			query
		);
	}

	// trim leading '&' from our query string
	query = query.substring( 1 );

	query += `&per_page=${ perPage }`;
	query += `&page=${ page }`;
	// query += `&order=${ order }`;
	// query += `&orderby=${ orderBy }`;

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
 *  @property {Object} [data]
 *  @property {number} [totalPages]
 */

/**
 * @template T
 * @returns {FetchResponse<T>}
 */
const useFetchWpRest = ( url, filters ) => {
	const { data: response, error } = useSWR( [ url, filters ], fetcher );

	return {
		payload: {
			data: response?.data,
			totalPages: response?.totalPages,
		},
		loading: ! error && ! response?.data,
		error,
	};
};

export { useFetchWpRest };
