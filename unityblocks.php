<?php

/**
 * Plugin Name:       UnityBlocks
 * Description:       UnityBlocks is a suite of page building content blocks for the ASU Web Standards Unity (UDS) WordPress theme.
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Version:           3.0.0
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
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function unityblocks_block_init()
{
	// check WP version: v6.8+, v6.7, pre 6.7
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	} else {
		if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
			wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		}
		$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
		foreach ( array_keys( $manifest_data ) as $block_type ) {
			register_block_type( __DIR__ . "/build/{$block_type}" );
		}
	}

}
add_action('init', 'unityblocks_block_init');

function unity_blocks_scripts() {
	wp_register_style('editor-styles-asu-career',  plugin_dir_url(__FILE__) . 'build/asu-careers/index.css');
	wp_register_style('styles-asu-career',  plugin_dir_url(__FILE__) . 'build/asu-careers/style-index.css');
	wp_register_style('styles-wchm',  plugin_dir_url(__FILE__) . 'build/wchm/style-index.css');
}
add_action( 'wp_enqueue_scripts', 'unity_blocks_scripts' );

/**
 * Register a custom category in the Block Editor that we can use for organizing our blocks.
 */
function unityblocks_register_block_category($categories)
{
	// Adding a new category.
	$categories[] = array(
		'slug'  => 'unityblocks',
		'title' => 'UnityBlocks'
	);

	return $categories;
}
add_filter('block_categories_all', 'unityblocks_register_block_category');
