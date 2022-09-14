// @ts-check

// Transformer data function provided to the high order component
const transformData = ( country ) => ( {
	code: country.countryCode,
	description: country.description,
} );

export { transformData };
