<?php
/**
 * Load assets and meta for Google Map Block
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load assets and settings for the Google Map block.
 *
 * @since 1.0.0
 */
class UnityBlocks_Google_Map_Block {


	/**
	 * This plugin's instance.
	 *
	 * @var UnityBlocks_Google_Map_Block
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 *
	 * @return UnityBlocks_Google_Map_Block
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new UnityBlocks_Google_Map_Block();
		}

		return self::$instance;
	}

	/**
	 * The base URL path (without trailing slash).
	 *
	 * @var string $url
	 */
	private $url;

	/**
	 * The Plugin slug.
	 *
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The Constructor.
	 */
	public function __construct() {
		$this->slug = 'unityblocks';
		$this->url  = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		add_action( 'wp_enqueue_scripts', array( $this, 'map_assets' ) );
		add_action( 'the_post', array( $this, 'map_assets' ) );
		add_action( 'init', array( $this, 'register_settings' ) );
	}

	/**
	 * Enqueue front-end assets for blocks.
	 *
	 * @access public
	 */
	public function map_assets() {

		// Retrieve the Google Maps API key.
		$key = get_option( 'unityblocks_google_maps_api_key' );

		// Define where the asset is loaded from.
		$dir = UnityBlocks()->asset_source( 'js' );

		// Determine whether a $post contains a Map block.
		if ( has_block( 'unityblocks/map' ) && $key ) {

			wp_enqueue_script(
				$this->slug . '-google-maps',
				$dir . $this->slug . '-google-maps.js',
				array( 'jquery' ),
				UNITYBLOCKS_VERSION,
				true
			);

			if ( ! is_admin() ) {

				$locale = explode( '_', get_locale() );

				wp_enqueue_script(
					$this->slug . '-google-maps-api',
					'https://maps.googleapis.com/maps/api/js?key=' . esc_attr( $key ) . '&language=' . esc_attr( $locale[0] ),
					array( $this->slug . '-google-maps' ),
					UNITYBLOCKS_VERSION,
					true
				);

			}

			wp_localize_script( $this->slug . '-google-maps', 'unityblocksGoogleMaps', array( 'url' => $this->url ) );
		}
	}

	/**
	 * Register block settings.
	 *
	 * @access public
	 */
	public function register_settings() {
		register_setting(
			'unityblocks_google_maps_api_key',
			'unityblocks_google_maps_api_key',
			array(
				'type'              => 'string',
				'description'       => __( 'Google Map API key for map rendering', 'unityblocks' ),
				'sanitize_callback' => 'sanitize_text_field',
				'show_in_rest'      => true,
				'default'           => '',
			)
		);
	}

}

UnityBlocks_Google_Map_Block::register();
