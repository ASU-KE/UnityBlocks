// @ts-check

// Transformer data function provided to the high order component
const transformData = ( state ) => ( {
	code: state.stateCode,
	description: state.description,
} );

export { transformData };
