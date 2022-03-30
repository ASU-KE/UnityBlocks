/**
 * External dependencies
 */
import { CardsGridEvents } from '../../unity/component-events/src/components/CardsGridEvents';

/**
 * Internal dependencies
 */
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
			dataSourceType,
			dataSourceAsuUrl,
			dataSourceKeUrl,
			dataSourceFeed,
			dataSourceFilterUnits,
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

	let dataSource;
	if ( dataSourceType === 'asuDrupal' ) {
		dataSource = {
			type: 'asuDrupal',
			url: dataSourceAsuUrl + dataSourceFeed,
			// filters: dataSourceFilterUnits,
		};
	} else {
		dataSource = {
			type: 'keGraphql',
			url: dataSourceKeUrl,
			filters: {
				categories: dataSourceFilterUnits.split( ' ' ),
			},
		};
	}

	const args = {
		header,
		ctaButton,
		dataSource,
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
