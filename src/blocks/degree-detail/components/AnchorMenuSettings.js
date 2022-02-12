/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	Card,
	CardBody,
	IconButton,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

/**
 * Block controls
 *
 * @param {Object} props
 */
const AnchorMenuSettings = ( props ) => {
	const {
		attributes: {
			anchorAtAGlance,
			anchorApplicationRequirements,
			anchorChangeMajorRequirements,
			anchorNextSteps,
			anchorAffordingCollege,
			anchorFlexibleDegreeOptions,
			anchorCareerOutlook,
			anchorExampleCareers,
			anchorCustomizeYourCollegeExperience,
			anchorGlobalOpportunity,
			anchorAttendOnline,
			anchorProgramContactInfo,
		},
		setAttributes,
	} = props;

	const handleAddLink = () => {
		const linkText = [ ...props.attributes.anchorExternalAnchorsText ];
		const linkTargetId = [
			...props.attributes.anchorExternalAnchorsTargetId,
		];

		linkText.push( '' );
		linkTargetId.push( '' );

		props.setAttributes( {
			anchorExternalAnchorsText: linkText,
			anchorExternalAnchorsTargetId: linkTargetId,
		} );
	};

	const handleRemoveLink = ( index ) => {
		const linkText = [ ...props.attributes.anchorExternalAnchorsText ];
		const linkTargetId = [
			...props.attributes.anchorExternalAnchorsTargetId,
		];

		linkText.splice( index, 1 );
		linkTargetId.splice( index, 1 );

		props.setAttributes( {
			anchorExternalAnchorsText: linkText,
			anchorExternalAnchorsTargetId: linkTargetId,
		} );
	};

	const handleTextChange = ( text, index ) => {
		const linkText = [ ...props.attributes.anchorExternalAnchorsText ];
		linkText[ index ] = text;
		props.setAttributes( { anchorExternalAnchorsText: linkText } );
	};

	const handleTargetIdChange = ( link, index ) => {
		const linkTargetId = [
			...props.attributes.anchorExternalAnchorsTargetId,
		];
		linkTargetId[ index ] = link;
		props.setAttributes( { anchorExternalAnchorsTargetId: linkTargetId } );
	};

	let links;

	if ( props.attributes.anchorExternalAnchorsText.length ) {
		links = props.attributes.anchorExternalAnchorsText.map(
			( text, index ) => {
				return (
					<CardBody key={ index }>
						<TextControl
							label={ 'Link text' }
							value={
								props.attributes.anchorExternalAnchorsText[
									index
								]
							}
							onChange={ ( newValue ) =>
								handleTextChange( newValue, index )
							}
						/>
						<TextControl
							label={ 'Link target id' }
							value={
								props.attributes.anchorExternalAnchorsTargetId[
									index
								]
							}
							onChange={ ( newValue ) =>
								handleTargetIdChange( newValue, index )
							}
						/>
						<IconButton
							icon="no-alt"
							label="Delete item"
							onClick={ () => handleRemoveLink( index ) }
						/>
					</CardBody>
				);
			}
		);
	}

	return (
		<>
			<h2>Configure anchor menu links</h2>
			<Card size={ 'small' } style={ { width: '50%' } }>
				<CardBody>
					<ToggleControl
						label={ 'Enable "At a Glance"' }
						help={ anchorAtAGlance ? 'Enabled.' : 'Disabled.' }
						checked={ anchorAtAGlance }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorAtAGlance: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Application Requirements" link' }
						help={
							anchorApplicationRequirements
								? 'Enabled.'
								: 'Disabled.'
						}
						checked={ anchorApplicationRequirements }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorApplicationRequirements: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Change Major Requirements" link' }
						help={
							anchorChangeMajorRequirements
								? 'Enabled.'
								: 'Disabled.'
						}
						checked={ anchorChangeMajorRequirements }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorChangeMajorRequirements: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Next Steps" link' }
						help={ anchorNextSteps ? 'Enabled.' : 'Disabled.' }
						checked={ anchorNextSteps }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorNextSteps: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Affording College" link' }
						help={
							anchorAffordingCollege ? 'Enabled.' : 'Disabled.'
						}
						checked={ anchorAffordingCollege }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorAffordingCollege: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Flexible Degree Options" link' }
						help={
							anchorFlexibleDegreeOptions
								? 'Enabled.'
								: 'Disabled.'
						}
						checked={ anchorFlexibleDegreeOptions }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorFlexibleDegreeOptions: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Career Outlook" link' }
						help={ anchorCareerOutlook ? 'Enabled.' : 'Disabled.' }
						checked={ anchorCareerOutlook }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorCareerOutlook: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Example Careers" link' }
						help={ anchorExampleCareers ? 'Enabled.' : 'Disabled.' }
						checked={ anchorExampleCareers }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorExampleCareers: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={
							'Enable "Customize Your College Experience" link'
						}
						help={
							anchorCustomizeYourCollegeExperience
								? 'Enabled.'
								: 'Disabled.'
						}
						checked={ anchorCustomizeYourCollegeExperience }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorCustomizeYourCollegeExperience: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Global Opportunity" link' }
						help={
							anchorGlobalOpportunity ? 'Enabled.' : 'Disabled.'
						}
						checked={ anchorGlobalOpportunity }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorGlobalOpportunity: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Attend Online" link' }
						help={ anchorAttendOnline ? 'Enabled.' : 'Disabled.' }
						checked={ anchorAttendOnline }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorAttendOnline: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<ToggleControl
						label={ 'Enable "Program Contact Info" link' }
						help={
							anchorProgramContactInfo ? 'Enabled.' : 'Disabled.'
						}
						checked={ anchorProgramContactInfo }
						onChange={ ( newValue ) => {
							setAttributes( {
								anchorProgramContactInfo: newValue,
							} );
						} }
					/>
				</CardBody>

				<CardBody>
					<h4>Add custom menu links</h4>
				</CardBody>
				{ links }
				<CardBody>
					<Button isDefault onClick={ handleAddLink.bind( this ) }>
						{ __( 'Add Location' ) }
					</Button>
				</CardBody>
			</Card>
		</>
	);
};

export default AnchorMenuSettings;
