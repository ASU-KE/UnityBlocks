// @ts-check
import PropTypes from 'prop-types';

const feedHeaderShape = PropTypes.shape( {
	color: PropTypes.oneOf( [ 'white', 'dark' ] ),
	text: PropTypes.string,
} );

const feedCtaButtonShape = PropTypes.shape( {
	color: PropTypes.oneOf( [ 'gold', 'maroon', 'gray', 'dark' ] ),
	text: PropTypes.string,
} );

const feedCardButtonShape = PropTypes.shape( {
	color: PropTypes.oneOf( [ 'gold', 'maroon', 'gray', 'dark' ] ),
	text: PropTypes.string,
	size: PropTypes.string,
} );

const feedWpApiFiltersShape = PropTypes.shape( {
	categories: PropTypes.string,
	tags: PropTypes.string,
	statusId: PropTypes.number,
} );

const feedPaginationShape = PropTypes.shape( {
	page: PropTypes.number,
	perPage: PropTypes.number,
	order: PropTypes.string,
	orderBy: PropTypes.string,
} );

const feedDataSourceShape = PropTypes.shape( {
	type: PropTypes.oneOf( [ 'asuDrupal', 'wpApi', 'keGraphql' ] ),
	url: PropTypes.string,
	filters: PropTypes.oneOfType( [ PropTypes.string, feedWpApiFiltersShape ] ),
	pagination: feedPaginationShape,
} );

const feedComponentShape = PropTypes.shape( {
	header: feedHeaderShape,
	ctaButton: feedCtaButtonShape,
	dataSource: feedDataSourceShape,
	maxItems: PropTypes.number,
} );

export {
	feedComponentShape,
	feedHeaderShape,
	feedCtaButtonShape,
	feedDataSourceShape,
	feedCardButtonShape,
};
