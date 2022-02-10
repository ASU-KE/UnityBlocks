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
					label={ 'Hide "Application Reqs"' }
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
					label={ 'Hide "Change Major"' }
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
					label={ 'Hide "Affording College"' }
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
					label={ 'Hide "Career Outlook"' }
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
					label={ 'Hide "Example Degrees"' }
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
					label={ 'Hide "Global Opportunity"' }
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
					label={ 'Hide "Attend Online"' }
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
					label={ 'Hide "Program Contact Info"' }
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
					label={ 'Hide "Next Steps"' }
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
			</CardBody>
		</Card>
	);
};

export default HideSectionsSettings;
