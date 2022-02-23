/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Unity Card', 'unityblocks' ),
	description: __( 'Provide Card block.', 'unityblocks' ),
	icon: 'index-card',
	keywords: [
		'unityblocks','card', 'cards', 'story', 'horizontal'
	],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings, attributes };
