<?php
/**
 * Plugin Name:       UnityBlocks
 * Description:       UnityBlocks is a suite of page building content blocks for the ASU Web Standards Unity (UDS) WordPress theme.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           2.0.0
 * Author:            ASU KE Web Services
 * Author URI:        https://rto.asu.edu/web-services
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       unityblocks
 *
 * GitHub Plugin URI: ASU-KE/UnityBlocks
 * Primary Branch: main
 *
 * @package           unityblocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function unityblocks_block_init() {
	register_block_type( __DIR__ . '/build/anchor-menu' );
	register_block_type( __DIR__ . '/build/hero' );
	register_block_type( __DIR__ . '/build/events-grid' );
	register_block_type( __DIR__ . '/build/events-list' );
	register_block_type( __DIR__ . '/build/image-gallery' );
	register_block_type( __DIR__ . '/build/news-grid' );
	register_block_type( __DIR__ . '/build/news-list' );
	register_block_type( __DIR__ . '/build/testimonial' );
	register_block_type( __DIR__ . '/build/asu-careers' );
}
add_action( 'init', 'unityblocks_block_init' );
