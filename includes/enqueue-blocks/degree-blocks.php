<?php
/**
 * Enqueue the frontend scripts for the Degree application blocks.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( $this->is_page_gutenberg() || has_block( 'unityblocks/degree-rfi-form' ) ) {
	$unityblocks_degree_rfiform_file    = $dir_url . 'unityblocks-degree-rfi-form.js';
	$unityblocks_degree_rfiform_version = UNITYBLOCKS_VERSION . '.' . filemtime( $dir_path . 'unityblocks-degree-rfi-form.js' );

	wp_enqueue_script(
		'unityblocks-degree-rfi-form',
		$unityblocks_degree_rfiform_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_degree_rfiform_version,
		true
	);
}
