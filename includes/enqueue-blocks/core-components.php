<?php
/**
 * Enqueue the frontend scripts for the Anchor Menu block.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

// Enqueue Core Components library.
if (
    $this->is_page_gutenberg()
    || has_block('unityblocks/anchor-menu')
    // || has_block('unityblocks/hero')
    // || has_block('unityblocks/testimonial')

) {
    $unityblocks_core_file    = $vendors_url . '/libCore.umd.js';
    $unityblocks_core_version = UNITYBLOCKS_VERSION . '.' . filemtime($vendors_path . 'libCore.umd.js');

    wp_enqueue_script(
        'unity-core',
        $unityblocks_core_file,
        array( 'wp-element', 'wp-components' ),
        $unityblocks_core_version,
        true
    );
}

if ($this->is_page_gutenberg() || has_block('unityblocks/anchor-menu')) {
    $unityblocks_anchormenu_file    = $dir_url . 'unityblocks-anchormenu.js';
    $unityblocks_anchormenu_version = UNITYBLOCKS_VERSION . '.' . filemtime($dir_path . 'unityblocks-anchormenu.js');

    wp_enqueue_script(
        'unityblocks-anchormenu',
        $unityblocks_anchormenu_file,
        array( 'wp-element', 'wp-components' ),
        $unityblocks_anchormenu_version,
        true
    );
}
