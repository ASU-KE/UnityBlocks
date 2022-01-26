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
									className="eventslist__header-text"
									label={ 'Header text' }
									placeholder="Events List"
									value={ headerText }
									onChange={ ( headerText ) =>
										setAttributes( { headerText } )
									}
								/>
							</PanelRow>
							<PanelRow>
								<RadioControl
									label={ __(
										'Header color',
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

				<PanelBody
					title={ __( 'CTA button', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="eventslist__ctabutton-text"
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
							className="eventslist__ctabutton-url"
							label={ 'CTA URL' }
							placeholder="https://events.asu.edu"
							value={ ctaUrl }
							onChange={ ( ctaUrl ) =>
								setAttributes( { ctaUrl } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __( 'CTA button color', 'unityblocks' ) }
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

				<PanelBody
					title={ __( 'Data Source', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="eventslist__datasource-url"
							label={ 'Url' }
							placeholder="https://cors.api.rtd.asu.edu/asuevents.asu.edu/feed-json/online"
							value={ dataSourceUrl }
							onChange={ ( dataSourceUrl ) =>
								setAttributes( { dataSourceUrl } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="eventslist__datasource-filters"
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

				<PanelBody>
					<PanelRow>
						<TextControl
							className="eventslist__maxitems-value"
							label={ 'Max items to load' }
							placeholder={ '10' }
							value={ maxItems }
							onChange={ ( maxItems ) =>
								setAttributes( { maxItems } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
