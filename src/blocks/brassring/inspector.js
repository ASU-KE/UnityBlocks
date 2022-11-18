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
		attributes: { siteType, depList },
		setAttributes,
	} = props;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Brassring Jobs', 'unityblocks' ) }>
				<PanelRow>
					<TextControl
						label={ 'siteType' }
						value={ siteType }
						onChange={ ( value ) =>
							setAttributes( { siteType: value } )
						}
					/>
				</PanelRow>

				<PanelRow>
					<TextControl
						label={ 'depList' }
						value={ depList }
						onChange={ ( value ) =>
							setAttributes( { depList: value } )
						}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
