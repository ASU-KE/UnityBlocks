/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
// import { useFetchCountryIsoCodes } from '../../utils/hooks/use-fetch-country-iso-codes';
import { countries } from './assets/countries';
import { statesCan } from './assets/states-can';
import { statesUsa } from './assets/states-usa';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: {
			campus,
			actualCampus,
			college,
			department,
			studentType,
			areaOfInterest,
			programOfInterest,
			programOfInterestOptional,
			isCertMinor,
			country,
			stateProvince,
			successMsg,
			test,
			// dataSourceDegreeSearch,
			// dataSourceAsuOnline,
			// dataSourceCountriesStates,
			// submissionUrl,
		},
		setAttributes,
	} = props;

	// Fetch Countries ISO codes.
	// const {
	// 	payload: countries,
	// 	loading: countriesLoading,
	// 	error: countriesError,
	// } = useFetchCountryIsoCodes();

	// console.error( countries );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Program selection', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Campus type' }
							help={ 'General type of campus' }
							value={ campus }
							onChange={ ( value ) =>
								setAttributes( { campus: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Campus' }
							help={ 'Physical campus' }
							value={ actualCampus }
							onChange={ ( value ) =>
								setAttributes( { actualCampus: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'College' }
							value={ college }
							onChange={ ( value ) =>
								setAttributes( { college: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Department' }
							value={ department }
							onChange={ ( value ) =>
								setAttributes( { department: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Student type' }
							value={ studentType }
							onChange={ ( value ) =>
								setAttributes( { studentType: value } )
							}
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'Program filtering', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Area of Interest' }
							value={ areaOfInterest }
							onChange={ ( value ) =>
								setAttributes( { areaOfInterest: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Program of Interest' }
							value={ programOfInterest }
							onChange={ ( value ) =>
								setAttributes( { programOfInterest: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Is Program Optional?' }
							help={
								programOfInterestOptional
									? 'Program optional.'
									: 'Program optional.'
							}
							checked={ programOfInterestOptional }
							onChange={ ( value ) => {
								setAttributes( {
									programOfInterestOptional: value,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Is Cert Minor?' }
							help={
								isCertMinor
									? 'Certifical minor.'
									: 'Certificate not minor.'
							}
							checked={ isCertMinor }
							onChange={ ( value ) => {
								setAttributes( {
									isCertMinor: value,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							multiple
							label={ __( 'Select Country' ) }
							value={ country }
							options={ countries?.map( ( row ) => ( {
								value: row.slug,
								label: row.name,
							} ) ) }
							onChange={ ( newValue ) => {
								return setAttributes( {
									country: newValue,
								} );
							} }
						/>
					</PanelRow>
					{ ( country && 'CAN' === country ) ?? (
						<PanelRow>
							<SelectControl
								multiple
								label={ __( 'Select Province' ) }
								value={ stateProvince }
								options={ statesCan?.map( ( row ) => ( {
									value: row.slug,
									label: row.name,
								} ) ) }
								onChange={ ( newValue ) => {
									return setAttributes( {
										stateProvince: newValue,
									} );
								} }
							/>
						</PanelRow>
					) }
					{ ( country && 'USA' === country ) ?? (
						<PanelRow>
							<SelectControl
								multiple
								label={ __( 'Select State' ) }
								value={ stateProvince }
								options={ statesUsa?.map( ( row ) => ( {
									value: row.slug,
									label: row.name,
								} ) ) }
								onChange={ ( newValue ) => {
									return setAttributes( {
										stateProvince: newValue,
									} );
								} }
							/>
						</PanelRow>
					) }
				</PanelBody>

				<PanelBody
					title={ __( 'Plugin settings', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Submission Success Message' }
							help={
								'Customize the success message displayed when form is submitted.'
							}
							value={ successMsg }
							onChange={ ( value ) =>
								setAttributes( { successMsg: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Enable Test Mode?' }
							help={
								test
									? 'Test mode enabled.'
									: 'Test mode disabled.'
							}
							checked={ test }
							onChange={ ( value ) => {
								setAttributes( {
									test: value,
								} );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
