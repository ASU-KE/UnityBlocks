const { render } = wp.element;

import { Card } from '@asu-design-system/components-core/dist/libCore.es';

// It is possible to load multiple card onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Card block
const cards = document.querySelectorAll( '.wp-block-unityblocks-card' );

cards.forEach( ( card ) => {
	const type = card.dataset.type;
	const width = card.dataset.width;
	const horizontal = card.dataset.horizontal === 'true' ? true : false;
	const clickable = card.dataset.clickable === 'true' ? true : false;
	const clickHref = card.dataset.clickHref;
	const image = card.dataset.image;
	const imageAltText = card.dataset.imageAltText;
	const title = card.dataset.title;
	const icon = card.dataset.icon;
	const body = card.dataset.body;
	const eventFormat = card.dataset.eventFormat;
	const eventLocation = card.dataset.eventLocation;
	const eventTime = card.dataset.eventTime;
	const buttons = JSON.parse( card.dataset.buttons );
	const linkLabel = card.dataset.linkLabel;
	const linkUrl = card.dataset.linkUrl;
	const tags = JSON.parse( card.dataset.tags );

	render(
		<Card
			type={ type }
			width={ width }
			horizontal={ horizontal }
			clickable={ clickable }
			clickHref={ clickHref }
			image={ image }
			imageAltText={ imageAltText }
			title={ title }
			icon={ icon }
			body={ body }
			eventFormat={ eventFormat }
			eventLocation={ eventLocation }
			eventTime={ eventTime }
			buttons={ buttons }
			linkLabel={ linkLabel }
			linkUrl={ linkUrl }
			tags={ tags }
		/>,
		card
	);
} );
