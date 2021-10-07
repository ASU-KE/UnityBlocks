<?php

/**
 * Add links to UnityBlocks on the plugins admin page.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Generates a link.
 */
class UnityBlocks_Action_Links {


	/**
	 * Constructor
	 */
	public function __construct() {
		 add_filter( 'plugin_row_meta', array( $this, 'plugin_row_meta' ), 10, 2 );
	}

	/**
	 * Plugin row meta links
	 *
	 * @param array  $plugin_meta An array of the plugin's metadata.
	 * @param string $plugin_file Path to the plugin file.
	 * @return array $input
	 */
	public function plugin_row_meta( $plugin_meta, $plugin_file ) {

		// Check if this is defined.
		if ( ! defined( 'UNITYBLOCKS_PLUGIN_BASE' ) ) {
			define( 'UNITYBLOCKS_PLUGIN_BASE', null );
		}

		if ( UNITYBLOCKS_PLUGIN_BASE === $plugin_file ) {
			$row_meta = array(
				'review' => '<a href="' . esc_url( UNITYBLOCKS_REVIEW_URL ) . '" aria-label="' . esc_attr( __( 'Review UnityBlocks on WordPress.org', 'unityblocks' ) ) . '" target="_blank">' . __( 'Leave a Review', 'unityblocks' ) . '</a>',
			);

			$plugin_meta = array_merge( $plugin_meta, $row_meta );
		}

		return $plugin_meta;
	}
}

new UnityBlocks_Action_Links();
