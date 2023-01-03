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
			<PanelBody title={ __( 'ASU Careers', 'unityblocks' ) }>
				<PanelRow>
					<SelectControl
						label={ __( 'Staff or Students?' ) }
						value={ siteType }
						options={ [
							{ label: 'User choice', value: 'user-choice' },
							{ label: 'Staff', value: 'staff' },
							{ label: 'Students', value: 'students' },
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
