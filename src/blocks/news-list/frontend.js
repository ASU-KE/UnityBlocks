const { render } = wp.element;

import { CardListlNews } from '@asu-design-system/component-news/dist/asuNews.es';

// It is possible to load multiple news lists onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Carousel block
const lists = document.querySelectorAll( '.wp-block-unityblocks-news-list' );

lists.forEach( ( newsList ) => {
	const enableHeader = newsList.dataset.enableheader === 'true';
	const cardButton = JSON.parse( newsList.dataset.cardbutton );
	const enableAsuSource = newsList.dataset.enableasusource === 'true';
	const enableKeSource = newsList.dataset.enablekesource === 'true';

	const asuDataSource = enableAsuSource
		? JSON.parse( newsList.dataset.asudatasource )
		: null;
	const wpDataSource = enableKeSource
		? JSON.parse( newsList.dataset.wpdatasource )
		: null;
	const maxItems = newsList.dataset.maxitems;

	const props = enableHeader
		? {
				header: JSON.parse( newsList.dataset.header ),
				ctaButton: JSON.parse( newsList.dataset.ctabutton ),
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

	render( <CardListlNews { ...props } />, newsList );
} );
