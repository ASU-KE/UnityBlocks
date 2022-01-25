// It is possible to load multiple events grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Grid block
const grids = document.querySelectorAll( '.wp-block-unityblocks-events-grid' );

grids.forEach( ( eventsGrid ) => {
	const header = eventsGrid.dataset.header;
	const ctaButton = JSON.parse( eventsGrid.dataset.ctabutton );
	const dataSource = JSON.parse( eventsGrid.dataset.datasource );
	const maxItems = JSON.parse( eventsGrid.dataset.maxitems );

	// eslint-disable-next-line
	AsuEvents.initCardsGridEventsComponent( {
		targetSelector: '.wp-block-unityblocks-events-grid',
		props: {
			header,
			ctaButton,
			dataSource,
			maxItems,
		},
	} );
} );
