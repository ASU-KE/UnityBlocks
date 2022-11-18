<?php

/**
 * Enqueue the frontend scripts for the Anchor Menu block.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

if ($this->is_page_gutenberg() || has_block('unityblocks/anchor-menu')) {
	$unityblocks_anchormenu_file    = $dir_url . 'unityblocks-anchormenu.js';
	$unityblocks_anchormenu_version = UNITYBLOCKS_VERSION . '.' . filemtime($dir_path . 'unityblocks-anchormenu.js');

	wp_enqueue_script(
		'unityblocks-anchormenu',
		$unityblocks_anchormenu_file,
		array('wp-element', 'wp-components'),
		$unityblocks_anchormenu_version,
		true
	);
}

if ($this->is_page_gutenberg() || has_block('unityblocks/hero')) {
	$unityblocks_hero_file    = $dir_url . 'unityblocks-hero.js';
	$unityblocks_hero_version = UNITYBLOCKS_VERSION . '.' . filemtime($dir_path . 'unityblocks-hero.js');

	wp_enqueue_script(
		'unityblocks-hero',
		$unityblocks_hero_file,
		array('wp-element', 'wp-components'),
		$unityblocks_hero_version,
		true
	);
}

if ($this->is_page_gutenberg() || has_block('unityblocks/testimonial')) {
	$unityblocks_testimonial_file    = $dir_url . 'unityblocks-testimonial.js';
	$unityblocks_testimonial_version = UNITYBLOCKS_VERSION . '.' . filemtime($dir_path . 'unityblocks-testimonial.js');

	wp_enqueue_script(
		'unityblocks-testimonial',
		$unityblocks_testimonial_file,
		array('wp-element', 'wp-components'),
		$unityblocks_testimonial_version,
		true
	);
}

if ($this->is_page_gutenberg() || has_block('unityblocks/brassring')) {
	$unityblocks_brassring_file    = $dir_url . 'unityblocks-brassring.js';
	$unityblocks_brassring_version = UNITYBLOCKS_VERSION . '.' . filemtime($dir_path . 'unityblocks-brassring.js');

	wp_enqueue_script(
		'unityblocks-brassring',
		$unityblocks_brassring_file,
		array('wp-element', 'wp-components'),
		$unityblocks_brassring_version,
		true
	);
}
