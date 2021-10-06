<?php

/**
 * Test class-unityblocks.php
 *
 * @package UnityBlocks
 */
class UnityBlocks_Tests extends WP_UnitTestCase
{

	public function setUp()
	{

		parent::setUp();

		set_current_screen('dashboard');

		$reflection = new ReflectionClass(new UnityBlocks());
		$instance   = $reflection->getProperty('instance');

		$instance->setAccessible(true);
		$instance->setValue(null, null);
		$instance->setAccessible(false);

		do_action('plugins_loaded');
	}

	public function tearDown()
	{

		parent::tearDown();

		unset($GLOBALS['current_screen']);
	}

	public function test_unityblocks()
	{

		$this->assertTrue(is_a(unityblocks(), 'UnityBlocks'));
	}

	/**
	 * Test the clone function
	 *
	 * @expectedIncorrectUsage __clone
	 */
	public function test_clone()
	{

		clone unityblocks();
	}

	/**
	 * Test the wakeup function
	 *
	 * @expectedIncorrectUsage __wakeup
	 */
	public function test_wakeup()
	{

		unserialize(serialize(unityblocks()));
	}

	/**
	 * Assert the plugin data returns what is expected
	 */
	public function test_constants()
	{

		$reflection_method = new ReflectionMethod('UnityBlocks', 'instance');

		$reflection_method->invoke(unityblocks());

		$expected = [
			'version' => '2.17.0',
			'plugin_dir'  => str_replace('.dev/tests/phpunit/', '', plugin_dir_path(__FILE__)),
			'plugin_url'  => str_replace('.dev/tests/phpunit/', '', plugin_dir_url(__FILE__)),
			'plugin_file' => str_replace('.dev/tests/phpunit/test-class-unityblocks.php', 'class-unityblocks.php', __FILE__),
			'plugin_base' => str_replace('.dev/tests/phpunit/test-class-unityblocks.php', 'class-unityblocks.php', plugin_basename(__FILE__)),
		];

		$check = [
			'version'     => UNITYBLOCKS_VERSION,
			'plugin_dir'  => UNITYBLOCKS_PLUGIN_DIR,
			'plugin_url'  => UNITYBLOCKS_PLUGIN_URL,
			'plugin_file' => UNITYBLOCKS_PLUGIN_FILE,
			'plugin_base' => UNITYBLOCKS_PLUGIN_BASE,
		];

		$this->assertEquals($expected, $check);
	}

	/**
	 * Test core plugin files were included
	 */
	public function test_included_files()
	{

		$check_files = [
			UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-block-assets.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-register-blocks.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-generated-styles.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-body-classes.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-form.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-font-loader.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-post-meta.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-google-map-block.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/class-unityblocks-accordion-ie-support.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/get-dynamic-blocks.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/admin/class-unityblocks-action-links.php',
			UNITYBLOCKS_PLUGIN_DIR . 'includes/admin/class-unityblocks-install.php',
		];

		$this->assertTrue(!empty(array_intersect($check_files, get_included_files())));
	}

	/**
	 * The the init actions are called
	 */
	public function test_init_actions()
	{

		$actions = [
			['plugins_loaded', 'load_textdomain', 99],
			['enqueue_block_editor_assets', 'block_localization'],
		];

		foreach ($actions as $action_data) {

			$priority = isset($action_data[2]) ? $action_data[2] : 10;

			if (!has_action($action_data[0], [unityblocks(), $action_data[1]])) {

				$this->fail("$action_data[0] is not attached to UnityBlocks:$action_data[1]. It might also have the wrong priority (validated priority: $priority)");
			}
		}

		$this->assertTrue(true);
	}

	/**
	 * Test the asset source directory for js assets
	 */
	public function test_js_asset_source()
	{

		$this->assertRegexp('/\/unityblocks\/dist\/js\//', unityblocks()->asset_source('js'));
	}

	/**
	 * Test the asset source directory for css assets
	 */
	public function test_css_asset_source()
	{

		$this->assertRegexp('/\/unityblocks\/dist\/css\//', unityblocks()->asset_source('css'));
	}

	/**
	 * Test the asset source directory for css assets
	 */
	public function test_custom_css_asset_source()
	{

		$this->assertRegexp('/\/unityblocks\/dist\/css\/custom/', unityblocks()->asset_source('css', 'custom'));
	}

	/**
	 * Test the text domain loads correctly
	 */
	public function test_text_domain()
	{

		$this->markTestSkipped('Todo: Write tests for text domain.');
	}

	/**
	 * Test all expected final build assets exist
	 */
	public function test_final_build_assets_exist()
	{

		$expected_assets = [
			'js'  => [
				'dist/unityblocks.js',
			],
			'css' => [
				'dist/unityblocks-editor.css',
				'dist/unityblocks-style.css',
			],
		];

		foreach ($expected_assets as $asset_type => $assets) {

			foreach ($assets as $path_to_asset) {

				$minfied_asset_string = (false !== strpos($path_to_asset, 'dist/')) ? 'Minified' : 'Unminified';

				$this->assertTrue(
					file_exists(UNITYBLOCKS_PLUGIN_DIR . $path_to_asset),
					"${minfied_asset_string} ${asset_type} asset not found: " . UNITYBLOCKS_PLUGIN_DIR . "${path_to_asset}"
				);
			}
		}
	}
}
