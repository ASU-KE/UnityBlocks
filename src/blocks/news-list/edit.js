/**
 * External dependencies
 */
import { CardListlNews } from '@asu-design-system/component-news/dist/asuNews.es';

/**
 * Internal dependencies
 */
// import Controls from './controls';
import Inspector from './inspector';

/**
 * Block edit function
 *
 * @param {Object} props
 */
const Edit = ( props ) => {
	const {
		attributes: {
			enableHeader,
			headerText,
			headerColor,
			ctaText,
			ctaColor,
			ctaUrl,
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

	const cardButton = {
		color: cardButtonColor,
		text: cardButtonText,
		url: cardButtonSize,
	};

	const asuDataSource = enableAsuDataSource
		? {
				url: asuDataSourceUrl + asuDataSourceFeed,
				filters: asuDataSourceFilters,
		  }
		: null;

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

	const keDataSource = enableKeDataSource
		? {
				url: keDataSourceUrl,
				filters: wpSourceFilters,
				// pagination: wpSourcePagination
		  }
		: null;

	const args = {
		header,
		ctaButton,
		cardButton,
		asuDataSource,
		keDataSource,
		maxItems,
	};

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<CardListlNews { ...args } />
			</div>
		</>
	);
};

export default Edit;
