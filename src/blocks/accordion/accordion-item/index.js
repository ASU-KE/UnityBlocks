/**
 * External dependencies
 */
import { AccordionItemIcon as icon } from '@godaddy-wordpress/coblocks-icons';

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
import { Icon } from '@wordpress/components';

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'Accordion Item', 'unityblocks' ),
	/* translators: block description */
	description: __(
		'Add collapsable accordion items to accordions.',
		'unityblocks'
	),
	icon: <Icon icon={ icon } />,
	keywords: [
		'unityblocks',
		/* translators: block keyword */
		__( 'tabs', 'unityblocks' ),
		/* translators: block keyword (abbreviation for "frequently asked questions") */
		__( 'faq', 'unityblocks' ),
	],
	parent: [ 'unityblocks/accordion' ],
	supports: {
		reusable: false,
		html: false,
		inserter: false,
	},
	attributes,
	edit,
	save,
};

export { name, category, metadata, settings };
