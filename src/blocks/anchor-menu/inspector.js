/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: { firstElementId, focusFirstFocusableElement, items },
		setAttributes,
	} = props;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'UDS AnchorMenu Settings', 'unityblocks' ) }
				initialOpen
			>
				<PanelRow>
					<TextControl
						label={ __( 'Items', 'unityblocks' ) }
						value={ items }
						// eslint-disable-next-line no-shadow
						onChange={ ( items ) => setAttributes( { items } ) }
					/>
				</PanelRow>
				<PanelRow>
					<TextControl
						label={ __( 'First Element ID', 'unityblocks' ) }
						value={ firstElementId }
						// eslint-disable-next-line no-shadow
						onChange={ ( firstElementId ) =>
							setAttributes( { firstElementId } )
						}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __(
							'Focus on First Focusable Element?',
							'unityblocks'
						) }
						// help=""
						checked={ focusFirstFocusableElement }
						// eslint-disable-next-line no-shadow
						onChange={ ( focusFirstFocusableElement ) =>
							setAttributes( { focusFirstFocusableElement } )
						}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
