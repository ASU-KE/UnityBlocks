const { render } = wp.element;

import { AnchorMenu } from '@asu-design-system/components-core/dist/libCore.es';

/*
Load the block attributes from the dom element attributes.

If the Unity component was designed to be inserted multiple times into a page, we would select
the dom elements by the WP-generated class and load the resulting elements into an array.
The class for this block is wp-block-unityblocks-anchor-menu.

However, the AnchorMenu React component only targets a single occurrence on a page using an element
id.
*/

// Load first element with the unityblocks-anchormenu id
const menu = document.querySelector( '#unityblocks-anchor-menu' );

const items = menu?.dataset?.items ? JSON.parse( menu.dataset.items ) : [];
const firstElementId = menu?.dataset?.firstElementId;
const focusFirstFocusableElement = menu?.dataset?.focusFirstFocusableElement;

if ( menu ) {
	render(
		<AnchorMenu
			items={ items }
			firstElementId={ firstElementId }
			focusFirstFocusableElement={ focusFirstFocusableElement }
		/>,
		menu
	);
}
