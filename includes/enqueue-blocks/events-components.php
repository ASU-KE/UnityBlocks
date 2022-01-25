<?php
/**
 * Enqueue the frontend scripts for the Events blocks.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( $this->is_page_gutenberg() || has_block( 'unityblocks/events-grid' ) ) {
	$unityblocks_eventsgrid_file    = $dir_url . 'unityblocks-events-grid.js';
	$unityblocks_eventsgrid_version = UNITYBLOCKS_VERSION . '.' . filemtime( $dir_path . 'unityblocks-events-grid.js' );

	wp_enqueue_script(
		'unityblocks-events-grid',
		$unityblocks_eventsgrid_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_eventsgrid_version,
		true
	);
}

if ( $this->is_page_gutenberg() || has_block( 'unityblocks/events-list' ) ) {
	$unityblocks_eventslist_file    = $dir_url . 'unityblocks-events-list.js';
	$unityblocks_eventslist_version = UNITYBLOCKS_VERSION . '.' . filemtime( $dir_path . 'unityblocks-events-list.js' );

	wp_enqueue_script(
		'unityblocks-events-list',
		$unityblocks_eventslist_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_eventslist_version,
		true
	);
}
