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
	title: __( 'ASU Careers', 'unityblocks' ),
	description: __(
		'Display an interactive job listings blocks for ASU Careers, organized by departments.',
		'unityblocks'
	),
	icon: 'database-import',
	keywords: [
		'unityblocks',
		__( 'jobs', 'unityblocks' ),
		__( 'brassring', 'unityblocks' ),
		__( 'opening', 'unityblocks' ),
		__( 'staff', 'unityblocks' ),
		__( 'student', 'unityblocks' ),
		__( 'career', 'unityblocks' ),
		__( 'asu', 'unityblocks' ),
	],
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings, attributes };
