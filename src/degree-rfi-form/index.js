import { registerBlockType } from "@wordpress/blocks";
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
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import "./style.css";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
  /**
   * @see ./edit.js
   */
  edit,

  /**
   * @see ./save.js
   */
  save,
  example: () => {},
});

/**
 * Block constants
 */
// const { name, category, attributes } = metadata;

// const settings = {
// 	title: __( 'ASU Degree RFI Form', 'unityblocks' ),
// 	description: __(
// 		'Request-for-Information (RFI) form for potential ASU students to request info about ASU degrees and certificates.',
// 		'unityblocks'
// 	),
// 	icon: 'menu',
// 	keywords: [
// 		'unityblocks',
// 		__( 'rfi form', 'unityblocks' ),
// 		__( 'degree', 'unityblocks' ),
// 		__( 'webform', 'unityblocks' ),
// 	],
// 	supports: {
// 		align: [ 'wide', 'full' ],
// 	},
// 	attributes,
// 	edit,
// 	save,
// };

// export { name, category, metadata, settings, attributes };
