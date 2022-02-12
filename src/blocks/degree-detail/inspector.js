/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: { appPathFolder, endpoint },
		setAttributes,
	} = props;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Degree Search Settings', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Application path folder' }
							value={ appPathFolder }
							onChange={ ( appPathFolder ) =>
								setAttributes( { appPathFolder } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Degree Search API endpoint' }
							value={ endpoint }
							onChange={ ( endpoint ) =>
								setAttributes( { endpoint } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export { Inspector };
