/**
 * External dependencies
 */
// import classnames from 'classnames';
import { AnchorMenu } from '../../components';

/**
 * Internal dependencies
 */
// import Controls from './controls';
// import Inspector from './inspector';

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
 * Block edit function
 *
 * @param {Object} props
 */
const Edit = ( props ) => {
	const {
		attributes: { firstElementId, focusFirstFocusableElement, items },
		className,
		setAttributes,
	} = props;

	const args = { firstElementId, focusFirstFocusableElement, items };

	// const anchorMenuArgs = {
	// 	items: [
	// 		{
	// 			text: 'First container',
	// 			targetIdName: 'first-container',
	// 			icon: [ 'fas', 'link' ],
	// 		},
	// 		{ text: 'Second container', targetIdName: 'second-container' },
	// 		{ text: 'Third container', targetIdName: 'third-container' },
	// 		{
	// 			text: 'Fourth container',
	// 			targetIdName: 'fourth-container',
	// 			icon: [ 'fas', 'link' ],
	// 		},
	// 	],
	// 	firstElementId: 'first-container',
	// };

	return (
		<>
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
			<div className={ className }>
				<AnchorMenu { ...args } />
			</div>
		</>
	);
};

export default Edit;
