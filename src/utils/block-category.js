/**
 * WordPress dependencies
 */
import {
	getCategories,
	setCategories,
	registerBlockCollection,
} from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { supportsCollections } from './block-helpers';

const categories = [
	{
		slug: 'unityblocks-galleries',
		title: __( 'Galleries', 'unityblocks' ),
	},
	...getCategories().filter(
		( { slug } ) => slug !== 'unityblocks-galleries'
	),
];

/**
 * Function to register a block collection for our blocks.
 */
if ( supportsCollections() ) {
	registerBlockCollection( 'unityblocks', {
		title: 'UnityBlocks',
		icon: 'smiley',
	} );
} else {
	categories.unshift( {
		slug: 'unityblocks',
		title: 'UnityBlocks',
		icon: 'smiley',
	} );
}

setCategories( categories );
