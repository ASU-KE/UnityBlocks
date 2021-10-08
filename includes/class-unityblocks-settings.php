<?php
/**
 * Register UnityBlocks Settings
 *
 * @package   @@pkg.title
 * @author    @@pkg.author
 * @link      @@pkg.author_uri
 * @license   @@pkg.license
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main @@pkg.title Class
 *
 * @since 2.0.0
 */
class UnityBlocks_Settings {
	/**
	 * This plugin's instance.
	 *
	 * @var UnityBlocks_Settings
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 *
	 * @return UnityBlocks_Settings
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new UnityBlocks_Settings();
		}

		return self::$instance;
	}

	/**
	 * The Constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_settings' ) );
		add_action( 'init', array( $this, 'unityblocks_settings_assets' ) );
		add_action( 'wp_loaded', array( $this, 'unityblocks_feature_propagation' ) );
	}

	/**
	 * Localize UnityBlock Settings Status UnityBlocks settings.
	 *
	 * @access public
	 */
	public function unityblocks_settings_assets() {
		wp_localize_script(
			'unityblocks-editor',
			'unityblocksSettings',
			array(
				'unityblocksSettingsEnabled' => (bool) apply_filters( 'unityblocks_show_settings_panel', true ),
			)
		);
	}

	/**
	 * Propagate UnityBlocks settings to editor.
	 *
	 * @access public
	 */
	public function unityblocks_feature_propagation() {
		if ( ! get_option( 'unityblocks_custom_colors_controls_enabled' ) ) {
			add_theme_support( 'disable-custom-colors' );
		}

		if ( ! get_option( 'unityblocks_gradient_presets_enabled' ) ) {
			add_theme_support( 'editor-gradient-presets', array() );
			add_theme_support( 'disable-custom-gradients' );

			// 5.7.2 support
			add_theme_support( '__experimental-editor-gradient-presets', array() );
			add_theme_support( '__experimental-disable-custom-gradients', true );
		}

		if ( ! get_option( 'unityblocks_color_panel_controls_enabled' ) ) {
			add_theme_support( 'editor-color-palette', array() );
			add_theme_support( 'editor-gradient-presets', array() );
			add_theme_support( 'disable-custom-colors' );
			add_theme_support( 'disable-custom-gradients' );

			// 5.7.2 support
			add_theme_support( '__experimental-editor-gradient-presets', array() );
			add_theme_support( '__experimental-disable-custom-gradients', true );
		}
	}

	/**
	 * Register UnityBlocks settings.
	 *
	 * @access public
	 */
	public function register_settings() {
		register_setting(
			'unityblocks_layout_selector_controls_enabled',
			'unityblocks_layout_selector_controls_enabled',
			array(
				'type'              => 'boolean',
				'description'       => __( 'Setting use to disable or enable layout selector controls across the site.', 'unityblocks' ),
				'sanitize_callback' => null,
				'show_in_rest'      => true,
				'default'           => true,
			)
		);

		register_setting(
			'unityblocks_typography_controls_enabled',
			'unityblocks_typography_controls_enabled',
			array(
				'type'              => 'boolean',
				'description'       => __( 'Setting use to disable or enable typography controls across the site.', 'unityblocks' ),
				'sanitize_callback' => null,
				'show_in_rest'      => true,
				'default'           => true,
			)
		);

		register_setting(
			'unityblocks_custom_colors_controls_enabled',
			'unityblocks_custom_colors_controls_enabled',
			array(
				'type'              => 'boolean',
				'description'       => __( 'Setting use to disable or enable custom color controls across the site.', 'unityblocks' ),
				'sanitize_callback' => null,
				'show_in_rest'      => true,
				'default'           => true,
			)
		);

		register_setting(
			'unityblocks_color_panel_controls_enabled',
			'unityblocks_color_panel_controls_enabled',
			array(
				'type'              => 'boolean',
				'description'       => __( 'Setting use to disable or enable all color controls across the site.', 'unityblocks' ),
				'sanitize_callback' => null,
				'show_in_rest'      => true,
				'default'           => true,
			)
		);

		register_setting(
			'unityblocks_gradient_presets_enabled',
			'unityblocks_gradient_presets_enabled',
			array(
				'type'              => 'boolean',
				'description'       => __( 'Setting use to disable or enable gradient controls and presets across the site.', 'unityblocks' ),
				'sanitize_callback' => null,
				'show_in_rest'      => true,
				'default'           => true,
			)
		);

		register_setting(
			'unityblocks_animation_controls_enabled',
			'unityblocks_animation_controls_enabled',
			array(
				'type'              => 'boolean',
				'description'       => __( 'Setting use to disable or enable animation controls across the site.', 'unityblocks' ),
				'sanitize_callback' => null,
				'show_in_rest'      => true,
				'default'           => true,
			)
		);

	}
}

UnityBlocks_Settings::register();
