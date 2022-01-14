<?php
/**
 * Enqueue the frontend scripts for the Anchor Menu block.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

// Enqueue AnchorMenu script.
if (
	has_block('unityblocks/anchor-menu')
) {
	$unity_core_file    = $vendors_url . '/libCore.umd.js';
	$unity_core_version = UNITYBLOCKS_VERSION . '.' . filemtime($vendors_path . 'libCore.umd.js');

	wp_enqueue_script(
		'unity-core',
		$unity_core_file,
		array( 'wp-element', 'wp-components' ),
		$unity_core_version,
		true
	);

	$anchormenu_file    = $dir_url . 'unityblocks-anchormenu.js';
	$anchormenu_version = UNITYBLOCKS_VERSION . '.' . filemtime($dir_path . 'unityblocks-anchormenu.js');

	wp_enqueue_script(
		'unityblocks-anchormenu',
		$anchormenu_file,
		array( 'wp-element', 'wp-components' ),
		$anchormenu_version,
		true
	);
}

// TODO: test data to pass to frontend React script.
$anchor_menu_items            = array();
$anchor_menu_items[]          = array(
	'text'         => 'First container',
	'targetIdName' => 'first-container',
	'icon'         => array( 'fas', 'link' ),
);
$anchor_menu_items[]          = array(
	'text'         => 'Second container',
	'targetIdName' => 'second-container',
);
$anchor_menu_items[]          = array(
	'text'         => 'Third container',
	'targetIdName' => 'third-container',
);
$anchor_menu_items[]          = array(
	'text'         => 'Fourth container',
	'targetIdName' => 'fourth-container',
);

wp_localize_script(
	'unityblocks-anchormenu',
	'unityblocksAnchorMenuData',
	array(
		'items'                      => $anchor_menu_items,
		'firstElementId'             => null,
		'focusFirstFocusableElement' => null, // bool; not really sure whether to use this.
	)
);
