<?php
/**
 * Enqueue the frontend scripts for the Anchor Menu block.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Enqueue AnchorMenu script.
if (
	has_block( 'unityblocks/anchor-menu' )
) {
	$unityblocks_core_file    = $vendors_url . '/libCore.umd.js';
	$unityblocks_core_version = UNITYBLOCKS_VERSION . '.' . filemtime( $vendors_path . 'libCore.umd.js' );

	wp_enqueue_script(
		'unity-core',
		$unityblocks_core_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_core_version,
		true
	);

	$unityblocks_anchormenu_file    = $dir_url . 'unityblocks-anchormenu.js';
	$unityblocks_anchormenu_version = UNITYBLOCKS_VERSION . '.' . filemtime( $dir_path . 'unityblocks-anchormenu.js' );

	wp_enqueue_script(
		'unityblocks-anchormenu',
		$unityblocks_anchormenu_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_anchormenu_version,
		true
	);
}

// TODO: test data to pass to frontend React script.
$unityblocks_anchormenu_items   = array();
$unityblocks_anchormenu_items[] = array(
	'text'         => 'First container',
	'targetIdName' => 'first-container',
	'icon'         => array( 'fas', 'link' ),
);
$unityblocks_anchormenu_items[] = array(
	'text'         => 'Second container',
	'targetIdName' => 'second-container',
);
$unityblocks_anchormenu_items[] = array(
	'text'         => 'Third container',
	'targetIdName' => 'third-container',
);
$unityblocks_anchormenu_items[] = array(
	'text'         => 'Fourth container',
	'targetIdName' => 'fourth-container',
);

wp_localize_script(
	'unityblocks-anchormenu',
	'unityblocksAnchorMenuData',
	array(
		'items'                      => $unityblocks_anchormenu_items,
		'firstElementId'             => null,
		'focusFirstFocusableElement' => null, // bool; not really sure whether to use this.
	)
);
