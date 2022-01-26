const { render } = wp.element;

import { CardsGridEvents } from '@asu-design-system/component-events/dist/asuEvents.es';

// It is possible to load multiple events lists onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Events List block
const lists = document.querySelectorAll( '.wp-block-unityblocks-events-list' );

lists.forEach( ( eventsList ) => {
	const enableHeader = eventsList.dataset.enableheader;
	const header = enableHeader ? eventsList.dataset.header : undefined;
	const ctaButton = enableHeader
		? JSON.parse( eventsList.dataset.ctabutton )
		: undefined;
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
