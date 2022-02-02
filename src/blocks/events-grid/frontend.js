const { render } = wp.element;

import { CardsGridEvents } from '@asu-design-system/component-events/dist/asuEvents.es';

// It is possible to load multiple events grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Grid block
const grids = document.querySelectorAll( '.wp-block-unityblocks-events-grid' );

grids.forEach( ( eventsGrid ) => {
	const enableHeader = eventsGrid.dataset.enableheader === 'true';
	const dataSource = JSON.parse( eventsGrid.dataset.datasource );
	const maxItems = eventsGrid.dataset.maxitems;

	const props = enableHeader
		? {
				header: JSON.parse( eventsGrid.dataset.header ),
				ctaButton: JSON.parse( eventsGrid.dataset.ctabutton ),
				dataSource,
				maxItems,
		  }
		: {
				dataSource,
				maxItems,
		  };

	render( <CardsGridEvents { ...props } />, eventsGrid );
} );
