/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	IconButton,
	PanelBody,
	PanelRow,
	TextControl,
} from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const handleAddItem = () => {
		const itemsTexts = [ ...props.attributes.itemsTexts ];
		const itemsTargets = [ ...props.attributes.itemsTargets ];
		itemsTexts.push( '' );
		itemsTargets.push( '' );
		props.setAttributes( { itemsTexts, itemsTargets } );
	};

	const handleRemoveItem = ( index ) => {
		const itemsTexts = [ ...props.attributes.itemsTexts ];
		const itemsTargets = [ ...props.attributes.itemsTargets ];
		itemsTexts.splice( index, 1 );
		itemsTargets.splice( index, 1 );
		props.setAttributes( { itemsTexts, itemsTargets } );
	};

	const handleItemTextChange = ( text, index ) => {
		const itemsTexts = [ ...props.attributes.itemsTexts ];
		itemsTexts[ index ] = text;
		props.setAttributes( { itemsTexts } );
	};

	const handleItemTargetChange = ( targetIdName, index ) => {
		const itemsTargets = [ ...props.attributes.itemsTargets ];
		itemsTargets[ index ] = targetIdName;
		props.setAttributes( { itemsTargets } );
	};

	let itemFields;

	if ( props.attributes.items.length ) {
		itemFields = props.attributes.items.map( ( item, index ) => {
			return (
				<PanelRow key={ index }>
					<TextControl
						className="anchormenu__item-text"
						placeholder="Text for menu item"
						value={ props.attributes.itemsTexts[ index ] }
						onChange={ ( text ) =>
							handleItemTextChange( text, index )
						}
					/>
					<TextControl
						className="anchormenu__item-targetIdName"
						placeholder="Target ID for menu item"
						value={ props.attributes.itemsTargets[ index ] }
						onChange={ ( targetIdName ) =>
							handleItemTargetChange( targetIdName, index )
						}
					/>
					<IconButton
						className="anchormenu__remove-item-text"
						icon="no-alt"
						label="Delete item"
						onClick={ () => handleRemoveItem( index ) }
					/>
				</PanelRow>
			);
		} );
	}

	return (
		<InspectorControls>
			<PanelBody title={ __( 'UDS AnchorMenu Items', 'unityblocks' ) }>
				{ itemFields }
				<PanelRow>
					<Button isDefault onClick={ handleAddItem.bind( this ) }>
						{ __( 'Add Item' ) }
					</Button>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
