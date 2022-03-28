const { render } = wp.element;

import { CardGridNews } from '@asu-design-system/component-news/dist/asuNews.es';

// It is possible to load multiple news grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Grid block
const grids = document.querySelectorAll( '.wp-block-unityblocks-news-grid' );

grids.forEach( ( newsGrid ) => {
	const enableHeader = newsGrid.dataset.enableheader === 'true';
	const cardButton = JSON.parse( newsGrid.dataset.cardbutton );
	const enableAsuSource = newsGrid.dataset.enableasusource === 'true';
	const enableKeSource = newsGrid.dataset.enablekesource === 'true';

	const asuDataSource = enableAsuSource
		? JSON.parse( newsGrid.dataset.asudatasource )
		: null;
	const wpDataSource = enableKeSource
		? JSON.parse( newsGrid.dataset.wpdatasource )
		: null;
	const maxItems = newsGrid.dataset.maxitems;

	const props = enableHeader
		? {
				header: JSON.parse( newsGrid.dataset.header ),
				ctaButton: JSON.parse( newsGrid.dataset.ctabutton ),
				cardButton,
				asuDataSource,
				wpDataSource,
				maxItems,
		  }
		: {
				cardButton,
				asuDataSource,
				wpDataSource,
				maxItems,
		  };

	render( <CardGridNews { ...props } />, newsGrid );
} );
