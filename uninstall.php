<?php

/**
 * UnityBlocks Uninstall
 *
 * @package UnityBlocks
 */

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {

	die;
}

$unityblocks_options = array(
	'unityblocks_settings_api',
	'unityblocks_plugin_feedback_activation_date',
	'unityblocks_date_installed',
	'unityblocks_plugin_feedback_no_bug',
);

foreach ( $unityblocks_options as $unityblocks_option ) {

	delete_option( $unityblocks_option );
}
