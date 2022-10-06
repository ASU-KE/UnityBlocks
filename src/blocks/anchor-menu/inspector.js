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
		const itemTexts = [ ...props.attributes.itemTexts ];
		const itemTargets = [ ...props.attributes.itemTargets ];
		itemTexts.push( '' );
		itemTargets.push( '' );
		props.setAttributes( { itemTexts } );
	};

	const handleRemoveItem = ( index ) => {
		const itemTexts = [ ...props.attributes.itemTexts ];
		const itemTargets = [ ...props.attributes.itemTargets ];
		itemTexts.splice( index, 1 );
		itemTargets.splice( index, 1 );
		props.setAttributes( { itemTexts } );
		props.setAttributes( { itemTargets } );
	};

	const handleItemTextChange = ( text, index ) => {
		const itemTexts = [ ...props.attributes.itemTexts ];
		itemTexts[ index ] = text;
		props.setAttributes( { itemTexts } );
	};

	const handleItemTargetChange = ( targetIdName, index ) => {
		const itemTargets = [ ...props.attributes.itemTargets ];
		itemTargets[ index ] = targetIdName;
		props.setAttributes( { itemTargets } );
	};

	let itemFields;

	if ( props.attributes.itemTexts.length ) {
		itemFields = props.attributes.itemTexts.map( ( itemText, index ) => {
			return (
				<PanelRow key={ index }>
					<TextControl
						className="anchormenu__item-text"
						placeholder="Text for menu item"
						value={ props.attributes.itemTexts[ index ] }
						onChange={ ( text ) =>
							handleItemTextChange( text, index )
						}
					/>
					<TextControl
						className="anchormenu__item-targetIdName"
						placeholder="Target ID for menu item"
						value={ props.attributes.itemTargets[ index ] }
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
