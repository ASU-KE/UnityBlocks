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
	title: __( 'Unity Testimonial', 'unityblocks' ),
	description: __( 'Provide Testimonial block.', 'unityblocks' ),
	icon: 'format-quote',
	keywords: [
		'unityblocks',
		__( 'images', 'unityblocks' ),
		__( 'layout', 'unityblocks' ),
	],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings, attributes };
