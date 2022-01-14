/**
 * External dependencies
 */
import { AnchorMenu } from '@asu-design-system/components-core/dist/libCore.es';

/**
 * Internal dependencies
 */
// import Controls from './controls';
// import Inspector from './inspector';

import { InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import {
	Button,
	IconButton,
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
		attributes: {
			firstElementId,
			focusFirstFocusableElement,
			items: menuItems,
		},
		className,
		setAttributes,
	} = props;

	const args = {
		firstElementId,
		focusFirstFocusableElement,
		items: menuItems,
	};

	const handleAddItem = () => {
		const items = [ ...props.attributes.items ];
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

	let itemFields;

	if ( props.attributes.items.length ) {
		itemFields = props.attributes.items.map( ( item, index ) => {
			return (
				<Fragment key={ index }>
					<PanelRow>
						<TextControl
							className="anchormenu__item-text"
							placeholder="Text for menu item"
							value={ props.attributes.items[ index ].text }
							onChange={ ( text ) =>
								handleItemChange( text, index )
							}
						/>
						<IconButton
							className="anchormenu__remove-item-text"
							icon="no-alt"
							label="Delete item"
							onClick={ () => handleRemoveItem( index ) }
						/>
					</PanelRow>
				</Fragment>
			);
		} );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'UDS AnchorMenu Items', 'unityblocks' ) }
				>
					<PanelRow>
						{ itemFields }
						<Button
							isDefault
							onClick={ handleAddItem.bind( this ) }
						>
							{ __( 'Add Item' ) }
						</Button>
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
