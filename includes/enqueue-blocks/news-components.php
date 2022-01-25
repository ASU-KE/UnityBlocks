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

if ( $this->is_page_gutenberg() || has_block( 'unityblocks/news-grid' ) ) {
	$unityblocks_newsgrid_file    = $dir_url . 'unityblocks-news-grid.js';
	$unityblocks_newsgrid_version = UNITYBLOCKS_VERSION . '.' . filemtime( $dir_path . 'unityblocks-news-grid.js' );

	wp_enqueue_script(
		'unityblocks-news-grid',
		$unityblocks_newsgrid_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_newsgrid_version,
		true
	);
}

if ( $this->is_page_gutenberg() || has_block( 'unityblocks/news-list' ) ) {
	$unityblocks_newslist_file    = $dir_url . 'unityblocks-news-list.js';
	$unityblocks_newslist_version = UNITYBLOCKS_VERSION . '.' . filemtime( $dir_path . 'unityblocks-news-list.js' );

	wp_enqueue_script(
		'unityblocks-news-list',
		$unityblocks_newslist_file,
		array( 'wp-element', 'wp-components' ),
		$unityblocks_newslist_version,
		true
	);
}
