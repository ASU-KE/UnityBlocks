/**
 * External dependencies
 */
import { CardsGridEvents } from '@asu-design-system/component-events/dist/asuEvents.es';

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
				<CardsGridEvents { ...args } />
			</div>
		</>
	);
};

export default Edit;
