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
			cardButtonText,
			cardButtonColor,
			cardButtonSize,
			enableAsuDataSource,
			asuDataSourceUrl,
			asuDataSourceFeed,
			asuDataSourceFilters,
			enableKeDataSource,
			keDataSourceUrl,
			keDataSourceUnits,
			keDataSourceInterests,
			keDataSourceLocations,
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

	const cardButton = JSON.stringify( {
		color: cardButtonColor,
		text: cardButtonText,
		url: cardButtonSize,
	} );

	const asuDataSource = {
		url: asuDataSourceUrl + asuDataSourceFeed,
		filters: asuDataSourceFilters,
	};

	const wpSourceFilters = {
		units: keDataSourceUnits,
		interests: keDataSourceInterests,
		locations: keDataSourceLocations,
	};

	// const wpSourcePagination = {
	// 	page,
	// 	perPage,
	//   order,
	//   orderBy
	// };

	const keDataSource = {
		url: keDataSourceUrl,
		filters: wpSourceFilters,
		// pagination: wpSourcePagination
	};

	const dataAttributes = {
		'data-enableheader': enableHeader,
		'data-header': header,
		'data-ctabutton': ctaButton,
		'data-cardbutton': cardButton,
		'data-enableasusource': enableAsuDataSource,
		'data-enablekesource': enableKeDataSource,
		'data-asudatasource': enableAsuDataSource ? asuDataSource : null,
		'data-wpdatasource': enableKeDataSource ? keDataSource : null,
		'data-maxitems': maxItems,
	};

	return (
		<div className={ classnames( className ) } { ...dataAttributes }></div>
	);
};

export default save;
