/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	Card,
	CardBody,
	IconButton,
	RadioControl,
	TextControl,
} from '@wordpress/components';

/**
 * Block controls
 *
 * @param {Object} props
 */
const NextStepsSettings = ( props ) => {
	const {
		attributes: {
			nextSteps__cardsIcon,
			nextSteps__cardsTitle,
			nextSteps__cardsContent,
			nextSteps__cardsButtonIcon,
			nextSteps__cardsButtonLabel,
			nextSteps__cardsButtonUrl,
			nextSteps__cardsButtonColor,
			nextSteps__cardsButtonSize,
		},
	} = props;

	const handleAddCard = () => {
		const cardIcons = [ ...nextSteps__cardsIcon ];
		const cardTitles = [ ...nextSteps__cardsTitle ];
		const cardContents = [ ...nextSteps__cardsContent ];
		const cardButtonIcons = [ ...nextSteps__cardsButtonIcon ];
		const cardButtonLabels = [ ...nextSteps__cardsButtonLabel ];
		const cardButtonUrls = [ ...nextSteps__cardsButtonUrl ];
		const cardButtonColors = [ ...nextSteps__cardsButtonColor ];
		const cardButtonSizes = [ ...nextSteps__cardsButtonSize ];

		cardIcons.push( '' );
		cardTitles.push( '' );
		cardContents.push( '' );
		cardButtonIcons.push( '' );
		cardButtonLabels.push( '' );
		cardButtonUrls.push( '' );
		cardButtonColors.push( '' );
		cardButtonSizes.push( '' );

		props.setAttributes( {
			nextSteps__cardsIcon: cardIcons,
			nextSteps__cardsTitle: cardTitles,
			nextSteps__cardsContent: cardContents,
			nextSteps__cardsButtonIcon: cardButtonIcons,
			nextSteps__cardsButtonLabel: cardButtonLabels,
			nextSteps__cardsButtonUrl: cardButtonUrls,
			nextSteps__cardsButtonColor: cardButtonColors,
			nextSteps__cardsButtonSize: cardButtonSizes,
		} );
	};

	const handleRemoveCard = ( index ) => {
		const cardIcons = [ ...nextSteps__cardsIcon ];
		const cardTitles = [ ...nextSteps__cardsTitle ];
		const cardContents = [ ...nextSteps__cardsContent ];
		const cardButtonIcons = [ ...nextSteps__cardsButtonIcon ];
		const cardButtonLabels = [ ...nextSteps__cardsButtonLabel ];
		const cardButtonUrls = [ ...nextSteps__cardsButtonUrl ];
		const cardButtonColors = [ ...nextSteps__cardsButtonColor ];
		const cardButtonSizes = [ ...nextSteps__cardsButtonSize ];

		cardIcons.splice( index, 1 );
		cardTitles.splice( index, 1 );
		cardContents.splice( index, 1 );
		cardButtonIcons.splice( index, 1 );
		cardButtonLabels.splice( index, 1 );
		cardButtonUrls.splice( index, 1 );
		cardButtonColors.splice( index, 1 );
		cardButtonSizes.splice( index, 1 );

		props.setAttributes( {
			nextSteps__cardsIcon: cardIcons,
			nextSteps__cardsTitle: cardTitles,
			nextSteps__cardsContent: cardContents,
			nextSteps__cardsButtonIcon: cardButtonIcons,
			nextSteps__cardsButtonLabel: cardButtonLabels,
			nextSteps__cardsButtonUrl: cardButtonUrls,
			nextSteps__cardsButtonColor: cardButtonColors,
			nextSteps__cardsButtonSize: cardButtonSizes,
		} );
	};

	const handleIconChange = ( value, index ) => {
		const cardIcons = [ ...nextSteps__cardsIcon ];
		cardIcons[ index ] = value;
		props.setAttributes( { nextSteps__cardsIcon: cardIcons } );
	};

	const handleTitleChange = ( value, index ) => {
		const cardTitles = [ ...nextSteps__cardsTitle ];
		cardTitles[ index ] = value;
		props.setAttributes( { nextSteps__cardsTitle: cardTitles } );
	};

	const handleContentChange = ( value, index ) => {
		const cardContents = [ ...nextSteps__cardsContent ];
		cardContents[ index ] = value;
		props.setAttributes( { nextSteps__cardsContent: cardContents } );
	};

	const handleButtonIconChange = ( value, index ) => {
		const cardButtonIcons = [ ...nextSteps__cardsButtonIcon ];
		cardButtonIcons[ index ] = value;
		props.setAttributes( { nextSteps__cardsButtonIcon: cardButtonIcons } );
	};

	const handleButtonLabelChange = ( value, index ) => {
		const cardButtonLabels = [ ...nextSteps__cardsButtonLabel ];
		cardButtonLabels[ index ] = value;
		props.setAttributes( {
			nextSteps__cardsButtonLabel: cardButtonLabels,
		} );
	};

	const handleButtonUrlChange = ( value, index ) => {
		const cardButtonUrls = [ ...nextSteps__cardsButtonUrl ];
		cardButtonUrls[ index ] = value;
		props.setAttributes( { nextSteps__cardsButtonUrl: cardButtonUrls } );
	};

	const handleButtonColorChange = ( value, index ) => {
		const cardButtonColors = [ ...nextSteps__cardsButtonColor ];
		cardButtonColors[ index ] = value;
		props.setAttributes( {
			nextSteps__cardsButtonColor: cardButtonColors,
		} );
	};

	const handleButtonSizeChange = ( value, index ) => {
		const cardButtonSizes = [ ...nextSteps__cardsButtonSize ];
		cardButtonSizes[ index ] = value;
		props.setAttributes( { nextSteps__cardsButtonSize: cardButtonSizes } );
	};

	let cards;

	if ( nextSteps__cardsTitle.length ) {
		cards = nextSteps__cardsTitle.map( ( title, index ) => {
			return (
				<CardBody key={ index }>
					<TextControl
						label={ 'Card icon' }
						value={ nextSteps__cardsIcon[ index ] }
						onChange={ ( newValue ) =>
							handleIconChange( newValue, index )
						}
					/>
					<TextControl
						label={ 'Card title' }
						value={ nextSteps__cardsTitle[ index ] }
						onChange={ ( newValue ) =>
							handleTitleChange( newValue, index )
						}
					/>
					<TextControl
						label={ 'Card content' }
						value={ nextSteps__cardsContent[ index ] }
						onChange={ ( newValue ) =>
							handleContentChange( newValue, index )
						}
					/>
					<TextControl
						label={ 'Card button icon' }
						value={ nextSteps__cardsButtonIcon[ index ] }
						onChange={ ( newValue ) =>
							handleButtonIconChange( newValue, index )
						}
					/>
					<TextControl
						label={ 'Card button label' }
						value={ nextSteps__cardsButtonLabel[ index ] }
						onChange={ ( newValue ) =>
							handleButtonLabelChange( newValue, index )
						}
					/>
					<TextControl
						label={ 'Card button url' }
						value={ nextSteps__cardsButtonUrl[ index ] }
						onChange={ ( newValue ) =>
							handleButtonUrlChange( newValue, index )
						}
					/>
					<RadioControl
						label={ __( 'Card button color', 'unityblocks' ) }
						selected={ nextSteps__cardsButtonColor[ index ] }
						options={ [
							{
								label: __( 'Gold', 'unityblocks' ),
								value: 'gold',
							},
							{
								label: __( 'Maroon', 'unityblocks' ),
								value: 'maroon',
							},
							{
								label: __( 'Gray', 'unityblocks' ),
								value: 'gray',
							},
							{
								label: __( 'Dark', 'unityblocks' ),
								value: 'dark',
							},
						] }
						onChange={ ( newValue ) =>
							handleButtonColorChange( newValue, index )
						}
					/>
					<RadioControl
						label={ __( 'Card button size', 'unityblocks' ) }
						selected={ nextSteps__cardsButtonSize[ index ] }
						options={ [
							{
								label: __( 'Small', 'unityblocks' ),
								value: 'small',
							},
							{
								label: __( 'Xsmall', 'unityblocks' ),
								value: 'xsmall',
							},
						] }
						onChange={ ( newValue ) =>
							handleButtonSizeChange( newValue, index )
						}
					/>
					<IconButton
						icon="no-alt"
						label="Delete item"
						onClick={ () => handleRemoveCard( index ) }
					/>
				</CardBody>
			);
		} );
	}

	return (
		<>
			<h2>Customize Next Steps cards</h2>
			<Card size={ 'small' } style={ { width: '50%' } }>
				<CardBody>
					<p>
						Note that cards should be added in sets of 3 for each
						row desired.
					</p>
				</CardBody>

				<CardBody>
					<Button isDefault onClick={ handleAddCard.bind( this ) }>
						{ __( 'Add Card' ) }
					</Button>
				</CardBody>

				{ cards }
			</Card>
		</>
	);
};

export default NextStepsSettings;
