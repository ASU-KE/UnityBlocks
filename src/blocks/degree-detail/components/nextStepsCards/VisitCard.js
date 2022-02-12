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
const VisitCard = ( props ) => {
	const {
		attributes: {
			nextSteps__visitIcon,
			nextSteps__visitTitle,
			nextSteps__visitContent,
			nextSteps__visitButtonIcon,
			nextSteps__visitButtonLabel,
			nextSteps__visitButtonAria,
			nextSteps__visitButtonUrl,
			nextSteps__visitButtonColor,
			nextSteps__visitButtonSize,
		},
		setAttributes,
	} = props;

	return (
		<Card size={ 'small' } style={ { width: '50%' } }>
			<PanelBody title="Visit card" initialOpen={ false }>
				<CardBody>
					<TextControl
						label={ 'Card icon' }
						value={ nextSteps__visitIcon }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__visitIcon: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card title' }
						value={ nextSteps__visitTitle }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__visitTitle: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextareaControl
						label={ 'Card content' }
						value={ nextSteps__visitContent }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__visitContent: newValue,
							} )
						}
					/>
				</CardBody>

				<CardDivider />

				<CardBody>
					<TextControl
						label={ 'Card button icon' }
						help={
							'Enter Font Awesome icon classnames separated by spaces. e.g. "fas info-circle"'
						}
						value={ nextSteps__visitButtonIcon }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__visitButtonIcon: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card button label' }
						value={ nextSteps__visitButtonLabel }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__visitButtonLabel: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card button ARIA label' }
						value={ nextSteps__visitButtonAria }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__visitButtonAria: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card button URL' }
						value={ nextSteps__visitButtonUrl }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__visitButtonUrl: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<RadioControl
						label={ __( 'Card button color', 'unityblocks' ) }
						selected={ nextSteps__visitButtonColor }
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
								nextSteps__visitButtonColor: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<RadioControl
						label={ __( 'Card button size', 'unityblocks' ) }
						selected={ nextSteps__visitButtonSize }
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
								nextSteps__visitButtonSize: newValue,
							} )
						}
					/>
				</CardBody>
			</PanelBody>
		</Card>
	);
};

export { VisitCard };
