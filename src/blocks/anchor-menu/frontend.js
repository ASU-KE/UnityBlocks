import { render } from 'react-dom';

import { AnchorMenu } from '../../components';

const root = document.getElementById( 'unityblocks-anchor-menu' );

const {
	items,
	firstElementId,
	focusFirstFocusableElement,
} = unityblocksAnchorMenuData; // eslint-disable-line no-undef

render(
	<AnchorMenu
		items={ items }
		firstElementId={ firstElementId }
		focusFirstFocusableElement={ focusFirstFocusableElement }
	/>,
	root
);
