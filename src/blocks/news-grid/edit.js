/**
 * External dependencies
 */
import { CardGridNews } from '../../unity/component-news/src/components';

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
			enableStoryDate,
			enableStoryAuthor,
			enableCardTags,
			enableAsuDataSource,
			asuDataSourceUrl,
			asuDataSourceFeed,
			asuDataSourceFilters,
			enableKeDataSource,
			keDataSourceUrl,
			keStoryBasePath,
			keDataSourceUnits,
			keDataSourceInterests,
			keDataSourceLocations,
			maxItems,
			numberColumns,
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

	const keDataSource = enableKeDataSource
		? {
				url: keDataSourceUrl,
				storyBasePath: keStoryBasePath,
				filters: keSourceFilters,
				// pagination: keSourcePagination
		  }
		: null;

	const args = {
		header,
		ctaButton,
		cardButton,
		enableStoryDate,
		enableStoryAuthor,
		enableCardTags,
		drupalDataSource: asuDataSource,
		wpDataSource: keDataSource,
		maxItems,
		numberColumns,
	};

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<CardGridNews { ...args } />
			</div>
		</>
	);
};

export default Edit;
