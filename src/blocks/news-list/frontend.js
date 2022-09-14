const { render } = wp.element;

import { CardListlNews } from '../../unity/component-news/src/components/CardListlNews';

// It is possible to load multiple news lists onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Carousel block
const lists = document.querySelectorAll( '.wp-block-unityblocks-news-list' );

lists.forEach( ( newsList ) => {
	const enableHeader = newsList?.dataset?.enableheader === 'true';
	const cardButton = newsList?.dataset?.cardbutton
		? JSON.parse( newsList.dataset.cardbutton )
		: {};
	const enableAsuSource = newsList?.dataset?.enableasusource === 'true';
	const enableKeSource = newsList?.dataset?.enablekesource === 'true';

	const asuDataSource = enableAsuSource
		? JSON.parse( newsList.dataset.asudatasource )
		: null;
	const keDataSource = enableKeSource
		? JSON.parse( newsList.dataset.kedatasource )
		: null;
	const maxItems = Number( newsList.dataset.maxitems );

	const props = enableHeader
		? {
				header: JSON.parse( newsList.dataset.header ),
				ctaButton: JSON.parse( newsList.dataset.ctabutton ),
				cardButton,
				drupalDataSource: asuDataSource,
				wpDataSource: keDataSource,
				maxItems,
		  }
		: {
				cardButton,
				drupalDataSource: asuDataSource,
				wpDataSource: keDataSource,
				maxItems,
		  };

	render( <CardListlNews { ...props } />, newsList );
} );
