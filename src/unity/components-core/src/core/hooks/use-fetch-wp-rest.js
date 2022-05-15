// @ts-check

import useSWR from 'swr';

const fetcher = async ( url, filters, pagination ) => {
	const units = filters.units ?? [];
	const interests = filters.interests ?? [];
	const locations = filters.locations ?? [];

	const page = 1;
	const perPage = 10;
	// const { page, perPage, order, orderBy } = pagination;
	// const order = 'DESC';
	// const orderBy = ''

	let response;
	const query = 'posts?';
	let params = '';

	if ( units.length ) {
		params = units.reduce(
			( accumulator, currentValue ) =>
				`${ accumulator }&college_unit=${ currentValue }`,
			params
		);
	}

	if ( interests.length ) {
		params = interests.reduce(
			( accumulator, currentValue ) =>
				`${ accumulator }&interest=${ currentValue }`,
			params
		);
	}

	if ( locations.length ) {
		params = locations.reduce(
			( accumulator, currentValue ) =>
				`${ accumulator }&location=${ currentValue }`,
			params
		);
	}

	// trim leading '&' from our params string
	params = params.substring( 1 );

	params += `&per_page=${ perPage }`;
	params += `&page=${ page }`;
	// params += `&order=${ order }`;
	// params += `&orderby=${ orderBy }`;

	try {
		response = await fetch( `${ url }${ query }${ params }` );
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
