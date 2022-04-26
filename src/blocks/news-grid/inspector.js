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
			enableStoryDate,
			enableCardTags,
			enableAsuDataSource,
			asuDataSourceUrl,
			asuDataSourceFeed,
			// asuDataSourceFilters,
			enableKeDataSource,
			keDataSourceUrl,
			keDataSourceUnits,
			keDataSourceInterests,
			keDataSourceLocations,
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
							label={ 'Enable Header' }
							help={
								enableHeader
									? 'Header enabled.'
									: 'Header disabled.'
							}
							checked={ enableHeader }
							onChange={ ( newValue ) => {
								setAttributes( { enableHeader: newValue } );
							} }
						/>
					</PanelRow>
					{ enableHeader && (
						<>
							<PanelRow>
								<TextControl
									label={ 'Header text' }
									value={ headerText }
									onChange={ ( newValue ) =>
										setAttributes( {
											headerText: newValue,
										} )
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
									onChange={ ( newValue ) =>
										setAttributes( {
											headerColor: newValue,
										} )
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
								label={ 'CTA text' }
								value={ ctaText }
								onChange={ ( newValue ) =>
									setAttributes( { ctaText: newValue } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ 'CTA URL' }
								value={ ctaUrl }
								onChange={ ( newValue ) =>
									setAttributes( { ctaUrl: newValue } )
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
								onChange={ ( newValue ) =>
									setAttributes( { ctaColor: newValue } )
								}
							/>
						</PanelRow>
					</PanelBody>
				) }

				<PanelBody>
					<PanelRow>
						<ToggleControl
							label={ 'Enable Story Date' }
							help={
								enableStoryDate
									? 'Date enabled.'
									: 'Date disabled.'
							}
							checked={ enableStoryDate }
							onChange={ ( newValue ) => {
								setAttributes( { enableStoryDate: newValue } );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Enable Card Tags' }
							help={
								enableCardTags
									? 'Tags enabled.'
									: 'Tags disabled.'
							}
							checked={ enableCardTags }
							onChange={ ( newValue ) => {
								setAttributes( { enableCardTags: newValue } );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Max items to load' }
							help={
								"Changing this value doesn't update the Edit view immediately. Update and reload to refresh the editor."
							}
							value={ maxItems }
							onChange={ ( newValue ) =>
								setAttributes( {
									maxItems: Number( newValue ), // Force attribute to number because this input field returns value as string.
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
							label={ 'Button text' }
							value={ cardButtonText }
							onChange={ ( newValue ) =>
								setAttributes( { cardButtonText: newValue } )
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
							onChange={ ( newValue ) =>
								setAttributes( { cardButtonColor: newValue } )
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
							onChange={ ( newValue ) =>
								setAttributes( { cardButtonSize: newValue } )
							}
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'ASU Data Source', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Enable ASU News' }
							help={
								enableAsuDataSource
									? 'ASU enabled.'
									: 'ASU disabled.'
							}
							checked={ enableAsuDataSource }
							onChange={ ( newValue ) => {
								setAttributes( {
									enableAsuDataSource: newValue,
								} );
							} }
						/>
					</PanelRow>
					{ enableAsuDataSource && (
						<>
							{ ' ' }
							<PanelRow>
								<TextControl
									label={ 'ASU Feed Url' }
									help={
										'The ASU News Feed url requires the provided proxy.'
									}
									value={ asuDataSourceUrl }
									onChange={ ( newValue ) =>
										setAttributes( {
											asuDataSourceUrl: newValue,
										} )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Base feed machine name' }
									help={
										'Enter the single taxonomy machine name to select the base news feed. For the master list of available news feeds, refer to: https://news.asu.edu/reports/taxonomy-terms-count'
									}
									value={ asuDataSourceFeed }
									onChange={ ( newValue ) =>
										setAttributes( {
											asuDataSourceFeed: newValue,
										} )
									}
								/>
							</PanelRow>
							{ /* <PanelRow>
							<TextControl
								label={ 'Filters' }
								help={
									'Enter optional taxonomy terms, comma delimited.'
								}
								placeholder={
									'nursing_and_health_care,School of Mathematical and Natural Sciences,Student'
								}
								value={ asuDataSourceFilters }
								onChange={ ( newValue ) =>
									setAttributes( { asuDataSourceFilters: newValue } )
								}
							/>
						</PanelRow> */ }
						</>
					) }
				</PanelBody>

				<PanelBody
					title={ __( 'KE Data Source', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Enable KE News' }
							help={
								enableKeDataSource
									? 'KE enabled.'
									: 'KE disabled.'
							}
							checked={ enableKeDataSource }
							onChange={ ( newValue ) => {
								setAttributes( {
									enableKeDataSource: newValue,
								} );
							} }
						/>
					</PanelRow>
					{ enableKeDataSource && (
						<>
							{ ' ' }
							<PanelRow>
								<TextControl
									label={ 'KE API Endpoint Url' }
									value={ keDataSourceUrl }
									onChange={ ( newValue ) =>
										setAttributes( {
											keDataSourceUrl: newValue,
										} )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Filter Colleges/Units' }
									help={
										'Enter the machine-names for all desired colleges or units to include in results, separated by spaces.'
									}
									value={ keDataSourceUnits }
									onChange={ ( newValue ) =>
										setAttributes( {
											keDataSourceUnits: newValue,
										} )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Filter Interests' }
									help={
										'Enter the machine-names for all desired topics/interests to include in results, separated by spaces.'
									}
									value={ keDataSourceInterests }
									onChange={ ( newValue ) =>
										setAttributes( {
											keDataSourceInterests: newValue,
										} )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Filter Locations' }
									help={
										'Enter the machine-names for all desired locations/campuses to include in results, separated by spaces.'
									}
									value={ keDataSourceLocations }
									onChange={ ( newValue ) =>
										setAttributes( {
											keDataSourceLocations: newValue,
										} )
									}
								/>
							</PanelRow>
						</>
					) }
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
