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

	const dataSource = {
		url: dataSourceUrl,
		filters: dataSourceFilters,
	};

	return (
		<div
			className={ classnames( className ) }
			data-header={ JSON.stringify( header ) }
			data-ctabutton={ JSON.stringify( ctaButton ) }
			data-datasource={ JSON.stringify( dataSource ) }
			data-maxitems={ maxItems }
		></div>
	);
};

export default save;
