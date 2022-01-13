<?php
/**
 * Load assets for our blocks.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load general assets for our blocks.
 *
 * @since 1.0.0
 */
class UnityBlocks_Block_Assets {


	/**
	 * This plugin's instance.
	 *
	 * @var UnityBlocks_Block_Assets
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 *
	 * @return UnityBlocks_Block_Assets
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new UnityBlocks_Block_Assets();
		}

		return self::$instance;
	}

	/**
	 * The Constructor.
	 */
	public function __construct() {
		add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );
		add_action( 'init', array( $this, 'editor_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_scripts' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'frontend_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_scripts' ) );
		add_action( 'save_post_wp_template_part', array( $this, 'clear_template_transients' ) );
	}

	/**
	 * Loads the asset file for the given script or style.
	 * Returns a default if the asset file is not found.
	 *
	 * @param string $filepath The name of the file without the extension.
	 *
	 * @return array The asset file contents.
	 */
	public function get_asset_file( $filepath ) {
		$asset_path = UNITYBLOCKS_PLUGIN_DIR . $filepath . '.asset.php';

		return file_exists( $asset_path )
			? include $asset_path
			: array(
				'dependencies' => array(),
				'version'      => UNITYBLOCKS_VERSION,
			);
	}

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function block_assets() {
		global $post;

		// Only load the frontend CSS if a UnityBlock is in use.
		$has_unityblock = ! is_singular();

		if ( ! is_admin() && is_singular() ) {
			$wp_post = get_post( $post );

			// This is similar to has_block() in core, but will match anything
			// in the unityblocks/* namespace.
			if ( $wp_post instanceof WP_Post ) {

				$has_unityblock = $this->has_unityblocks_block( $wp_post );

			}

			$unityblocks_template_part_query = get_transient( 'unityblocks_template_parts_query' );

			if ( false === $unityblocks_template_part_query ) {

				// Determine if template parts contain any unityblocks/* namespace.
				$unityblocks_template_part_query = get_posts(
					array(
						'post_type'      => 'wp_template_part',
						'posts_per_page' => -1,
					)
				);

				set_transient( 'unityblocks_template_parts_query', $unityblocks_template_part_query, WEEK_IN_SECONDS );

			}

			if ( ! $has_unityblock && ! empty( $unityblocks_template_part_query ) ) {

				foreach ( $unityblocks_template_part_query as $template_part ) {

					if ( $this->has_unityblocks_block( $template_part ) ) {

						$has_unityblock = true;

					}
				}
			}
		}

		if ( ! $has_unityblock && ! $this->is_page_gutenberg() ) {
			return;
		}

		// Styles.
		$name       = 'unityblocks-style';
		$filepath   = 'dist/' . $name;
		$asset_file = $this->get_asset_file( $filepath );

		wp_enqueue_style(
			'unityblocks-frontend',
			UNITYBLOCKS_PLUGIN_URL . $filepath . '.css',
			array(),
			$asset_file['version']
		);
	}

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function editor_assets() {
		// Styles.
		$name       = 'unityblocks-editor';
		$filepath   = 'dist/' . $name;
		$asset_file = $this->get_asset_file( $filepath );

		wp_register_style(
			'unityblocks-editor',
			UNITYBLOCKS_PLUGIN_URL . $filepath . '.css',
			array(),
			$asset_file['version']
		);

		// Scripts.
		$name       = 'unityblocks'; // unityblocks.js.
		$filepath   = 'dist/' . $name;
		$asset_file = $this->get_asset_file( $filepath );

		wp_register_script(
			'unityblocks-editor',
			UNITYBLOCKS_PLUGIN_URL . $filepath . '.js',
			array_merge( $asset_file['dependencies'], array( 'wp-api' ) ),
			$asset_file['version'],
			true
		);
	}

	/**
	 * Enqueue front-end assets for blocks.
	 *
	 * @access public
	 * @since 1.9.5
	 */
	public function frontend_scripts() {

		// Define where the asset is loaded from.
		$dir_url  = UnityBlocks()->asset_source( 'js' );
		$dir_path = plugin_dir_path( dirname( __FILE__ ) ) . 'dist/js/';

		// Define where the vendor assets are loaded from.
		$vendors_url  = UnityBlocks()->asset_source( 'js', 'vendors' );
		$vendors_path = plugin_dir_path( dirname( __FILE__ ) ) . 'dist/js/vendors/';

		require_once UNITYBLOCKS_PLUGIN_DIR . 'includes/enqueue-blocks/anchor-menu.php';

	}

	/**
	 * Clear transient when wp_template_part is saved/updated
	 *
	 * @access public
	 * @since  2.14.2
	 */
	public function clear_template_transients() {

		delete_transient( 'unityblocks_template_parts_query' );

	}

	/**
	 * Determine if the given post content contains any UnityBlocks blocks
	 *
	 * @access public
	 * @since  2.14.2
	 * @param  WP_Post $post_object Post object.
	 *
	 * @return boolean True when post content contains a UnityBlocks block.
	 */
	public function has_unityblocks_block( WP_Post $post_object ) {

		return ! empty(
			array_filter(
				array(
					false !== strpos( $post_object->post_content, '<!-- wp:unityblocks/' ),
					has_block( 'core/block', $post_object ),
					has_block( 'core/button', $post_object ),
					has_block( 'core/cover', $post_object ),
					has_block( 'core/heading', $post_object ),
					has_block( 'core/image', $post_object ),
					has_block( 'core/gallery', $post_object ),
					has_block( 'core/list', $post_object ),
					has_block( 'core/paragraph', $post_object ),
					has_block( 'core/pullquote', $post_object ),
					has_block( 'core/quote', $post_object ),
				)
			)
		);

	}

	/**
	 * Enqueue editor scripts for blocks.
	 *
	 * @access public
	 * @since 1.9.5
	 */
	public function editor_scripts() {
		/*
		 * Disabled block until needed later.

		// Define where the vendor asset is loaded from.
		$vendors_dir = UnityBlocks()->asset_source( 'js', 'vendors' );

		// Required by the events block.
		wp_enqueue_script(
		'unityblocks-slick',
		$vendors_dir . '/slick.js',
		array( 'jquery' ),
		UNITYBLOCKS_VERSION,
		true
		);
		*/
	}

	/**
	 * Return whether a post type should display the Block Editor.
	 *
	 * @param string $post_type The post_type slug to check.
	 */
	protected function is_post_type_gutenberg( $post_type ) {
		return use_block_editor_for_post_type( $post_type );
	}

	/**
	 * Return whether the page we are on is loading the Block Editor.
	 */
	protected function is_page_gutenberg() {
		if ( ! is_admin() ) {
			return false;
		}

		$admin_page = wp_basename( esc_url( $_SERVER['REQUEST_URI'] ) );

		if ( false !== strpos( $admin_page, 'post-new.php' ) && empty( $_GET['post_type'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			return true;
		}

		if ( false !== strpos( $admin_page, 'post-new.php' ) && isset( $_GET['post_type'] ) && $this->is_post_type_gutenberg( $_GET['post_type'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			return true;
		}

		if ( false !== strpos( $admin_page, 'post.php' ) ) {
			$wp_post = get_post( $_GET['post'] ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			if ( isset( $wp_post ) && isset( $wp_post->post_type ) && $this->is_post_type_gutenberg( $wp_post->post_type ) ) {
				return true;
			}
		}

		if ( false !== strpos( $admin_page, 'revision.php' ) ) {
			$wp_post     = get_post( $_GET['revision'] ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$post_parent = get_post( $wp_post->post_parent );
			if ( isset( $post_parent ) && isset( $post_parent->post_type ) && $this->is_post_type_gutenberg( $post_parent->post_type ) ) {
				return true;
			}
		}
		return false;
	}
}

UnityBlocks_Block_Assets::register();
