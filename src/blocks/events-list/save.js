/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: {
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

	const header = {
		color: headerColor,
		text: headerText,
	};

	const ctaButton = {
		color: ctaColor,
		text: ctaText,
		url: ctaUrl,
	};

	const dataSource = {
		url: dataSourceUrl,
		filters: dataSourceFilters,
	};

	return (
		<div
			// id="unityblocks-news-list"
			className={ classnames( className ) }
			data-header={ JSON.stringify( header ) }
			data-ctabutton={ JSON.stringify( ctaButton ) }
			data-datasource={ JSON.stringify( dataSource ) }
			data-maxitems={ maxItems }
		></div>
	);
};

export default save;
