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
	ToggleControl,
} from '@wordpress/components';
// import { Fragment } from '@wordpress/element';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: { firstElementId, focusFirstFocusableElement },
		setAttributes,
	} = props;

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
				<PanelRow key={ index }>
					<TextControl
						className="anchormenu__item-text"
						placeholder="Text for menu item"
						value={ props.attributes.items[ index ].text }
						onChange={ ( text ) => handleItemChange( text, index ) }
					/>
					<TextControl
						className="anchormenu__item-targetIdName"
						placeholder="Target ID for menu item"
						value={ props.attributes.items[ index ].targetIdName }
						onChange={ ( targetIdName ) =>
							handleItemChange( targetIdName, index )
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
	);
};

export default Inspector;
