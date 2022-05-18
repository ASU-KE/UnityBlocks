const { render } = wp.element;

import { CardCarouselNews } from '../../unity/component-news/src/components/CardCarouselNews';

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
	const keDataSource = enableKeSource
		? JSON.parse( newsCarousel.dataset.kedatasource )
		: null;
	const maxItems = Number( newsCarousel.dataset.maxitems );

	const props = enableHeader
		? {
				header: JSON.parse( newsCarousel.dataset.header ),
				ctaButton: JSON.parse( newsCarousel.dataset.ctabutton ),
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

	render( <CardCarouselNews { ...props } />, newsCarousel );
} );
