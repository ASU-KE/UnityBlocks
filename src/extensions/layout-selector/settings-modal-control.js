/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import UnityBlocksSettingsToggleControl from '../unityblocks-settings/unityblocks-settings-toggle-control';
import { LAYOUT_SELECTOR_FEATURE_ENABLED_KEY } from './constants';

registerPlugin( 'unityblocks-layout-selector-control', {
	render: () =>
		applyFilters( 'unityblocks-show-layout-selector', true ) && (
			<UnityBlocksSettingsToggleControl
				settingsKey={ LAYOUT_SELECTOR_FEATURE_ENABLED_KEY }
				label={ __( 'Layout selector', 'unityblocks' ) }
				help={ __(
					'Allow layout selection on new pages',
					'unityblocks'
				) }
			/>
		),
} );
