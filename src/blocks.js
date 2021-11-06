/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

// Register block category
import './utils/block-category';

// Formats
import './formats';

// Categories Helper
import { supportsCollections } from './utils/block-helpers';

// Register Blocks
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
	[ anchorMenu ].forEach( registerBlock );
};

registerUnityBlocksBlocks();
