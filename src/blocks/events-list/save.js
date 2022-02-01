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
			dataSourceUrl,
			dataSourceFilters,
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

	const dataSource = JSON.stringify( {
		url: dataSourceUrl,
		filters: dataSourceFilters,
	} );

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
