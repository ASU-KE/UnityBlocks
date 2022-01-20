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
			headerText,
			headerColor,
			cardButtonText,
			cardButtonColor,
			cardButtonSize,
			ctaText,
			ctaColor,
			dataSourceUrl,
			dataSourceFilters,
			maxItems,
		},
		className,
	} = props;

	const args = {
		header: {
			color: headerColor,
			text: headerText,
		},
		cardButton: {
			color: cardButtonColor,
			text: cardButtonText,
			url: cardButtonSize,
		},
		ctaButton: {
			color: ctaColor,
			text: ctaText,
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
				<CardListlNews { ...args } />
			</div>
		</>
	);
};

export default Edit;
