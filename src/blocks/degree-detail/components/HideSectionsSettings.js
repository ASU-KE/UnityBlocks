/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import {
	Card,
	CardBody,
	CardHeader,
	ToggleControl,
} from '@wordpress/components';

/**
 * Block controls
 *
 * @param {Object} props
 */
const HideSectionsSettings = ( props ) => {
	const {
		attributes: {
			atAGlance__hide,
			applicationRequirements__hide,
			changeMajorRequirements__hide,
			affordingCollege__hide,
			flexibleDegreeOptions__hide,
			careerOutlook__hide,
			exampleCareers__hide,
			globalOpportunity__hide,
			attendOnline__hide,
			programContactInfo__hide,
			nextSteps__hide,
			whyChooseAsu__hide,
		},
		setAttributes,
	} = props;

	return (
		<Card>
			<CardHeader>
				<h2>Hide undesired content sections</h2>
			</CardHeader>

			<CardBody>
				<ToggleControl
					label={ 'Hide "At a Glance" section' }
					help={
						atAGlance__hide
							? '"At a Glance" hidden.'
							: '"At a Glance" enabled.'
					}
					checked={ atAGlance__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							atAGlance__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Application Reqs" section' }
					help={
						applicationRequirements__hide
							? '"Application Reqs" hidden.'
							: '"Application Reqs" enabled.'
					}
					checked={ applicationRequirements__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							applicationRequirements__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Change Major" section' }
					help={
						changeMajorRequirements__hide
							? '"Change Major" hidden.'
							: '"Change Major" enabled.'
					}
					checked={ changeMajorRequirements__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							changeMajorRequirements__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Affording College" section' }
					help={
						affordingCollege__hide
							? '"Affording College" hidden.'
							: '"Affording College" enabled.'
					}
					checked={ affordingCollege__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							affordingCollege__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Flexible Degree Options" section' }
					help={
						flexibleDegreeOptions__hide
							? '"Flexible Degree Options" hidden.'
							: '"Flexible Degree Options" enabled.'
					}
					checked={ flexibleDegreeOptions__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							flexibleDegreeOptions__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Career Outlook" section' }
					help={
						careerOutlook__hide
							? '"Career Outlook" hidden.'
							: '"Career Outlook" enabled.'
					}
					checked={ careerOutlook__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							careerOutlook__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Example Degrees" section' }
					help={
						exampleCareers__hide
							? '"Example Degrees" hidden.'
							: '"Example Degrees" enabled.'
					}
					checked={ exampleCareers__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							exampleCareers__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Global Opportunity" section' }
					help={
						globalOpportunity__hide
							? '"Global Opportunity" hidden.'
							: '"Global Opportunity" enabled.'
					}
					checked={ globalOpportunity__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							globalOpportunity__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Attend Online" section' }
					help={
						attendOnline__hide
							? '"Attend Online" hidden.'
							: '"Attend Online" enabled.'
					}
					checked={ attendOnline__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							attendOnline__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Program Contact Info" section' }
					help={
						programContactInfo__hide
							? '"Program Contact Info" hidden.'
							: '"Program Contact Info" enabled.'
					}
					checked={ programContactInfo__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							programContactInfo__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Next Steps" section' }
					help={
						nextSteps__hide
							? '"Next Steps" hidden.'
							: '"Next Steps" enabled.'
					}
					checked={ nextSteps__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							nextSteps__hide: newValue,
						} );
					} }
				/>
				<ToggleControl
					label={ 'Hide "Why Choose ASU" section' }
					help={
						whyChooseAsu__hide
							? '"Why Choose ASU" hidden.'
							: '"Why Choose ASU" enabled.'
					}
					checked={ whyChooseAsu__hide }
					onChange={ ( newValue ) => {
						setAttributes( {
							whyChooseAsu__hide: newValue,
						} );
					} }
				/>
			</CardBody>
		</Card>
	);
};

export default HideSectionsSettings;
