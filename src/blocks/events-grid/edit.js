/**
 * External dependencies
 */
import { formatISO, startOfToday } from 'date-fns';
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
			asuFilterUnits,
			keFilterUnits,
			keSortEvents,
			keShowPastEvents,
			keShowFutureEvents,
			noResultsText,
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

	const keFilter = {
		categorySlugs: keFilterUnits,
	};

	if ( ! keShowPastEvents ) {
		keFilter.startAt_gt = formatISO( startOfToday() );
	}

	if ( ! keShowFutureEvents ) {
		keFilter.startAt_lt = formatISO( startOfToday() );
	}

	const keSort = {
		table: 'event',
		field: 'startAt',
		order: keSortEvents,
	};

	let dataSource;
	if ( dataSourceType === 'asuDrupal' ) {
		dataSource = {
			type: 'asuDrupal',
			url: dataSourceAsuUrl + dataSourceFeed,
			filters: asuFilterUnits,
		};
	} else {
		dataSource = {
			type: 'keGraphql',
			url: dataSourceKeUrl,
			filter: keFilter,
			sort: keSort,
		};
	}

	const args = {
		header,
		ctaButton,
		dataSource,
		noResultsText,
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
