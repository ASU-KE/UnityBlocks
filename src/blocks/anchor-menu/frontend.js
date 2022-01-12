import React from 'react';
import render from 'react-dom';

import { AnchorMenu } from '@asu-design-system/components-core';

const blockRoot = document.getElementById( 'unityblocks-anchor-menu' );

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

render( <AnchorMenu items={ items } />, blockRoot );

// const {
// 	items,
// 	firstElementId,
// 	focusFirstFocusableElement,
// } = unityblocksAnchorMenuData; // eslint-disable-line no-undef

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
// AsuWebCore.initAnchorMenu( {
// 	targetSelector: '#unityblocks-anchor-menu',
// 	props: {
// 		items: [
// 			{
// 				text: 'First container',
// 				targetIdName: 'first-container',
// 				icon: [ 'fas', 'link' ],
// 			},
// 			{ text: 'Second container', targetIdName: 'second-container' },
// 			{ text: 'Third container', targetIdName: 'third-container' },
// 			{
// 				text: 'Fourth container',
// 				targetIdName: 'fourth-container',
// 				icon: [ 'fas', 'link' ],
// 			},
// 		],
// 	},
// } );
