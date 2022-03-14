/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: {
			enableHeader,
			headerText,
			headerColor,
			ctaText,
			ctaUrl,
			ctaColor,
			dataSourceType,
			dataSourceAsuUrl,
			dataSourceKeUrl,
			dataSourceFeed,
			dataSourceFilterCategories,
			// dataSourcePage,
			// dataSourcePerPage,
			// dataSourceOrder,
			// dataSourceOrderBy,
			maxItems,
		},
		className,
	} = props;

	const header = enableHeader
		? JSON.stringify( {
				color: headerColor,
				text: headerText,
		  } )
		: null;

	const ctaButton = enableHeader
		? JSON.stringify( {
				color: ctaColor,
				text: ctaText,
				url: ctaUrl,
		  } )
		: null;

	let dataSource;
	if ( dataSourceType === 'asuDrupal' ) {
		dataSource = JSON.stringify( {
			type: 'asuDrupal',
			url: dataSourceAsuUrl + dataSourceFeed,
			filters: {
				categories: dataSourceFilterCategories,
			},
		} );
	} else {
		dataSource = JSON.stringify( {
			type: 'keGraphql',
			url: dataSourceKeUrl,
			filters: {
				categories: dataSourceFilterCategories,
			},
			// pagination: {
			// 	page: dataSourcePage,
			// 	perPage: dataSourcePerPage,
			// 	order: dataSourceOrder,
			// 	orderBy: dataSourceOrderBy,
			// },
		} );
	}

	const dataAttributes = {
		'data-enableheader': enableHeader,
		'data-header': header,
		'data-ctabutton': ctaButton,
		'data-datasource': dataSource,
		'data-maxitems': maxItems,
	};

	return (
		<div className={ classnames( className ) } { ...dataAttributes }></div>
	);
};

export default save;
