/**
 * WordPress dependencies
 */
import { CheckboxControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import UnityBlocksSettingsModalControl from './unityblocks-settings-slot';

function UnityBlocksSettingsToggleControl( { label, help, settingsKey } ) {
	const [ setting, saveSetting ] = useEntityProp(
		'root',
		'site',
		settingsKey
	);

	return (
		<UnityBlocksSettingsModalControl>
			<CheckboxControl
				label={ label }
				help={ help }
				checked={ !! setting }
				onChange={ saveSetting }
			/>
		</UnityBlocksSettingsModalControl>
	);
}

export default UnityBlocksSettingsToggleControl;
