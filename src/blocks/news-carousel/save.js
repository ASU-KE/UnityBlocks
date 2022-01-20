/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: {
			headerText,
			headerColor,
			cardButtonText,
			cardButtonColor,
			cardButtonSize,
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

	const cardButton = {
		color: cardButtonColor,
		text: cardButtonText,
		url: cardButtonSize,
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
			// id="unityblocks-card-carousel"
			className={ classnames( className ) }
			data-header={ JSON.stringify( header ) }
			data-cardbutton={ JSON.stringify( cardButton ) }
			data-ctabutton={ JSON.stringify( ctaButton ) }
			data-datasource={ JSON.stringify( dataSource ) }
			data-maxitems={ maxItems }
		></div>
	);
};

export default save;
