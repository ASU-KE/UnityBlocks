<?php
/**
 * Enqueue the frontend scripts for the News blocks.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Enqueue Core Components library.
if (
	$this->is_page_gutenberg()
	|| has_block( 'unityblocks/news-carousel' )
	// || has_block( 'unityblocks/news-grid' )
	// || has_block('unityblocks/news-list')

) {
	$unityblocks_core_file    = $vendors_url . '/asuNews.umd.js';
	$unityblocks_core_version = UNITYBLOCKS_VERSION . '.' . filemtime( $vendors_path . 'asuNews.umd.js' );

	wp_enqueue_script(
		'unity-news',
		$unityblocks_core_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_core_version,
		true
	);
}

if ( $this->is_page_gutenberg() || has_block( 'unityblocks/news-carousel' ) ) {
	$unityblocks_newscarousel_file    = $dir_url . 'unityblocks-news-carousel.js';
	$unityblocks_newscarousel_version = UNITYBLOCKS_VERSION . '.' . filemtime( $dir_path . 'unityblocks-news-carousel.js' );

	wp_enqueue_script(
		'unityblocks-news-carousel',
		$unityblocks_newscarousel_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_newscarousel_version,
		true
	);
}
