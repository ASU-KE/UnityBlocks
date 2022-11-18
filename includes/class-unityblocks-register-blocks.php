<?php

/**
 * Register blocks.
 *
 * @package UnityBlocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Load registration for our blocks.
 *
 * @since 1.6.0
 */
class UnityBlocks_Register_Blocks
{


	/**
	 * This plugin's instance.
	 *
	 * @var UnityBlocks_Register_Blocks
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 *
	 * @return UnityBlocks_Register_Blocks
	 */
	public static function register()
	{
		if (null === self::$instance) {
			self::$instance = new UnityBlocks_Register_Blocks();
		}

		return self::$instance;
	}

	/**
	 * The Plugin slug.
	 *
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The Constructor.
	 */
	public function __construct()
	{
		$this->slug = 'unityblocks';

		add_action('init', array($this, 'register_blocks'), 99);
	}

	/**
	 * Add actions to enqueue assets.
	 *
	 * @access public
	 */
	public function register_blocks()
	{

		// Return early if this function does not exist.
		if (!function_exists('register_block_type')) {
			return;
		}

		// Shortcut for the slug.
		$slug = $this->slug;

		register_block_type(
			$slug . '/anchor-menu',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);

		register_block_type(
			$slug . '/hero',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);

		register_block_type(
			$slug . '/events-grid',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);

		register_block_type(
			$slug . '/events-list',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);

		register_block_type(
			$slug . '/image-gallery',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);

		register_block_type(
			$slug . '/news-carousel',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);

		register_block_type(
			$slug . '/news-grid',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);

		register_block_type(
			$slug . '/news-list',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);

		register_block_type(
			$slug . '/testimonial',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);

		register_block_type(
			$slug . '/brassring',
			array(
				'editor_script' => $slug . '-editor',
				'editor_style'  => $slug . '-editor',
				'style'         => $slug . '-frontend',
			)
		);
	}
}

UnityBlocks_Register_Blocks::register();
