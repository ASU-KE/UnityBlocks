<?php

/**
 * Register post meta.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * UnityBlocks_Post_Meta Class
 *
 * @since 1.6.0
 */
class UnityBlocks_Post_Meta {


	/**
	 * Constructor
	 */
	public function __construct() {
		 add_filter( 'init', array( $this, 'register_meta' ) );
	}

	/**
	 * Register meta.
	 */
	public function register_meta() {
		register_meta(
			'post',
			'_unityblocks_attr',
			array(
				'show_in_rest'  => true,
				'single'        => true,
				'auth_callback' => array( $this, 'auth_callback' ),
			)
		);

		register_meta(
			'post',
			'_unityblocks_dimensions',
			array(
				'show_in_rest'  => true,
				'single'        => true,
				'auth_callback' => array( $this, 'auth_callback' ),
			)
		);

		register_meta(
			'post',
			'_unityblocks_responsive_height',
			array(
				'show_in_rest'  => true,
				'single'        => true,
				'auth_callback' => array( $this, 'auth_callback' ),
			)
		);

		register_meta(
			'post',
			'_unityblocks_accordion_ie_support',
			array(
				'show_in_rest'  => true,
				'single'        => true,
				'auth_callback' => array( $this, 'auth_callback' ),
			)
		);
	}

	/**
	 * Determine if the current user can edit posts
	 *
	 * @return bool True when can edit posts, else false.
	 */
	public function auth_callback() {
		return current_user_can( 'edit_posts' );
	}
}

return new UnityBlocks_Post_Meta();
