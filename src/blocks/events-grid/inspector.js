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
			dataSourceUrl,
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
									className="eventsgrid__header-text"
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
								className="eventsgrid__cardbutton-text"
								label={ 'CTA text' }
								placeholder="Click to see more events"
								value={ ctaText }
								onChange={ ( ctaText ) =>
									setAttributes( { ctaText } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="eventsgrid__cardbutton-url"
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
							className="eventsgrid__maxitems-value"
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
					title={ __( 'Data Source', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="eventsgrid__datasource-url"
							label={ 'Url' }
							help={
								'Data source url requires provided proxy. Edit end of url to select appropriate events feed. For master list of available events feeds, refer to: https://asuevents.asu.edu/reports/taxonomy-terms'
							}
							value={ dataSourceUrl }
							onChange={ ( dataSourceUrl ) =>
								setAttributes( { dataSourceUrl } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="eventsgrid__datasource-filters"
							label={ 'Filters' }
							placeholder={
								'e.g. nursing_and_health_care,School of Mathematical and Natural Sciences,Student'
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
