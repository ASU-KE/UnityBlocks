<?php

/**
 * Test includes/admin/class-unityblocks-install.php
 *
 * @package UnityBlocks
 */
class UnityBlocks_Install_Tests extends WP_UnitTestCase
{

	private $unityblocks_install;

	public function setUp()
	{

		parent::setUp();

		include_once UNITYBLOCKS_PLUGIN_DIR . 'includes/admin/class-unityblocks-install.php';

		$this->unityblocks_install = new UnityBlocks_Install();

		set_current_screen('edit-post');
	}

	public function tearDown()
	{

		parent::tearDown();

		unset($GLOBALS['current_screen']);
	}

	/**
	 * Test that the default options are registered when the plugin is activated
	 */
	public function test_register_defaults()
	{

		delete_option('unityblocks_date_installed');

		$this->unityblocks_install->register_defaults();

		$this->assertTrue(!empty(get_option('unityblocks_date_installed')));
	}
}
