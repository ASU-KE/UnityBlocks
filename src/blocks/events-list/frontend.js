const { render } = wp.element;

import { CardsGridEvents } from '@asu-design-system/component-events/dist/asuEvents.es';

// It is possible to load multiple events lists onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Events List block
const lists = document.querySelectorAll( '.wp-block-unityblocks-events-list' );

lists.forEach( ( eventsList ) => {
	const header = eventsList.dataset.header;
	const ctaButton = JSON.parse( eventsList.dataset.ctabutton );
	const dataSource = JSON.parse( eventsList.dataset.datasource );
	const maxItems = JSON.parse( eventsList.dataset.maxitems );

	render(
		<CardsGridEvents
			header={ header }
			ctaButton={ ctaButton }
			dataSource={ dataSource }
			maxItems={ maxItems }
		/>,
		eventsList
	);
} );
