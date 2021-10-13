/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

// Register block category
import './utils/block-category';

// Internal Extensions / Components
// import './components/gutter-control';
// import './components/form-label-colors';

// Formats
import './formats';

// Categories Helper
import { supportsCollections } from './utils/block-helpers';

// Deprecated Blocks
// import './js/deprecations/deprecate-unityblocks-buttons.js';
// import './js/deprecations/deprecate-unityblocks-media-card.js';

// Register Blocks
import * as alert from './blocks/alert';
import * as anchorMenu from './blocks/anchor-menu';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	let { category } = block;

	const { name, settings } = block;

	if ( ! supportsCollections() ) {
		category = 'unityblocks';
	}

	registerBlockType( name, {
		category,
		...settings,
	} );
};

/**
 * Function to register blocks provided by UnityBlocks.
 */
export const registerUnityBlocksBlocks = () => {
	[
		// accordion,
		// accordionItem,
		alert,
		anchorMenu,
	].forEach( registerBlock );
};

registerUnityBlocksBlocks();
