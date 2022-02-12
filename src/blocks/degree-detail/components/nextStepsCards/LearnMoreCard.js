/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Card,
	CardBody,
	CardDivider,
	PanelBody,
	RadioControl,
	TextareaControl,
	TextControl,
} from '@wordpress/components';

/**
 * Block controls
 *
 * @param {Object} props
 */
const LearnMoreCard = ( props ) => {
	const {
		attributes: {
			nextSteps__learnMoreIcon,
			nextSteps__learnMoreTitle,
			nextSteps__learnMoreContent,
			nextSteps__learnMoreButtonLabel,
			nextSteps__learnMoreButtonAria,
			nextSteps__learnMoreButtonUrl,
			nextSteps__learnMoreButtonColor,
			nextSteps__learnMoreButtonSize,
		},
		setAttributes,
	} = props;

	return (
		<Card size={ 'small' } style={ { width: '50%' } }>
			<PanelBody title="Learn More card" initialOpen={ false }>
				<CardBody>
					<TextControl
						label={ 'Card icon' }
						help={
							'Enter Font Awesome icon classnames separated by spaces. e.g. "fas info-circle"'
						}
						value={ nextSteps__learnMoreIcon }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__learnMoreIcon: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card title' }
						value={ nextSteps__learnMoreTitle }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__learnMoreTitle: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextareaControl
						label={ 'Card content' }
						value={ nextSteps__learnMoreContent }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__learnMoreContent: newValue,
							} )
						}
					/>
				</CardBody>

				<CardDivider />

				<CardBody>
					<TextControl
						label={ 'Card button label' }
						value={ nextSteps__learnMoreButtonLabel }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__learnMoreButtonLabel: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card button ARIA label' }
						value={ nextSteps__learnMoreButtonAria }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__learnMoreButtonAria: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card button URL' }
						value={ nextSteps__learnMoreButtonUrl }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__learnMoreButtonUrl: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<RadioControl
						label={ __( 'Card button color', 'unityblocks' ) }
						selected={ nextSteps__learnMoreButtonColor }
						options={ [
							{
								label: __( 'Maroon', 'unityblocks' ),
								value: 'maroon',
							},
							{
								label: __( 'Gold', 'unityblocks' ),
								value: 'gold',
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
							setAttributes( {
								nextSteps__learnMoreButtonColor: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<RadioControl
						label={ __( 'Card button size', 'unityblocks' ) }
						selected={ nextSteps__learnMoreButtonSize }
						options={ [
							{
								label: __( 'Default', 'unityblocks' ),
								value: 'default',
							},
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
							setAttributes( {
								nextSteps__learnMoreButtonSize: newValue,
							} )
						}
					/>
				</CardBody>
			</PanelBody>
		</Card>
	);
};

export { LearnMoreCard };
