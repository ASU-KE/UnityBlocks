<?php
/**
 * Plugin Name:       UnityBlocks
 * Description:       UnityBlocks is a suite of page building content blocks for the ASU Web Standards Unity (UDS) WordPress theme.
 * Author:            ASU KE Web Services
 * Author URI:        https://rto.asu.edu/web-services
 * Version:           1.8.0
 * Text Domain:       unityblocks
 * Domain Path:       /languages
 * Requires at least: 5.8
 * Requires PHP:      7.0
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'UNITYBLOCKS_VERSION', '1.8.0' );
define( 'UNITYBLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'UNITYBLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'UNITYBLOCKS_PLUGIN_FILE', __FILE__ );
define( 'UNITYBLOCKS_PLUGIN_BASE', plugin_basename( __FILE__ ) );

if ( ! class_exists( 'UnityBlocks' ) ) :
	/**
	 * Main UnityBlocks Class.
	 *
	 * @since 1.0.0
	 */
	final class UnityBlocks {




		/**
		 * This plugin's instance.
		 *
		 * @var UnityBlocks
		 * @since 1.0.0
		 */
		private static $instance;

		/**
		 * Main UnityBlocks Instance.
		 *
		 * Insures that only one instance of UnityBlocks exists in memory at any one
		 * time. Also prevents needing to define globals all over the place.
		 *
		 * @since 1.0.0
		 * @static
		 * @return object|UnityBlocks The one true UnityBlocks
		 */
		public static function instance() {
			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof UnityBlocks ) ) {
				self::$instance = new UnityBlocks();
				self::$instance->init();
				self::$instance->includes();
			}
			return self::$instance;
		}

		/**
		 * Throw error on object clone.
		 *
		 * The whole idea of the singleton design pattern is that there is a single
		 * object therefore, we don't want the object to be cloned.
		 *
		 * @since 1.0.0
		 * @access protected
		 * @return void
		 */
		public function __clone() {
			// Cloning instances of the class is forbidden.
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Something went wrong.', 'unityblocks' ), '1.0' );
		}

		/**
		 * Disable unserializing of the class.
		 *
		 * @since 1.0.0
		 * @access protected
		 * @return void
		 */
		public function __wakeup() {
			// Unserializing instances of the class is forbidden.
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Something went wrong.', 'unityblocks' ), '1.0' );
		}

		/**
		 * Include required files.
		 *
		 * @access private
		 * @since 1.0.0
		 * @return void
		 */
		private function includes() {
			require_once UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-block-assets.php';
			require_once UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-register-blocks.php';
			require_once UNITYBLOCKS_PLUGIN_DIR . 'includes/get-dynamic-blocks.php';

			if ( is_admin() || ( defined( 'WP_CLI' ) && WP_CLI ) ) {
				require_once UNITYBLOCKS_PLUGIN_DIR . 'includes/admin/class-unityblocks-install.php';
			}
		}

		/**
		 * Load actions
		 *
		 * @return void
		 */
		private function init() {
			add_action( 'plugins_loaded', array( $this, 'load_textdomain' ), 99 );
			add_action( 'enqueue_block_editor_assets', array( $this, 'block_localization' ) );
		}

		/**
		 * If debug is on, serve unminified source assets.
		 *
		 * @since 1.0.0
		 * @param string|string $type The type of resource.
		 * @param string|string $directory Any extra directories needed.
		 */
		public function asset_source( $type = 'js', $directory = null ) {
			if ( 'js' === $type ) {
				return UNITYBLOCKS_PLUGIN_URL . 'dist/' . $type . '/' . $directory;
			} else {
				return UNITYBLOCKS_PLUGIN_URL . 'dist/css/' . $directory;
			}
		}

		/**
		 * Loads the plugin language files.
		 *
		 * @access public
		 * @since 1.0.0
		 * @return void
		 */
		public function load_textdomain() {
			load_plugin_textdomain( 'unityblocks', false, basename( UNITYBLOCKS_PLUGIN_DIR ) . '/languages' );
		}

		/**
		 * Enqueue localization data for our blocks.
		 *
		 * @access public
		 */
		public function block_localization() {
			if ( function_exists( 'wp_set_script_translations' ) ) {
				wp_set_script_translations( 'unityblocks-editor', 'unityblocks', UNITYBLOCKS_PLUGIN_DIR . '/languages' );
			}
		}
	}
endif;

/**
 * The main function for that returns UnityBlocks
 *
 * The main function responsible for returning the one true UnityBlocks
 * Instance to functions everywhere.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * Example: <?php $unityblocks = UnityBlocks(); ?>
 *
 * @since 1.0.0
 * @return object|UnityBlocks The one true UnityBlocks Instance.
 */
function unityblocks() {
	return UnityBlocks::instance();
}

// Get the plugin running. Load on plugins_loaded action to avoid issue on multisite.
if ( function_exists( 'is_multisite' ) && is_multisite() ) {
	add_action( 'plugins_loaded', 'unityblocks', 90 );
} else {
	unityblocks();
}
