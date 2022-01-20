// It is possible to load multiple news carousels onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Carousel block
const carousels = document.querySelectorAll(
	'.wp-block-unityblocks-news-carousel'
);

carousels.forEach( ( newsCarousel ) => {
	const header = newsCarousel.dataset.header;
	const cardButton = JSON.parse( newsCarousel.dataset.cardbutton );
	const ctaButton = JSON.parse( newsCarousel.dataset.ctabutton );
	const dataSource = JSON.parse( newsCarousel.dataset.datasource );
	const maxItems = JSON.parse( newsCarousel.dataset.maxitems );

	// eslint-disable-next-line
	AsuNews.initCardCarouselNewsComponent( {
		targetSelector: '.wp-block-unityblocks-news-carousel',
		props: {
			header,
			cardButton,
			ctaButton,
			dataSource,
			maxItems,
		},
	} );
} );
