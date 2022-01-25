const { render } = wp.element;

import { CardGridNews } from '@asu-design-system/component-news/dist/asuNews.es';

// It is possible to load multiple news grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Grid block
const grids = document.querySelectorAll( '.wp-block-unityblocks-news-grid' );

grids.forEach( ( newsGrid ) => {
	const header = newsGrid.dataset.header;
	const cardButton = JSON.parse( newsGrid.dataset.cardbutton );
	const ctaButton = JSON.parse( newsGrid.dataset.ctabutton );
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
