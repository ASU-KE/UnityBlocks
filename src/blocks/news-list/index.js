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
	title: __( 'Unity News List', 'unityblocks' ),
	description: __( 'Provide a list layout of ASU News.', 'unityblocks' ),
	icon: 'list-view',
	keywords: [
		'unityblocks',
		__( 'news', 'unityblocks' ),
		__( 'list', 'unityblocks' ),
	],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings, attributes };
