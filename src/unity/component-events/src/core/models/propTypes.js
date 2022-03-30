// @ts-check
import PropTypes from 'prop-types';

const layoutHeaderPropTypes = PropTypes.shape( {
	color: PropTypes.oneOf( [ 'white', 'dark' ] ),
	text: PropTypes.string,
} );

const layoutCTAPropTypes = PropTypes.shape( {
	color: PropTypes.oneOf( [ 'gold', 'maroon', 'gray', 'dark' ] ),
	text: PropTypes.string,
	url: PropTypes.string,
} );

const dataSourcePropTypes = PropTypes.shape( {
	type: PropTypes.oneOf( [ 'asuDrupal', 'keGraphql' ] ),
	url: PropTypes.string.isRequired,
	filters: PropTypes.string || PropTypes.object,
	pagination: PropTypes.object,
} ).isRequired;

const eventsPropTypes = {
	header: layoutHeaderPropTypes,
	ctaButton: layoutCTAPropTypes,
	dataSource: dataSourcePropTypes,
	maxItems: PropTypes.number,
};

export {
	layoutHeaderPropTypes,
	layoutCTAPropTypes,
	dataSourcePropTypes,
	eventsPropTypes,
};
