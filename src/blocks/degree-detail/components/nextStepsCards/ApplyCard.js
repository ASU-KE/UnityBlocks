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
const ApplyCard = ( props ) => {
	const {
		attributes: {
			nextSteps__applyIcon,
			nextSteps__applyTitle,
			nextSteps__applyContent,
			nextSteps__applyButtonLabel,
			nextSteps__applyButtonAria,
			nextSteps__applyButtonUrl,
			nextSteps__applyButtonColor,
			nextSteps__applyButtonSize,
		},
		setAttributes,
	} = props;

	return (
		<Card size={ 'small' } style={ { width: '50%' } }>
			<PanelBody title="Apply card" initialOpen={ false }>
				<CardBody>
					<TextControl
						label={ 'Card icon' }
						value={ nextSteps__applyIcon }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__applyIcon: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card title' }
						value={ nextSteps__applyTitle }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__applyTitle: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextareaControl
						label={ 'Card content' }
						value={ nextSteps__applyContent }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__applyContent: newValue,
							} )
						}
					/>
				</CardBody>

				<CardDivider />

				<CardBody>
					<TextControl
						label={ 'Card button label' }
						value={ nextSteps__applyButtonLabel }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__applyButtonLabel: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card button ARIA label' }
						value={ nextSteps__applyButtonAria }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__applyButtonAria: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<TextControl
						label={ 'Card button URL' }
						value={ nextSteps__applyButtonUrl }
						onChange={ ( newValue ) =>
							setAttributes( {
								nextSteps__applyButtonUrl: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<RadioControl
						label={ __( 'Card button color', 'unityblocks' ) }
						selected={ nextSteps__applyButtonColor }
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
								nextSteps__applyButtonColor: newValue,
							} )
						}
					/>
				</CardBody>
				<CardBody>
					<RadioControl
						label={ __( 'Card button size', 'unityblocks' ) }
						selected={ nextSteps__applyButtonSize }
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
								nextSteps__applyButtonSize: newValue,
							} )
						}
					/>
				</CardBody>
			</PanelBody>
		</Card>
	);
};

export { ApplyCard };
