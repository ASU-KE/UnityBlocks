const {
	items,
	// firstElementId,
	// focusFirstFocusableElement,
} = unityblocksAnchorMenuData; // eslint-disable-line no-undef

// eslint-disable-next-line
AsuWebCore.initAnchorMenu( {
	targetSelector: '#unityblocks-anchor-menu',
	props: {
		items,
	},
} );
