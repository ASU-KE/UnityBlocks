const { render } = wp.element;

import { CardListlNews } from '@asu-design-system/component-news/dist/asuNews.es';

// It is possible to load multiple news lists onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Carousel block
const lists = document.querySelectorAll( '.wp-block-unityblocks-news-list' );

lists.forEach( ( newsList ) => {
	const enableHeader = newsList.dataset.enableheader === 'true';
	const cardButton = JSON.parse( newsList.dataset.cardbutton );
	const dataSource = JSON.parse( newsList.dataset.datasource );
	const maxItems = newsList.dataset.maxitems;

	const props = enableHeader
		? {
				header: JSON.parse( newsList.dataset.header ),
				ctaButton: JSON.parse( newsList.dataset.ctabutton ),
				cardButton,
				dataSource,
				maxItems,
		  }
		: {
				cardButton,
				dataSource,
				maxItems,
		  };

	render( <CardListlNews { ...props } />, newsList );
} );
