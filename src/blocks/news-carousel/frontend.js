const { render } = wp.element;

import { CardCarouselNews } from '@asu-design-system/component-news/dist/asuNews.es';

// It is possible to load multiple news carousels onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Carousel block
const carousels = document.querySelectorAll(
	'.wp-block-unityblocks-news-carousel'
);

carousels.forEach( ( newsCarousel ) => {
	const enableHeader = newsCarousel.dataset.enableheader;
	const header = enableHeader ? newsCarousel.dataset.header : undefined;
	const ctaButton = enableHeader
		? JSON.parse( newsCarousel.dataset.ctabutton )
		: undefined;
	const cardButton = JSON.parse( newsCarousel.dataset.cardbutton );
	const dataSource = JSON.parse( newsCarousel.dataset.datasource );
	const maxItems = JSON.parse( newsCarousel.dataset.maxitems );

	render(
		<CardCarouselNews
			header={ header }
			cardButton={ cardButton }
			ctaButton={ ctaButton }
			dataSource={ dataSource }
			maxItems={ maxItems }
		/>,
		newsCarousel
	);
} );
