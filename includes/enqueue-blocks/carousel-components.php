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

if ( $this->is_page_gutenberg() || has_block( 'unityblocks/image-gallery' ) ) {
	$unityblocks_imagegallery_file    = $dir_url . 'unityblocks-image-gallery.js';
	$unityblocks_imagegallery_version = UNITYBLOCKS_VERSION . '.' . filemtime( $dir_path . 'unityblocks-image-gallery.js' );

	wp_enqueue_script(
		'unityblocks-image-gallery',
		$unityblocks_imagegallery_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_imagegallery_version,
		true
	);
}
