const items = [
	{
		text: 'First container',
		targetIdName: 'first-container',
		icon: [ 'fas', 'link' ],
	},
	{ text: 'Second container', targetIdName: 'second-container' },
	{ text: 'Third container', targetIdName: 'third-container' },
	{
		text: 'Fourth container',
		targetIdName: 'fourth-container',
		icon: [ 'fas', 'link' ],
	},
];

// const {
// 	items,
// 	firstElementId,
// 	focusFirstFocusableElement,
// } = unityAnchorMenuData; // eslint-disable-line no-undef

// eslint-disable-next-line
// AsuWebCore.initAnchorMenu( {
// 	targetSelector: '#unityblocks-anchor-menu',
// 	props: {
// 		items: { items },
// 		firstElementId: { firstElementId },
// 		focusFirstFocusableElement: { focusFirstFocusableElement },
// 	},
// } );

// eslint-disable-next-line
AsuWebCore.initAnchorMenu( {
	targetSelector: '#unityblocks-anchor-menu',
	props: {
		items,
	},
} );
