/**
 * External dependencies
 */
import classnames from 'classnames';

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
			dataSourceFilterUnits,
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

	let dataSource;
	if ( dataSourceType === 'asuDrupal' ) {
		dataSource = JSON.stringify( {
			type: 'asuDrupal',
			url: dataSourceAsuUrl + dataSourceFeed,
			// filters: dataSourceFilterUnits,
		} );
	} else {
		dataSource = JSON.stringify( {
			type: 'keGraphql',
			url: dataSourceKeUrl,
			filters: {
				categories: dataSourceFilterUnits.split( ' ' ),
			},
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
