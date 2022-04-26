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
			enableStoryDate,
			enableCardTags,
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
		? {
				color: headerColor,
				text: headerText,
		  }
		: null;

	const ctaButton = enableHeader
		? {
				color: ctaColor,
				text: ctaText,
				url: ctaUrl,
		  }
		: null;

	// const cardButton = {
	// 	color: cardButtonColor,
	// 	text: cardButtonText,
	// 	size: cardButtonSize,
	// };

	const cardButton = '';

	const asuDataSource = {
		url: asuDataSourceUrl + asuDataSourceFeed,
		filters: asuDataSourceFilters,
	};

	const keSourceFilters = {
		units: keDataSourceUnits,
		interests: keDataSourceInterests,
		locations: keDataSourceLocations,
	};

	// const keSourcePagination = {
	// 	page,
	// 	perPage,
	//   order,
	//   orderBy
	// };

	const keDataSource = {
		url: keDataSourceUrl,
		filters: keSourceFilters,
		// pagination: keSourcePagination
	};

	const dataAttributes = {
		'data-enableheader': enableHeader,
		'data-header': JSON.stringify( header ),
		'data-ctabutton': JSON.stringify( ctaButton ),
		'data-cardbutton': JSON.stringify( cardButton ),
		'data-enablestorydate': enableStoryDate,
		'data-enablecardtags': enableCardTags,
		'data-enableasusource': enableAsuDataSource,
		'data-enablekesource': enableKeDataSource,
		'data-asudatasource': enableAsuDataSource
			? JSON.stringify( asuDataSource )
			: null,
		'data-kedatasource': enableKeDataSource
			? JSON.stringify( keDataSource )
			: null,
		'data-maxitems': maxItems,
	};

	return (
		<div className={ classnames( className ) } { ...dataAttributes }></div>
	);
};

export default save;
