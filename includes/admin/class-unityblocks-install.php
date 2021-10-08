<?php
/**
 * Run on plugin install.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * UnityBlocks_Install Class
 */
class UnityBlocks_Install {

	/**
	 * Constructor
	 */
	public function __construct() {
		register_activation_hook( UNITYBLOCKS_PLUGIN_FILE, array( $this, 'register_defaults' ) );
	}

	/**
	 * Register plugin defaults.
	 */
	public function register_defaults() {
		if ( is_admin() ) {
			if ( ! get_option( 'unityblocks_date_installed' ) ) {
				add_option( 'unityblocks_date_installed', gmdate( 'Y-m-d h:i:s' ) );
			}
		}
	}
}

return new UnityBlocks_Install();
