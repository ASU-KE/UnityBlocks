/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: {
			enableHeader,
			headerText,
			headerColor,
			ctaText,
			ctaUrl,
			ctaColor,
			cardButtonText,
			cardButtonColor,
			cardButtonSize,
			dataSourceUrl,
			dataSourceFeed,
			dataSourceFilters,
			maxItems,
		},
		setAttributes,
	} = props;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Header', 'unityblocks' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<ToggleControl
							className="eventsgrid__header-toggle"
							label={ 'Enable Header' }
							help={
								enableHeader
									? 'Header enabled.'
									: 'Header disabled.'
							}
							checked={ enableHeader }
							onChange={ ( enableHeader ) => {
								setAttributes( { enableHeader } );
							} }
						/>
					</PanelRow>
					{ enableHeader && (
						<>
							<PanelRow>
								<TextControl
									className="newsgrid__header-text"
									label={ 'Header text' }
									value={ headerText }
									onChange={ ( headerText ) =>
										setAttributes( { headerText } )
									}
								/>
							</PanelRow>
							<PanelRow>
								<RadioControl
									label={ __(
										'Header text color',
										'unityblocks'
									) }
									selected={ headerColor }
									options={ [
										{
											label: __( 'White', 'unityblocks' ),
											value: 'white',
										},
										{
											label: __( 'Dark', 'unityblocks' ),
											value: 'dark',
										},
									] }
									onChange={ ( headerColor ) =>
										setAttributes( { headerColor } )
									}
								/>
							</PanelRow>
						</>
					) }
				</PanelBody>

				{ enableHeader && (
					<PanelBody
						title={ __( 'CTA button', 'unityblocks' ) }
						initialOpen={ false }
					>
						<PanelRow>
							<TextControl
								className="newsgrid__cardbutton-text"
								label={ 'CTA text' }
								value={ ctaText }
								onChange={ ( ctaText ) =>
									setAttributes( { ctaText } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="newsgrid__cardbutton-url"
								label={ 'CTA URL' }
								value={ ctaUrl }
								onChange={ ( ctaUrl ) =>
									setAttributes( { ctaUrl } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<RadioControl
								label={ __(
									'CTA button color',
									'unityblocks'
								) }
								selected={ ctaColor }
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
								onChange={ ( ctaColor ) =>
									setAttributes( {
										ctaColor,
									} )
								}
							/>
						</PanelRow>
					</PanelBody>
				) }

				<PanelBody>
					<PanelRow>
						<TextControl
							className="newsgrid__maxitems-value"
							label={ 'Max items to load' }
							help={
								"Changing this value doesn't update the Edit view immediately. Update and reload to refresh the editor."
							}
							value={ maxItems }
							onChange={ ( maxItems ) =>
								setAttributes( {
									maxItems: Number( maxItems ), // Force attribute to number because this input field returns value as string.
								} )
							}
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'Card buttons', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="newsgrid__cardbutton-text"
							label={ 'Button text' }
							value={ cardButtonText }
							onChange={ ( cardButtonText ) =>
								setAttributes( { cardButtonText } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __( 'Button color', 'unityblocks' ) }
							selected={ cardButtonColor }
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
							onChange={ ( cardButtonColor ) =>
								setAttributes( { cardButtonColor } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __( 'Button size', 'unityblocks' ) }
							selected={ cardButtonSize }
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
									label: __( 'Medium', 'unityblocks' ),
									value: 'medium',
								},
								{
									label: __( 'Large', 'unityblocks' ),
									value: 'large',
								},
							] }
							onChange={ ( cardButtonSize ) =>
								setAttributes( { cardButtonSize } )
							}
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'Data Source', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="newsgrid__datasource-url"
							label={ 'Url' }
							help={
								'Data source url requires the provided proxy.'
							}
							value={ dataSourceUrl }
							onChange={ ( dataSourceUrl ) =>
								setAttributes( { dataSourceUrl } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="newsgrid__datasource-feed"
							label={ 'Base feed machine name' }
							help={
								'Enter the single taxonomy machine name to select the base events feed. For the master list of available events feeds, refer to: https://asuevents.asu.edu/reports/taxonomy-terms'
							}
							value={ dataSourceFeed }
							onChange={ ( dataSourceFeed ) =>
								setAttributes( { dataSourceFeed } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="newsgrid__datasource-filters"
							label={ 'Filters' }
							help={
								'Enter optional taxonomy terms, comma delimited.'
							}
							placeholder={
								'nursing_and_health_care,School of Mathematical and Natural Sciences,Student'
							}
							value={ dataSourceFilters }
							onChange={ ( dataSourceFilters ) =>
								setAttributes( { dataSourceFilters } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
