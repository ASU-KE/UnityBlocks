<?php

/**
 * Test includes/admin/class-unityblocks-action-links.php
 *
 * @package UnityBlocks
 */
class UnityBlocks_Action_Links_Tests extends WP_UnitTestCase
{

	private $unityblocks_action_links;

	public function setUp()
	{

		parent::setUp();

		set_current_screen('dashboard');

		include_once UNITYBLOCKS_PLUGIN_DIR . 'includes/admin/class-unityblocks-action-links.php';

		$this->unityblocks_action_links = new UnityBlocks_Action_Links();
	}

	public function tearDown()
	{

		parent::tearDown();

		unset($GLOBALS['current_screen']);
	}

	/**
	 * Test the constructor actions
	 */
	public function test_construct_actions()
	{

		$actions = [
			['plugin_row_meta', 'plugin_row_meta', 10],
		];

		foreach ($actions as $action_data) {

			$priority = isset($action_data[2]) ? $action_data[2] : 10;

			if (!has_action($action_data[0], [$this->unityblocks_action_links, $action_data[1]])) {

				$this->fail("$action_data[0] is not attached to UnityBlocks:$action_data[1]. It might also have the wrong priority (validated priority: $priority)");
			}
		}

		$this->assertTrue(true);
	}

	/**
	 * Test plugin row meta is not appended to non UnityBlocks plugins
	 */
	public function test_plugin_row_meta_non_unityblocks()
	{

		$this->assertFalse(array_key_exists('review', $this->unityblocks_action_links->plugin_row_meta([], 'some-plugin')));
	}

	/**
	 * Test UnityBlocks plugin row meta
	 */
	public function test_plugin_row_meta()
	{

		$this->assertTrue(array_key_exists('review', $this->unityblocks_action_links->plugin_row_meta([], UNITYBLOCKS_PLUGIN_BASE)));
	}
}
