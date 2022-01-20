// It is possible to load multiple news lists onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Carousel block
const lists = document.querySelectorAll( '.wp-block-unityblocks-news-list' );

lists.forEach( ( newsList ) => {
	const header = newsList.dataset.header;
	const cardButton = JSON.parse( newsList.dataset.cardbutton );
	const ctaButton = JSON.parse( newsList.dataset.ctabutton );
	const dataSource = JSON.parse( newsList.dataset.datasource );
	const maxItems = JSON.parse( newsList.dataset.maxitems );

	// eslint-disable-next-line
	AsuNews.initCardListNewsComponent( {
		targetSelector: '.wp-block-unityblocks-news-list',
		props: {
			header,
			cardButton,
			ctaButton,
			dataSource,
			maxItems,
		},
	} );
} );
