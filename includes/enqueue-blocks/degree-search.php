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

if ( $this->is_page_gutenberg() || has_block( 'unityblocks/degree-detail' ) ) {
	$unityblocks_degree_detail_file    = $dir_url . 'unityblocks-degree-detail.js';
	$unityblocks_degree_detail_version = UNITYBLOCKS_VERSION . '.' . filemtime( $dir_path . 'unityblocks-degree-detail.js' );

	wp_enqueue_script(
		'unityblocks-degree-detail',
		$unityblocks_degree_detail_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_degree_detail_version,
		true
	);
}
