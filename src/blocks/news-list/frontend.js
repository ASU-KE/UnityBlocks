const { render } = wp.element;

import { CardListlNews } from '@asu-design-system/component-news/dist/asuNews.es';

// It is possible to load multiple news lists onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Carousel block
const lists = document.querySelectorAll( '.wp-block-unityblocks-news-list' );

lists.forEach( ( newsList ) => {
	const header = newsList.dataset.header;
	const cardButton = JSON.parse( newsList.dataset.cardbutton );
	const ctaButton = JSON.parse( newsList.dataset.ctabutton );
	const dataSource = JSON.parse( newsList.dataset.datasource );
	const maxItems = JSON.parse( newsList.dataset.maxitems );

	render(
		<CardListlNews
			header={ header }
			cardButton={ cardButton }
			ctaButton={ ctaButton }
			dataSource={ dataSource }
			maxItems={ maxItems }
		/>,
		newsList
	);
} );
