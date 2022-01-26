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
			enableHeader,
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
		},
		: undefined;

	const args = {
		enableHeader,
		header,
		ctaButton,
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
