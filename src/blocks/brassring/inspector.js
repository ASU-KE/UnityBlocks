/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextareaControl,
	SelectControl,
} from '@wordpress/components';

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
					<SelectControl
						label={ __( 'Staff or Student?' ) }
						value={ siteType }
						options={ [
							{ label: 'Client can select', value: 'all' },
							{ label: 'Staff', value: 'staff' },
							{ label: 'Student', value: 'student' },
						] }
						onChange={ ( value ) => {
							return setAttributes( {
								siteType: value,
							} );
						} }
					/>
				</PanelRow>

				<PanelRow>
					<TextareaControl
						label={ 'Department list' }
						help={
							'List department names separated by commas (,).'
						}
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
