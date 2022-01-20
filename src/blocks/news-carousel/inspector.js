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
} from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: {
			headerText,
			headerColor,
			cardButtonText,
			cardButtonColor,
			cardButtonSize,
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
						<TextControl
							className="newscarousel__header-text"
							label={ 'Header text' }
							placeholder="News Carousel"
							value={ headerText }
							onChange={ ( headerText ) =>
								setAttributes( { headerText } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={ __( 'Header color', 'unityblocks' ) }
							selected={ headerColor }
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
							onChange={ ( headerColor ) =>
								setAttributes( { headerColor } )
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
							className="newscarousel__cardbutton-text"
							label={ 'Button text' }
							placeholder="Read news"
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
					title={ __( 'CTA button', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							className="newscarousel__cardbutton-text"
							label={ 'CTA text' }
							placeholder="Click to see more news"
							value={ ctaText }
							onChange={ ( ctaText ) =>
								setAttributes( { ctaText } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="newscarousel__cardbutton-url"
							label={ 'CTA URL' }
							placeholder="https://news.asu.edu"
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
							className="newscarousel__datasource-url"
							label={ 'Url' }
							placeholder="https://cors.api.rtd.asu.edu/asunow.asu.edu:443/feeds-json/"
							value={ dataSourceUrl }
							onChange={ ( dataSourceUrl ) =>
								setAttributes( { dataSourceUrl } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							className="newscarousel__datasource-filters"
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
							className="newscarousel__maxitems-value"
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
