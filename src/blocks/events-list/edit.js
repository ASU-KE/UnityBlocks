/**
 * External dependencies
 */
import { formatISO, startOfToday } from 'date-fns';
import { CardsListEvents } from '../../unity/component-events/src/components/CardsListEvents';

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
			keEventBasePath,
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
		keFilter.endAt_gt = formatISO( startOfToday() );
	}

	if ( ! keShowFutureEvents ) {
		keFilter.endAt_lt = formatISO( startOfToday() );
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
			eventBasePath: keEventBasePath,
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
				<CardsListEvents { ...args } />
			</div>
		</>
	);
};

export default Edit;
