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
	title: __( 'Unity AnchorMenu (WIP)', 'unityblocks' ),
	description: __(
		'Provide sticky menu bar to jump to anchor points on the current page.',
		'unityblocks'
	),
	icon: 'menu',
	keywords: [
		'unityblocks',
		__( 'menu', 'unityblocks' ),
		__( 'navigation', 'unityblocks' ),
	],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings, attributes };
