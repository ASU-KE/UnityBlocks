<?php

/**
 * Test includes/class-unityblocks-register-blocks.php
 *
 * @package UnityBlocks
 */
class UnityBlocks_Register_Blocks_Tests extends WP_UnitTestCase
{

	private $unityblocks_register_blocks;

	public function setUp()
	{

		parent::setUp();

		set_current_screen('dashboard');

		$this->unityblocks_register_blocks = new UnityBlocks_Register_Blocks();
	}

	public function tearDown()
	{

		parent::tearDown();

		unset($GLOBALS['current_screen']);
	}

	/**
	 * Test the register method
	 */
	public function test_register()
	{

		$reflection     = new ReflectionClass($this->unityblocks_register_blocks);
		$new_reflection = new UnityBlocks_Register_Blocks();

		$instance = $reflection->getProperty('instance');
		$instance->setAccessible(true);
		$instance->setValue(null, null);

		$new_reflection::register();

		$this->assertTrue(is_a($instance->getValue('instance'), 'UnityBlocks_Register_Blocks'));
	}

	/**
	 * Test the constructor properties
	 */
	public function test_construct_properties()
	{

		$reflection     = new ReflectionClass($this->unityblocks_register_blocks);
		$new_reflection = new UnityBlocks_Register_Blocks();

		$expected = [
			'slug' => 'unityblocks',
		];

		$slug = $reflection->getProperty('slug');

		$slug->setAccessible(true);

		$check = [
			'slug' => $slug->getValue($new_reflection),
		];

		$this->assertEquals($expected, $check);
	}

	/**
	 * Test the constructor actions
	 */
	public function test_construct_actions()
	{

		$actions = [
			['init', 'register_blocks', 99],
		];

		foreach ($actions as $action_data) {

			$priority = isset($action_data[2]) ? $action_data[2] : 10;

			if (!has_action($action_data[0], [$this->unityblocks_register_blocks, $action_data[1]])) {

				$this->fail("$action_data[0] is not attached to UnityBlocks:$action_data[1]. It might also have the wrong priority (validated priority: $priority)");
			}
		}

		$this->assertTrue(true);
	}

	/**
	 * Test UnityBlocks blocks are register correctly
	 *
	 * @expectedIncorrectUsage WP_Block_Type_Registry::register
	 */
	public function test_register_blocks()
	{

		$this->unityblocks_register_blocks->register_blocks();

		$expected_registered_blocks = [
			// 'unityblocks/accordion',
			// 'unityblocks/alert',
		];

		$registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

		foreach ($expected_registered_blocks as $unityblocks_block) {

			if (!array_key_exists($unityblocks_block, $registered_blocks)) {

				$this->fail("$unityblocks_block is not registered.");
			}
		}

		$this->assertTrue(true);
	}
}
