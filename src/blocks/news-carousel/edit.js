/**
 * External dependencies
 */
import { CardCarouselNews } from '@asu-design-system/component-news/dist/asuNews.es';

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
			cardButtonText,
			cardButtonColor,
			cardButtonSize,
			ctaText,
			ctaColor,
			ctaUrl,
			dataSourceUrl,
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
		: undefined;

	const ctaButton = enableHeader
		? {
				color: ctaColor,
				text: ctaText,
				url: ctaUrl,
		  }
		: undefined;

	const args = {
		enableHeader,
		header,
		ctaButton,
		cardButton: {
			color: cardButtonColor,
			text: cardButtonText,
			url: cardButtonSize,
		},
		dataSource: {
			url: dataSourceUrl,
			filters: dataSourceFilters,
		},
		maxItems,
	};

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<CardCarouselNews { ...args } />
			</div>
		</>
	);
};

export default Edit;
