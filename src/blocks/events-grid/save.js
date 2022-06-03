/**
 * External dependencies
 */
import classnames from 'classnames';
import { formatISO, startOfToday } from 'date-fns';

const save = ( props ) => {
	const {
		attributes: {
			enableHeader,
			headerText,
			headerColor,
			ctaText,
			ctaUrl,
			ctaColor,
			dataSourceType,
			dataSourceAsuUrl,
			dataSourceKeUrl,
			dataSourceFeed,
			asuFilterUnits,
			keFilterUnits,
			keSortEvents,
			keShowPastEvents,
			keShowFutureEvents,
			maxItems,
		},
		className,
	} = props;

	const header = enableHeader
		? JSON.stringify( {
				color: headerColor,
				text: headerText,
		  } )
		: null;

	const ctaButton = enableHeader
		? JSON.stringify( {
				color: ctaColor,
				text: ctaText,
				url: ctaUrl,
		  } )
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
		dataSource = JSON.stringify( {
			type: 'asuDrupal',
			url: dataSourceAsuUrl + dataSourceFeed,
			filters: asuFilterUnits,
		} );
	} else {
		// console.error( keFilterUnits );
		dataSource = JSON.stringify( {
			type: 'keGraphql',
			url: dataSourceKeUrl,
			filter: keFilter,
			sort: keSort,
		} );
	}

	const dataAttributes = {
		'data-enableheader': enableHeader,
		'data-header': header,
		'data-ctabutton': ctaButton,
		'data-datasource': dataSource,
		'data-maxitems': maxItems,
	};

	return (
		<div className={ classnames( className ) } { ...dataAttributes }></div>
	);
};

export default save;
