const { render } = wp.element;

import { CardGridNews } from '@asu-design-system/component-news/dist/asuNews.es';

// It is possible to load multiple news grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Grid block
const grids = document.querySelectorAll( '.wp-block-unityblocks-news-grid' );

grids.forEach( ( newsGrid ) => {
	const enableHeader = newsGrid.dataset.enableheader;
	const header = enableHeader ? newsGrid.dataset.header : undefined;
	const ctaButton = enableHeader
		? JSON.parse( newsGrid.dataset.ctabutton )
		: undefined;
	const cardButton = JSON.parse( newsGrid.dataset.cardbutton );
	const dataSource = JSON.parse( newsGrid.dataset.datasource );
	const maxItems = JSON.parse( newsGrid.dataset.maxitems );

	render(
		<CardGridNews
			header={ header }
			cardButton={ cardButton }
			ctaButton={ ctaButton }
			dataSource={ dataSource }
			maxItems={ maxItems }
		/>,
		newsGrid
	);
} );
