// @ts-check

import useSWR from 'swr';
import { transformData } from '../transformers/state-iso-code.transformer';

const fetcher = async ( countryCode ) => {
	let response;

	// Only fetch state codes for US and CA
	if ( 'USA' !== countryCode && 'CAN' !== countryCode ) {
		return { data: null, error: null };
	}

	try {
		response = await fetch(
			`https://api.myasuplat-dpl.asu.edu/api/codeset/country/${ countryCode }`
		);
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
			};
		} catch ( e ) {
			if (
				! process.env.NODE_ENV ||
				process.env.NODE_ENV === 'development'
			) {
				console.log( '***** Problem with JSON payload', e );
			}
			console.error( '***** Problem with JSON payload', e );
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
 *    payload: Payload
 *    loading: boolean,
 *    error: object
 * }} FetchResponse
 */

/**
 *  @typedef {Object} Payload
 *  @property {Object} [data]
 */

/**
 * @template T
 * @returns {FetchResponse<T>}
 */
const useFetchStateIsoCodes = ( url, codeType ) => {
	const { data: response, error } = useSWR( [ url, codeType ], fetcher );

	return {
		payload: {
			data: response?.data?.map( transformData ),
		},
		loading: ! error && ! response?.data,
		error,
	};
};

export { useFetchStateIsoCodes };
