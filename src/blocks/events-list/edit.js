/**
 * External dependencies
 */
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
			dataSourceFilterCategories,
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
			filters: {
				categories: dataSourceFilterCategories,
			},
		};
	} else {
		dataSource = {
			type: 'keGraphql',
			url: dataSourceKeUrl,
			filters: {
				categories: dataSourceFilterCategories.split( ' ' ),
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
				<CardsListEvents { ...args } />
			</div>
		</>
	);
};

export default Edit;
