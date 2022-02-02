const { render } = wp.element;

import { CardGridNews } from '@asu-design-system/component-news/dist/asuNews.es';

// It is possible to load multiple news grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Grid block
const grids = document.querySelectorAll( '.wp-block-unityblocks-news-grid' );

grids.forEach( ( newsGrid ) => {
	const enableHeader = newsGrid.dataset.enableheader === 'true';
	const cardButton = JSON.parse( newsGrid.dataset.cardbutton );
	const dataSource = JSON.parse( newsGrid.dataset.datasource );
	const maxItems = newsGrid.dataset.maxitems;

	const props = enableHeader
		? {
				header: JSON.parse( newsGrid.dataset.header ),
				ctaButton: JSON.parse( newsGrid.dataset.ctabutton ),
				cardButton,
				dataSource,
				maxItems,
		  }
		: {
				cardButton,
				dataSource,
				maxItems,
		  };

	render( <CardGridNews { ...props } />, newsGrid );
} );
