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
	title: __( 'Brassring jobs', 'unityblocks' ),
	description: __(
		'Provides job openings from BrassRing listed by departments',
		'unityblocks'
	),
	icon: 'database-import',
	keywords: [
		'unityblocks',
		__( 'jobs', 'unityblocks' ),
		__( 'job', 'unityblocks' ),
		__( 'brassring', 'unityblocks' ),
		__( 'brass', 'unityblocks' ),
		__( 'ring', 'unityblocks' ),
		__( 'opening', 'unityblocks' ),
		__( 'staff', 'unityblocks' ),
		__( 'student', 'unityblocks' ),
	],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings, attributes };
