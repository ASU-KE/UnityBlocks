<?php

/**
 * Plugin Name:       UnityBlocks
 * Description:       UnityBlocks is a suite of page building content blocks for the ASU Web Standards Unity (UDS) WordPress theme.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           2.0.2
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
	/**
	 * Load current theme and check if it is Pitchfork or a Pitchfork Child
	 */
	$theme_data = wp_get_theme();
	$pitchfork_theme = ( 'pitchfork' === $theme_data->get( 'TextDomain' ) || 'pitchfork' === $theme_data->get( 'Template' ) );

	// Register these blocks only if not using Pitchfork
	// Pitchfork already has these blocks
	if ( $pitchfork_theme ) {
		register_block_type( __DIR__ . '/build/hero' );
	}

	register_block_type(__DIR__ . '/build/anchor-menu');
	register_block_type(__DIR__ . '/build/asu-careers');
	register_block_type(__DIR__ . '/build/events-grid');
	register_block_type(__DIR__ . '/build/image-gallery');
	register_block_type(__DIR__ . '/build/news-grid');
	register_block_type(__DIR__ . '/build/testimonial');
}
add_action('init', 'unityblocks_block_init');

wp_register_style('editor-styles-asu-career',  plugin_dir_url(__FILE__) . 'build/asu-careers/index.css');
wp_register_style('styles-asu-career',  plugin_dir_url(__FILE__) . 'build/asu-careers/style-index.css');

/**
 * Register a custom category in the Block Editor that we can use for organizing our blocks.
 */
function unityblocks_register_block_category($categories)
{
	// Adding a new category.
	$categories[] = array(
		'slug'  => 'unityblocks',
		'title' => 'KE Unity'
	);

	return $categories;
}
add_filter('block_categories_all', 'unityblocks_register_block_category');
