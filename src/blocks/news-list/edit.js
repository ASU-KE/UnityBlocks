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
			dataSourceUrl,
			dataSourceFeed,
			dataSourceFilters,
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

	const dataSource = {
		url: dataSourceUrl + dataSourceFeed,
		filters: dataSourceFilters,
	};

	const args = {
		header,
		ctaButton,
		cardButton,
		dataSource,
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
