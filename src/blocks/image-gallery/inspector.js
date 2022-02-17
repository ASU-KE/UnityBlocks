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
		attributes: { hasContent, imageAutoSize, width, maxWidth },
		setAttributes,
	} = props;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Gallery settings', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Gallery images have captions' }
							help={
								hasContent
									? 'Captions enabled.'
									: 'Captions disabled.'
							}
							checked={ hasContent }
							onChange={ ( value ) => {
								setAttributes( { hasContent: value } );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Images auto-size' }
							help={
								imageAutoSize
									? 'Image auto-sizing enabled.'
									: 'Image auto-sizing disabled.'
							}
							checked={ imageAutoSize }
							onChange={ ( value ) => {
								setAttributes( { imageAutoSize: value } );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Set gallery width' }
							value={ width }
							onChange={ ( value ) =>
								setAttributes( { width: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Set gallery max width' }
							value={ maxWidth }
							onChange={ ( value ) =>
								setAttributes( { maxWidth: value } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export { Inspector };
