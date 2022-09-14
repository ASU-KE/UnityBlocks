const { render } = wp.element;

import { ImageGalleryCarousel } from '@asu-design-system/component-carousel/dist/asuCarousel.es';

// It is possible to load multiple galleries onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Testimonial block
const galleries = document.querySelectorAll(
	'.wp-block-unityblocks-image-gallery'
);

galleries.forEach( ( gallery ) => {
	const imageItems = gallery?.dataset?.imageitems
		? JSON.parse( gallery.dataset.imageitems )
		: [];
	const width = gallery?.dataset?.width;
	const maxWidth = gallery?.dataset?.maxwidth;
	const hasContent = gallery?.dataset?.hascontent === 'true';
	const imageAutoSize = gallery?.dataset?.imageautosize === 'true';

	render(
		<ImageGalleryCarousel
			imageItems={ imageItems }
			hasContent={ hasContent }
			imageAutoSize={ imageAutoSize }
			width={ width }
			maxWidth={ maxWidth }
		/>,
		gallery
	);
} );
