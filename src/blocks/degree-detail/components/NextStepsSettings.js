/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	IconButton,
	TextControl,
} from '@wordpress/components';

/**
 * Block controls
 *
 * @param {Object} props
 */
const NextStepsSettings = ( props ) => {
	const handleAddCard = () => {
		const cardIcons = [ ...props.attributes.nextSteps__cardsIcon ];
		const cardTitles = [ ...props.attributes.nextSteps__cardsTitle ];
		const cardContents = [ ...props.attributes.nextSteps__cardsContent ];
		const cardButtonLinks = [
			...props.attributes.nextSteps__cardsButtonLink,
		];

		cardIcons.push( '' );
		cardTitles.push( '' );
		cardContents.push( '' );
		cardButtonLinks.push( '' );

		props.setAttributes( {
			nextSteps__cardsIcon: cardIcons,
			nextSteps__cardsTitle: cardTitles,
			nextSteps__cardsContent: cardContents,
			nextSteps__cardsButtonLink: cardButtonLinks,
		} );
	};

	const handleRemoveCard = ( index ) => {
		const cardIcons = [ ...props.attributes.nextSteps__cardsIcon ];
		const cardTitles = [ ...props.attributes.nextSteps__cardsTitle ];
		const cardContents = [ ...props.attributes.nextSteps__cardsContent ];
		const cardButtonLinks = [
			...props.attributes.nextSteps__cardsButtonLink,
		];

		cardIcons.splice( index, 1 );
		cardTitles.splice( index, 1 );
		cardContents.splice( index, 1 );
		cardButtonLinks.splice( index, 1 );

		props.setAttributes( {
			nextSteps__cardsIcon: cardIcons,
			nextSteps__cardsTitle: cardTitles,
			nextSteps__cardsContent: cardContents,
			nextSteps__cardsButtonLink: cardButtonLinks,
		} );
	};

	const handleIconChange = ( icon, index ) => {
		const cardIcons = [ ...props.attributes.nextSteps__cardsIcon ];
		cardIcons[ index ] = icon;
		props.setAttributes( { nextSteps__cardsIcon: cardIcons } );
	};

	const handleTitleChange = ( title, index ) => {
		const cardTitles = [ ...props.attributes.nextSteps__cardsTitle ];
		cardTitles[ index ] = title;
		props.setAttributes( { nextSteps__cardsTitle: cardTitles } );
	};

	const handleContentChange = ( content, index ) => {
		const cardContents = [ ...props.attributes.nextSteps__cardsContent ];
		cardContents[ index ] = content;
		props.setAttributes( { nextSteps__cardsContent: cardContents } );
	};

	const handleButtonLinkChange = ( link, index ) => {
		const cardButtonLinks = [
			...props.attributes.nextSteps__cardsButtonLink,
		];
		cardButtonLinks[ index ] = link;
		props.setAttributes( { nextSteps__cardsButtonLink: cardButtonLinks } );
	};

	let cards;

	if ( props.attributes.nextSteps__cardsTitle.length ) {
		cards = props.attributes.nextSteps__cardsTitle.map(
			( title, index ) => {
				return (
					<CardBody key={ index }>
						<TextControl
							label={ 'Card icon' }
							value={
								props.attributes.nextSteps__cardsIcon[ index ]
							}
							onChange={ ( newValue ) =>
								handleIconChange( newValue, index )
							}
						/>
						<TextControl
							label={ 'Card title' }
							value={
								props.attributes.nextSteps__cardsTitle[ index ]
							}
							onChange={ ( newValue ) =>
								handleTitleChange( newValue, index )
							}
						/>
						<TextControl
							label={ 'Card content' }
							value={
								props.attributes.nextSteps__cardsContent[
									index
								]
							}
							onChange={ ( newValue ) =>
								handleContentChange( newValue, index )
							}
						/>
						<TextControl
							label={ 'Card button link' }
							value={
								props.attributes.nextSteps__cardsButtonLink[
									index
								]
							}
							onChange={ ( newValue ) =>
								handleButtonLinkChange( newValue, index )
							}
						/>
						<IconButton
							icon="no-alt"
							label="Delete item"
							onClick={ () => handleRemoveCard( index ) }
						/>
					</CardBody>
				);
			}
		);
	}

	return (
		<Card size={ 'small' } style={ { width: '50%' } }>
			<CardHeader>
				<h2>Customize Next Steps cards</h2>
			</CardHeader>
			<CardBody>
				<p>
					Note that cards should be added in sets of 3 for each row
					desired.
				</p>
			</CardBody>

			<CardBody>
				<Button isDefault onClick={ handleAddCard.bind( this ) }>
					{ __( 'Add Card' ) }
				</Button>
			</CardBody>

			{ cards }
		</Card>
	);
};

export default NextStepsSettings;
