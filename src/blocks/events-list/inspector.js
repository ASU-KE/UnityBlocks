/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useFetchKeGraphql } from '../../unity/components-core/src/core/hooks/use-fetch-ke-graphql';
import { LIST_GROUPS_QUERY } from '../../unity/component-events/src/core/graphql';

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
			dataSourceType,
			dataSourceAsuUrl,
			dataSourceKeUrl,
			dataSourceFeed,
			asuFilterUnits,
			keFilterUnits,
			keSortEvents,
			keShowPastEvents,
			keShowFutureEvents,
			noResultsText,
			maxItems,
		},
		setAttributes,
	} = props;

	// Fetch KE Unit tags for dropdown selector.
	const filters = undefined;
	const pagination = {
		page: 1,
		perPage: 1000,
	};
	const sort = {
		table: 'group',
		field: 'name',
		order: 'ASC',
	};
	const { payload } = useFetchKeGraphql(
		LIST_GROUPS_QUERY,
		dataSourceKeUrl,
		filters,
		pagination,
		sort
	);

	const units = payload?.allGroups.data.map( ( group ) => ( {
		id: group.id,
		name: group.name,
		slug: group.slug,
	} ) );

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
							onChange={ ( value ) => {
								setAttributes( { enableHeader: value } );
							} }
						/>
					</PanelRow>
					{ enableHeader && (
						<>
							<PanelRow>
								<TextControl
									label={ 'Header text' }
									value={ headerText }
									onChange={ ( value ) =>
										setAttributes( { headerText: value } )
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
									onChange={ ( value ) =>
										setAttributes( { headerColor: value } )
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
								onChange={ ( value ) =>
									setAttributes( { ctaText: value } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ 'CTA URL' }
								value={ ctaUrl }
								onChange={ ( value ) =>
									setAttributes( { ctaUrl: value } )
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
								onChange={ ( value ) =>
									setAttributes( { ctaColor: value } )
								}
							/>
						</PanelRow>
					</PanelBody>
				) }

				<PanelBody>
					<PanelRow>
						<TextControl
							label={ 'Text to display when no results found' }
							value={ noResultsText }
							onChange={ ( value ) =>
								setAttributes( { noResultsText: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Max items to load' }
							help={
								"Changing this value doesn't update the Edit view immediately. Update and reload to refresh the editor."
							}
							value={ maxItems }
							onChange={ ( value ) =>
								setAttributes( {
									maxItems: Number( value ), // Force attribute to number because this input field returns value as string.
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
						<RadioControl
							label={ __( 'Source type', 'unityblocks' ) }
							selected={ dataSourceType }
							options={ [
								{
									label: __( 'ASU Events', 'unityblocks' ),
									value: 'asuDrupal',
								},
								{
									label: __( 'KE Events', 'unityblocks' ),
									value: 'keGraphql',
								},
							] }
							onChange={ ( value ) =>
								setAttributes( { dataSourceType: value } )
							}
						/>
					</PanelRow>
					{ dataSourceType === 'asuDrupal' && (
						<>
							<PanelRow>
								<TextControl
									label={ 'Url' }
									help={
										'Data source url requires the provided proxy.'
									}
									value={ dataSourceAsuUrl }
									onChange={ ( value ) =>
										setAttributes( {
											dataSourceAsuUrl: value,
										} )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Base feed machine name' }
									help={
										'Enter the single taxonomy machine name to select the base events feed. For the master list of available events feeds, refer to: https://asuevents.asu.edu/reports/taxonomy-terms'
									}
									value={ dataSourceFeed }
									onChange={ ( value ) =>
										setAttributes( {
											dataSourceFeed: value,
										} )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Filter topics' }
									help={ 'Enter tags, space delimited.' }
									value={ asuFilterUnits }
									onChange={ ( value ) =>
										setAttributes( {
											asuFilterUnits: value,
										} )
									}
								/>
							</PanelRow>
						</>
					) }
					{ dataSourceType === 'keGraphql' && (
						<>
							<PanelRow>
								<TextControl
									label={ 'Url' }
									value={ dataSourceKeUrl }
									onChange={ ( value ) =>
										setAttributes( {
											dataSourceKeUrl: value,
										} )
									}
								/>
							</PanelRow>
							<PanelRow>
								<SelectControl
									multiple
									label={ __( 'Filter Colleges/Units' ) }
									value={ keFilterUnits }
									options={ units?.map( ( unit ) => ( {
										value: unit.slug,
										label: unit.name,
									} ) ) }
									onChange={ ( newValue ) => {
										return setAttributes( {
											keFilterUnits: newValue,
										} );
									} }
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={ 'Show past events?' }
									help={
										keShowPastEvents
											? 'Past events enabled.'
											: 'Past events disabled.'
									}
									checked={ keShowPastEvents }
									onChange={ ( value ) => {
										setAttributes( {
											keShowPastEvents: value,
										} );
									} }
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={ 'Show future events?' }
									help={
										keShowFutureEvents
											? 'Future events enabled.'
											: 'Future events disabled.'
									}
									checked={ keShowFutureEvents }
									onChange={ ( value ) => {
										setAttributes( {
											keShowFutureEvents: value,
										} );
									} }
								/>
							</PanelRow>
							<PanelRow>
								<RadioControl
									label={ __(
										'Events sort order',
										'unityblocks'
									) }
									selected={ keSortEvents }
									options={ [
										{
											label: __(
												'Ascending (older to newer)',
												'unityblocks'
											),
											value: 'ASC',
										},
										{
											label: __(
												'Descending (newer to older)',
												'unityblocks'
											),
											value: 'DESC',
										},
									] }
									onChange={ ( value ) =>
										setAttributes( { keSortEvents: value } )
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
