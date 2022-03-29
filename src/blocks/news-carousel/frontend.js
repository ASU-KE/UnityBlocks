const { render } = wp.element;

import { CardCarouselNews } from '@asu-design-system/component-news/dist/asuNews.es';

// It is possible to load multiple news carousels onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Carousel block
const carousels = document.querySelectorAll(
	'.wp-block-unityblocks-news-carousel'
);

carousels.forEach( ( newsCarousel ) => {
	const enableHeader = newsCarousel.dataset.enableheader === 'true';
	const cardButton = JSON.parse( newsCarousel.dataset.cardbutton );
	const enableAsuSource = newsCarousel.dataset.enableasusource === 'true';
	const enableKeSource = newsCarousel.dataset.enablekesource === 'true';

	const asuDataSource = enableAsuSource
		? JSON.parse( newsCarousel.dataset.asudatasource )
		: null;
	const wpDataSource = enableKeSource
		? JSON.parse( newsCarousel.dataset.wpdatasource )
		: null;
	const maxItems = newsCarousel.dataset.maxitems;

	const props = enableHeader
		? {
				header: JSON.parse( newsCarousel.dataset.header ),
				ctaButton: JSON.parse( newsCarousel.dataset.ctabutton ),
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

	render( <CardCarouselNews { ...props } />, newsCarousel );
} );
