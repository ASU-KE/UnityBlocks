/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const { polyfill } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Accordion settings', 'unityblocks' ) }>
					<ToggleControl
						label={ __(
							'Internet Explorer support',
							'unityblocks'
						) }
						checked={ !! polyfill }
						help={
							! polyfill
								? __(
										'Add support for Internet Explorer by loading a JavaScript polyfill.',
										'unityblocks'
								  )
								: __(
										'Supporting Internet Explorer by loading a JavaScript polyfill on this page.',
										'unityblocks'
								  )
						}
						onChange={ () => {
							setAttributes( { polyfill: ! polyfill } );
							// Save values to metadata.
							wp.data.dispatch( 'core/editor' ).editPost( {
								meta: {
									_unityblocks_accordion_ie_support:
										"'" + ! polyfill + "'",
								},
							} );
						} }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
