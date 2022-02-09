/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	Button,
	Card,
	CardBody,
	CardDivider,
	CardFooter,
	CardHeader,
	CardMedia,
	IconButton,
	RadioControl,
	ResponsiveWrapper,
	RichText,
	TabPanel,
	TextControl,
	ToggleControl,
	Toolbar,
} from '@wordpress/components';

/**
 * Block dependencies
 */

import icon from './icon';

/**
 * Block controls
 *
 * @param {Object} props
 */
const Controls = ( props ) => {
	const {
		attributes: {
			acadPlan,
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
			// anchorExternalAnchors,
			heroType,
			heroMediaId,
			heroMediaUrl,
			heroMediaAltText,
			heroMediaCssClass,
			heroMediaSize,
			heroSubTitleText,
			heroSubTitleHighlightColor,
			heroSubTitleMaxWidth,
			heroSubTitleCssClass,
			heroTitleText,
			heroTitleHighlightColor,
			heroTitleMaxWidth,
			heroTitleCssClass,
			heroContentsText,
			heroContentsMaxWidth,
			heroContentsCssClass,
			heroContentsHighlightColor,
			heroContentsColor,
			introContent__hideMarketText,
			introContent__hideProgramDesc,
			introContent__hideRequiredCourses,
			introContent__breadcrumbsUrl,
			introContent__breadcrumbsText,
			introContent__breadcrumbsisActive,
			introContent__contentsText,
			introContent__contentsCssClass,
			introContent__videoType,
			introContent__videoId,
			introContent__videoUrl,
			introContent__videoAltText,
			introContent__videoVttUrl,
			introContent__videoTitle,
			introContent__imageId,
			introContent__imageUrl,
			introContent__imageAltText,
			introContent__imageCssClass,
			atAGlance__hide,
			atAGlance__offeredByText,
			atAGlance__offeredByUrl,
			atAGlance__offeredByIsActive,
			atAGlance__locationsText,
			atAGlance__locationsUrl,
			atAGlance__locationsIsActive,
			atAGlance__firstRequirementMathCourse,
			atAGlance__mathIntensity,
			atAGlance__timeCommitment,
			applicationRequirements__hide,
			changeMajorRequirements__hide,
			affordingCollege__hide,
			flexibleDegreeOptions__hide,
			careerOutlook__hide,
			careerOutlook__imageUrl,
			careerOutlook__imageAltText,
			careerOutlook__imageCssClass,
			exampleCareers__hide,
			globalOpportunity__hide,
			globalOpportunity__imageUrl,
			globalOpportunity__imageAltText,
			globalOpportunity__imageCssClass,
			attendOnline__hide,
			attendOnline__imageUrl,
			attendOnline__imageAltText,
			attendOnline__imageCssClass,
			programContactInfo__hide,
			programContactInfo__department,
			programContactInfo__email,
			nextSteps__hide,
			whyChooseAsu__hide,
			whyChooseAsu__sectionIntroText,
		},
		className,
		setAttributes,
	} = props;

	// const onSelect = ( tabName ) => {};

	return (
		<>
			<TabPanel
				className="my-tab-panel"
				orientation={ 'horizontal' }
				// activeClass="active-tab"
				// onSelect={ onSelect }
				tabs={ [
					{
						name: 'degree-settings',
						title: 'Degree',
						className: '',
					},
					{
						name: 'anchor-menu',
						title: 'Anchor Menu',
						className: '',
					},
					{
						name: 'hero-settings',
						title: 'Hero',
						className: '',
					},
					{
						name: 'intro-content',
						title: 'Introduction',
						className: '',
					},
					{
						name: 'hide-sections',
						title: 'Hide Sections',
						className: '',
					},
					{
						name: 'override-images',
						title: 'Override images',
						className: '',
					},
					{
						name: 'at-a-glance',
						title: 'At a Glance',
						className: '',
					},
					{
						name: 'program-contacts',
						title: 'Program Contacts',
						className: '',
					},
					{
						name: 'next-steps',
						title: 'Next steps',
						className: '',
					},
					{
						name: 'why-choose-asu',
						title: 'Why ASU',
						className: '',
					},
				] }
			>
				{ ( tab ) => {
					if ( 'degree-settings' === tab.name ) {
						return (
							<Card>
								<CardHeader>
									<h2>Degree Code</h2>
								</CardHeader>
								<CardBody>
									<TextControl
										label={ 'Academic Plan Code' }
										value={ acadPlan }
										onChange={ ( newValue ) =>
											setAttributes( {
												acadPlan: newValue,
											} )
										}
									/>
								</CardBody>
							</Card>
						);
					}

					if ( 'anchor-menu' === tab.name ) {
						return (
							<Card>
								<CardHeader>
									<h2>CardHeader</h2>
								</CardHeader>
								<CardBody>
									<p>CardBody</p>
								</CardBody>
								<CardBody>
									<p>CardBody (before CardDivider)</p>
								</CardBody>
								<CardDivider />
								<CardBody>
									<p>CardBody (after CardDivider)</p>
								</CardBody>
								<CardMedia>
									<img
										alt="Card Media"
										src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80"
									/>
								</CardMedia>
								<CardFooter>
									<p>CardFooter</p>
									<Button variant="secondary">
										Action Button
									</Button>
								</CardFooter>
							</Card>
						);
					}

					if ( 'hero-settings' === tab.name ) {
						const onSelectHeroMedia = ( media ) => {
							props.setAttributes( {
								heroMediaId: media.id,
								heroMediaUrl: media.url,
								heroMediaAltText: media.alt,
							} );
						};

						return (
							<>
								{ heroMediaId !== 0 && (
									<BlockControls>
										<Toolbar>
											<MediaUploadCheck>
												<MediaUpload
													value={ heroMediaId }
													onSelect={
														onSelectHeroMedia
													}
													allowedTypes={ [ 'image' ] }
													render={ ( { open } ) => (
														<IconButton
															className="components-toolbar__control"
															label={ __(
																'Edit image',
																'unityblocks'
															) }
															icon="edit"
															onClick={ open }
														/>
													) }
												/>
											</MediaUploadCheck>
										</Toolbar>
									</BlockControls>
								) }

								<Card elevation={ 0 } size={ 'small' }>
									<CardHeader>
										<h2>Configure the page Hero</h2>
									</CardHeader>

									<CardBody>
										<RadioControl
											label={ __(
												'Type',
												'unityblocks'
											) }
											selected={ heroType }
											options={ [
												{
													label: __(
														'Standard',
														'unityblocks'
													),
													value: 'heading-hero',
												},
												{
													label: __(
														'Story (Not Implemented)',
														'unityblocks'
													),
													value: 'story-hero',
												},
											] }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroType: newValue,
												} )
											}
										/>
									</CardBody>

									<CardBody>
										<RadioControl
											label={ __(
												'Size',
												'unityblocks'
											) }
											selected={ heroMediaSize }
											options={ [
												{
													label: __(
														'Small (1920x256)',
														'unityblocks'
													),
													value: 'small',
												},
												{
													label: __(
														'Medium (1920x512)',
														'unityblocks'
													),
													value: 'medium',
												},
												{
													label: __(
														'Large (1920x640)',
														'unityblocks'
													),
													value: 'large',
												},
											] }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroMediaSize: newValue,
												} )
											}
										/>
									</CardBody>

									<CardBody>
										<TextControl
											label={ 'Hero CSS classes' }
											help="Separate multiple classes with spaces."
											value={ heroMediaCssClass }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroMediaCssClass: newValue,
												} )
											}
										/>
									</CardBody>

									{ heroMediaId === 0 && (
										<CardBody>
											<MediaUploadCheck>
												<MediaPlaceholder
													labels={ {
														title: __(
															'Hero image',
															'unityblocks'
														),
														instructions: __(
															'Drag image, upload a new one or select file from your library.',
															'unityblocks'
														),
													} }
													icon={ icon }
													accept="images/*"
													onSelect={
														onSelectHeroMedia
													}
												/>
											</MediaUploadCheck>
										</CardBody>
									) }
									{ heroMediaId !== 0 && (
										<CardMedia>
											<img
												alt={ heroMediaAltText }
												src={ heroMediaUrl }
											/>
										</CardMedia>
									) }

									<CardDivider />

									<CardBody>
										<TextControl
											label={ 'Title text' }
											placeholder="Text"
											value={ heroTitleText }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroTitleText: newValue,
												} )
											}
										/>
										<RadioControl
											label={ __(
												'Title highlight color',
												'unityblocks'
											) }
											selected={ heroTitleHighlightColor }
											options={ [
												{
													label: __(
														'Gold',
														'unityblocks'
													),
													value: 'gold',
												},
												{
													label: __(
														'White',
														'unityblocks'
													),
													value: 'white',
												},
												{
													label: __(
														'Black',
														'unityblocks'
													),
													value: 'black',
												},
											] }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroTitleHighlightColor: newValue,
												} )
											}
										/>
										<TextControl
											label={ 'Title max width' }
											placeholder="e.g. 0px"
											value={ heroTitleMaxWidth }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroTitleMaxWidth: newValue,
												} )
											}
										/>
										<TextControl
											label={ 'Title CSS classes' }
											help="Separate multiple classes with spaces."
											value={ heroTitleCssClass }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroTitleCssClass: newValue,
												} )
											}
										/>
									</CardBody>

									<CardDivider />

									<CardBody>
										<TextControl
											label={ 'Subtitle text' }
											placeholder="Text"
											value={ heroSubTitleText }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroSubTitleText: newValue,
												} )
											}
										/>
										<RadioControl
											label={ __(
												'Subtitle highlight color',
												'unityblocks'
											) }
											selected={
												heroSubTitleHighlightColor
											}
											options={ [
												{
													label: __(
														'Gold',
														'unityblocks'
													),
													value: 'gold',
												},
												{
													label: __(
														'White',
														'unityblocks'
													),
													value: 'white',
												},
												{
													label: __(
														'Black',
														'unityblocks'
													),
													value: 'black',
												},
											] }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroSubTitleHighlightColor: newValue,
												} )
											}
										/>
										<TextControl
											label={ 'Subtitle max width' }
											placeholder="e.g. 0px"
											value={ heroSubTitleMaxWidth }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroSubTitleMaxWidth: newValue,
												} )
											}
										/>
										<TextControl
											label={ 'Subtitle CSS classes' }
											help="Separate multiple classes with spaces."
											value={ heroSubTitleCssClass }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroSubTitleCssClass: newValue,
												} )
											}
										/>
									</CardBody>

									<CardDivider />

									<CardBody>
										<TextControl
											label={ 'Contents text' }
											value={ heroContentsText }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroContentsText: newValue,
												} )
											}
										/>
										<RadioControl
											label={ __(
												'Contents text color',
												'unityblocks'
											) }
											selected={ heroContentsColor }
											options={ [
												{
													label: __(
														'White',
														'unityblocks'
													),
													value: 'white',
												},
												{
													label: __(
														'Gold',
														'unityblocks'
													),
													value: 'gold',
												},
												{
													label: __(
														'Black',
														'unityblocks'
													),
													value: 'black',
												},
											] }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroContentsColor: newValue,
												} )
											}
										/>
										<RadioControl
											label={ __(
												'Contents highlight color',
												'unityblocks'
											) }
											selected={
												heroContentsHighlightColor
											}
											options={ [
												{
													label: __(
														'White',
														'unityblocks'
													),
													value: 'white',
												},
												{
													label: __(
														'Gold',
														'unityblocks'
													),
													value: 'gold',
												},
												{
													label: __(
														'Black',
														'unityblocks'
													),
													value: 'black',
												},
											] }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroContentsHighlightColor: newValue,
												} )
											}
										/>
										<TextControl
											label={ 'Contents max width' }
											placeholder="e.g. 0px"
											value={ heroContentsMaxWidth }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroContentsMaxWidth: newValue,
												} )
											}
										/>
										<TextControl
											label={ 'Contents CSS classes' }
											help="Separate multiple classes with spaces."
											value={ heroContentsCssClass }
											onChange={ ( newValue ) =>
												setAttributes( {
													heroContentsCssClass: newValue,
												} )
											}
										/>
									</CardBody>
								</Card>
							</>
						);
					}

					if ( 'intro-content' === tab.name ) {
						return (
							<Card>
								<CardHeader>
									<h2>
										Configure the Introduction content
										section
									</h2>
								</CardHeader>
								<CardBody>
									<ToggleControl
										label={ 'Hide "Market Text"' }
										help={
											introContent__hideMarketText
												? '"Market Text" hidden.'
												: '"Market Text" enabled.'
										}
										checked={ introContent__hideMarketText }
										onChange={ ( newValue ) => {
											setAttributes( {
												introContent__hideMarketText: newValue,
											} );
										} }
									/>
									<ToggleControl
										label={ 'Hide "Program Description"' }
										help={
											introContent__hideProgramDesc
												? '"Program Description" hidden.'
												: '"Program Description" enabled.'
										}
										checked={
											introContent__hideProgramDesc
										}
										onChange={ ( newValue ) => {
											setAttributes( {
												introContent__hideProgramDesc: newValue,
											} );
										} }
									/>
									<ToggleControl
										label={ 'Hide "Required Courses"' }
										help={
											introContent__hideRequiredCourses
												? '"Required Courses" hidden.'
												: '"Required Courses" enabled.'
										}
										checked={
											introContent__hideRequiredCourses
										}
										onChange={ ( newValue ) => {
											setAttributes( {
												introContent__hideRequiredCourses: newValue,
											} );
										} }
									/>
								</CardBody>
								<CardBody>
									{ /* <RichText
										tagName="div"
										className="card-content"
										multiline="p"
										value={ introContent__contentsText }
										onChange={ ( newValue ) =>
											setAttributes( {
												introContent__contentsText: newValue,
											} )
										}
										placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
									/> */ }
								</CardBody>
								<CardBody>
									<TextControl
										label={ 'Content CSS classes' }
										help="Separate multiple classes with spaces."
										value={ introContent__contentsCssClass }
										onChange={ ( newValue ) =>
											setAttributes( {
												introContent__contentsCssClass: newValue,
											} )
										}
									/>
								</CardBody>

								{ introContent__videoId === 0 &&
									introContent__imageId === 0 && (
										<CardBody>
											<MediaUploadCheck>
												<MediaPlaceholder
													labels={ {
														title: __(
															'Introduction image or video',
															'unityblocks'
														),
														instructions: __(
															'Drag file, upload a new one or select file from your library.',
															'unityblocks'
														),
													} }
													icon={ icon }
													accept="images/*,video/*"
													onSelect={
														onSelectIntroMedia
													}
												/>
											</MediaUploadCheck>
										</CardBody>
									) }
								{ introContent__imageId !== 0 && (
									<CardMedia>
										<img
											alt={ introContent__imageAltText }
											src={ introContent__imageUrl }
										/>
									</CardMedia>
								) }
								{ introContent__videoId !== 0 && (
									<CardMedia>
										<video controls width="250">
											<source
												src={ introContent__videoUrl }
												type="video/mp4"
											/>
											Sorry, your browser doesnt support
											embedded videos.
										</video>
									</CardMedia>
								) }
							</Card>
						);
					}

					if ( 'hide-sections' === tab.name ) {
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
										checked={
											applicationRequirements__hide
										}
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
										checked={
											changeMajorRequirements__hide
										}
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
					}

					if ( 'override-images' === tab.name ) {
						return (
							<Card>
								<CardHeader>
									<h2>Override section images</h2>
								</CardHeader>
								<CardBody>
									<TextControl
										label={ 'Academic Plan Code' }
										value={ acadPlan }
										onChange={ ( newValue ) =>
											setAttributes( {
												acadPlan: newValue,
											} )
										}
									/>
								</CardBody>
							</Card>
						);
					}

					if ( 'at-a-glance' === tab.name ) {
						return (
							<Card>
								<CardHeader>
									<h2>Configure At a Glance section</h2>
								</CardHeader>
								<CardBody>
									<TextControl
										label={ 'Academic Plan Code' }
										value={ acadPlan }
										onChange={ ( newValue ) =>
											setAttributes( {
												acadPlan: newValue,
											} )
										}
									/>
								</CardBody>
							</Card>
						);
					}

					if ( 'program-contacts' === tab.name ) {
						return (
							<Card>
								<CardHeader>
									<h2>Configure program contacts</h2>
								</CardHeader>
								<CardBody>
									<TextControl
										label={ 'Academic Plan Code' }
										value={ acadPlan }
										onChange={ ( newValue ) =>
											setAttributes( {
												acadPlan: newValue,
											} )
										}
									/>
								</CardBody>
							</Card>
						);
					}

					if ( 'next-steps' === tab.name ) {
						return (
							<Card>
								<CardHeader>
									<h2>Configure Next Steps</h2>
								</CardHeader>
								<CardBody>
									<TextControl
										label={ 'Academic Plan Code' }
										value={ acadPlan }
										onChange={ ( newValue ) =>
											setAttributes( {
												acadPlan: newValue,
											} )
										}
									/>
								</CardBody>
							</Card>
						);
					}

					if ( 'why-choose-asu' === tab.name ) {
						return (
							<Card>
								<CardHeader>
									<h2>Configure Why Choose ASU</h2>
								</CardHeader>
								<CardBody>
									<TextControl
										label={ 'Academic Plan Code' }
										value={ acadPlan }
										onChange={ ( newValue ) =>
											setAttributes( {
												acadPlan: newValue,
											} )
										}
									/>
								</CardBody>
							</Card>
						);
					}

					return <h2>An Unexpected error has occurred!</h2>;
				} }
			</TabPanel>
		</>
	);
};

export default Controls;
