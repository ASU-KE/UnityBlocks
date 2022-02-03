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
	title: __( 'Unity Degree Detail', 'unityblocks' ),
	description: __( 'Provide Degree detail info pages.', 'unityblocks' ),
	icon: 'welcome-learn-more',
	keywords: [
		'unityblocks',
		__( 'degree search', 'unityblocks' ),
		__( 'courses', 'unityblocks' ),
		__( 'certificates', 'unityblocks' ),
	],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings, attributes };
