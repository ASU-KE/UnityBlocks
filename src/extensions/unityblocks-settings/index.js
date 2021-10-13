/* eslint-disable jsdoc/check-alignment */
/*global unityblocksSettings*/

/**
 * Styles
 */
import './styles/style.scss';

/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element';
import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { useDispatch } from '@wordpress/data';
import {
	registerPlugin,
	getPlugin,
	unregisterPlugin,
} from '@wordpress/plugins';
import { Modal } from '@wordpress/components';

/**
 * Internal dependencies
 */
import UnityBlocksSettingsModalControl from './unityblocks-settings-slot';

export default function UnityBlocksSettings() {
	const [ isOpen, setOpen ] = useState( false );

	// Detect and save settings when closing the modal (make the API POST request).
	const { saveEditedEntityRecord } = useDispatch( 'core' );

	const openModal = () => setOpen( true );
	const closeModal = () => {
		setOpen( false );
		// Save settings entities when closing the modal.
		saveEditedEntityRecord( 'root', 'site' );
	};

	return (
		<Fragment>
			<PluginMoreMenuItem onClick={ openModal }>
				{ __( 'Editor settings', 'unityblocks' ) }
			</PluginMoreMenuItem>

			{ isOpen && (
				<Modal
					className="unityblocks-settings-modal"
					title={ __( 'Editor settings', 'unityblocks' ) }
					closeLabel={ __( 'Close', 'unityblocks' ) }
					onRequestClose={ closeModal }
					shouldCloseOnClickOutside={ false }
				>
					<section className="edit-post-preferences-modal__section">
						<h2 className="edit-post-preferences-modal__section-title">
							{ __( 'General' ) }
						</h2>

						<UnityBlocksSettingsModalControl.Slot>
							{ /**
							 * Override with your implementation:
							 *
							 * import { registerPlugin } from '@wordpress/plugins';
							 * import { UnityBlocksSettingsModalControl } from './unityblocks-settings-slot';
							 * import { UnityBlocksSettingsToggleControl } from './unityblocks-settings-toggle-control';
							 *
							 * registerPlugin( 'your-settings-modal-control', {
							 *     render: () => (
							 *         <UnityBlocksSettingsModalControl>
							 *             <UnityBlocksSettingsToggleControl
							 *                 settingsKey="name_of_wordpress_setting"
							 *                 label={ __( 'The toggle control label', 'unityblocks' ) }
							 *                 help={ __( 'The toggle control help text', 'unityblocks' ) }
							 *             />
							 *         </UnityBlocksSettingsModalControl>
							 *     ),
							 * } );
							 */ }
							<div>UnityBlocksSettingsModalControl</div>
						</UnityBlocksSettingsModalControl.Slot>
					</section>
				</Modal>
			) }
		</Fragment>
	);
}

if (
	typeof unityblocksSettings !== 'undefined' &&
	!! parseInt( unityblocksSettings.unityblocksSettingsEnabled )
) {
	registerPlugin( 'unityblocks-settings', {
		icon: '',
		render: UnityBlocksSettings,
	} );
} else if ( getPlugin( 'unityblocks-settings' ) ) {
	unregisterPlugin( 'unityblocks-settings' );
}
