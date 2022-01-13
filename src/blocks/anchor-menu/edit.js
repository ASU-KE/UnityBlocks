/**
 * External dependencies
 */
import { AnchorMenu } from '@asu-design-system/components-core/dist/libCore.es';

/**
 * Internal dependencies
 */
// import Controls from './controls';
// import Inspector from './inspector';

import { InspectorControls, IconButton, Button } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import {
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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

	const handleAddItem = () => {
		items.push( {
			text: '',
			targetIdName: '',
			icon: '',
		} );
		props.setAttributes( { items } );
	};

	const handleRemoveItem = ( index ) => {
		const items = [ ...props.attributes.items ];
		items.splice( index, 1 );
		props.setAttributes( { items } );
	};

	const handleItemChange = ( text, index ) => {
		const items = [ ...props.attributes.items ];
		items[ index ].text = text;
		props.setAttributes( { items } );
	};

	let itemFields, itemDisplay;

	if ( props.attributes.items.length ) {
		itemFields = props.attributes.items.map( ( item, index ) => {
			return (
				<Fragment key={ index }>
					<TextControl
						className="anchormenu__item-text"
						placeholder="Text for menu item"
						value={ props.attributes.items[ index ].text }
						onChange={ ( text ) => handleItemChange( text, index ) }
					/>
					<IconButton
						className="anchormenu__remove-item-text"
						icon="no-alt"
						label="Delete item"
						onClick={ () => handleRemoveItem( index ) }
					/>
				</Fragment>
			);
		} );

		itemDisplay = props.attributes.items.map( ( item, index ) => {
			return <p key={ index }>{ item.text }</p>;
		} );
	}
	return [
		<InspectorControls key="1">
			<PanelBody title={ __( 'UDS AnchorMenu Items', 'unityblocks' ) }>
				{ itemFields }
				<Button isDefault onClick={ handleAddItem.bind( this ) }>
					{ __( 'Add Item' ) }
				</Button>
			</PanelBody>
		</InspectorControls>,
		<div key="2" className={ props.className }>
			<h2>Block</h2>
			{ itemDisplay }
		</div>,
		<PanelBody
			key="3"
			title={ __( 'UDS AnchorMenu Settings', 'unityblocks' ) }
			initialOpen
		>
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
		</PanelBody>,
		<div key="4" className={ className }>
			<AnchorMenu { ...args } />
		</div>,
	];
};

export default Edit;
