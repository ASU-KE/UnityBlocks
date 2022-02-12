// @ts-check

/* eslint camelcase: "off" */

const transformAttributes = ( attributes ) => {
	const {
		appPathFolder,
		endpoint,
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
		anchorExternalAnchorsText,
		anchorExternalAnchorsTargetId,
		heroType,
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
		introContent__videoUrl,
		introContent__videoAltText,
		introContent__videoVttUrl,
		introContent__videoTitle,
		introContent__imageUrl,
		introContent__imageAltText,
		introContent__imageCssClass,
		atAGlance__hide,
		atAGlance__offeredByText,
		atAGlance__offeredByUrl,
		atAGlance__offeredByIsActive,
		atAGlance__locationsTitle,
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
		nextSteps__learnMoreIcon,
		nextSteps__learnMoreTitle,
		nextSteps__learnMoreContent,
		nextSteps__learnMoreButtonLabel,
		nextSteps__learnMoreButtonAria,
		nextSteps__learnMoreButtonUrl,
		nextSteps__learnMoreButtonColor,
		nextSteps__learnMoreButtonSize,
		nextSteps__applyIcon,
		nextSteps__applyTitle,
		nextSteps__applyContent,
		nextSteps__applyButtonLabel,
		nextSteps__applyButtonAria,
		nextSteps__applyButtonUrl,
		nextSteps__applyButtonColor,
		nextSteps__applyButtonSize,
		nextSteps__visitIcon,
		nextSteps__visitTitle,
		nextSteps__visitContent,
		nextSteps__visitButtonLabel,
		nextSteps__visitButtonAria,
		nextSteps__visitButtonUrl,
		nextSteps__visitButtonColor,
		nextSteps__visitButtonSize,
		whyChooseAsu__hide,
		whyChooseAsu__sectionIntroText,
		whyChooseAsu__facultyImageUrl,
		whyChooseAsu__facultyImageAltText,
		whyChooseAsu__facultyImageCss,
		whyChooseAsu__facultyTitle,
		whyChooseAsu__facultyText,
		whyChooseAsu__facultyButtonLabel,
		whyChooseAsu__facultyButtonAria,
		whyChooseAsu__facultyButtonUrl,
		whyChooseAsu__facultyButtonColor,
		whyChooseAsu__facultyButtonSize,
		whyChooseAsu__programsImageUrl,
		whyChooseAsu__programsImageAltText,
		whyChooseAsu__programsImageCss,
		whyChooseAsu__programsTitle,
		whyChooseAsu__programsText,
		whyChooseAsu__programsButtonLabel,
		whyChooseAsu__programsButtonAria,
		whyChooseAsu__programsButtonUrl,
		whyChooseAsu__programsButtonColor,
		whyChooseAsu__programsButtonSize,
		whyChooseAsu__researchImageUrl,
		whyChooseAsu__researchImageAltText,
		whyChooseAsu__researchImageCss,
		whyChooseAsu__researchTitle,
		whyChooseAsu__researchText,
		whyChooseAsu__researchButtonLabel,
		whyChooseAsu__researchButtonAria,
		whyChooseAsu__researchButtonUrl,
		whyChooseAsu__researchButtonColor,
		whyChooseAsu__researchButtonSize,
		whyChooseAsu__inclusionImageUrl,
		whyChooseAsu__inclusionImageAltText,
		whyChooseAsu__inclusionImageCss,
		whyChooseAsu__inclusionTitle,
		whyChooseAsu__inclusionText,
		whyChooseAsu__inclusionButtonLabel,
		whyChooseAsu__inclusionButtonAria,
		whyChooseAsu__inclusionButtonUrl,
		whyChooseAsu__inclusionButtonColor,
		whyChooseAsu__inclusionButtonSize,
		whyChooseAsu__mentorsImageUrl,
		whyChooseAsu__mentorsImageAltText,
		whyChooseAsu__mentorsImageCss,
		whyChooseAsu__mentorsTitle,
		whyChooseAsu__mentorsText,
		whyChooseAsu__mentorsButtonLabel,
		whyChooseAsu__mentorsButtonAria,
		whyChooseAsu__mentorsButtonUrl,
		whyChooseAsu__mentorsButtonColor,
		whyChooseAsu__mentorsButtonSize,
		whyChooseAsu__honorsImageUrl,
		whyChooseAsu__honorsImageAltText,
		whyChooseAsu__honorsImageCss,
		whyChooseAsu__honorsTitle,
		whyChooseAsu__honorsText,
		whyChooseAsu__honorsButtonLabel,
		whyChooseAsu__honorsButtonAria,
		whyChooseAsu__honorsButtonUrl,
		whyChooseAsu__honorsButtonColor,
		whyChooseAsu__honorsButtonSize,
	} = attributes;

	const dataSource = {
		endpoint,
		acadPlan,
	};

	const anchorMenu = {
		atAGlance: anchorAtAGlance,
		applicationRequirements: anchorApplicationRequirements,
		changeMajorRequirements: anchorChangeMajorRequirements,
		nextSteps: anchorNextSteps,
		affordingCollege: anchorAffordingCollege,
		flexibleDegreeOptions: anchorFlexibleDegreeOptions,
		careerOutlook: anchorCareerOutlook,
		exampleCareers: anchorExampleCareers,
		customizeYourCollegeExperience: anchorCustomizeYourCollegeExperience,
		globalOpportunity: anchorGlobalOpportunity,
		attendOnline: anchorAttendOnline,
		programContactInfo: anchorProgramContactInfo,
		externalAnchors: anchorExternalAnchorsText.length
			? anchorExternalAnchorsText.map( ( text, index ) => ( {
					text,
					targetIdName: anchorExternalAnchorsTargetId[ index ],
			  } ) )
			: undefined,
	};

	const hero = heroMediaUrl
		? {
				type: heroType,
				image:
					heroMediaUrl > ''
						? {
								url: heroMediaUrl,
								altText: heroMediaAltText,
								cssClass: heroMediaCssClass
									? heroMediaCssClass.split( ' ' )
									: undefined,
								size: heroMediaSize,
						  }
						: undefined,
				title:
					heroTitleText > ''
						? {
								text: heroTitleText,
								highlightColor: heroTitleHighlightColor,
								maxWidth: heroTitleMaxWidth,
								cssClass: heroTitleCssClass
									? heroTitleCssClass.split( ' ' )
									: undefined,
						  }
						: undefined,
				subTitle:
					heroSubTitleText > ''
						? {
								text: heroSubTitleText,
								highlightColor: heroSubTitleHighlightColor,
								maxWidth: heroSubTitleMaxWidth,
								cssClass: heroSubTitleCssClass
									? heroSubTitleCssClass.split( ' ' )
									: undefined,
						  }
						: undefined,
				contents:
					heroContentsText > ''
						? [
								{
									text: heroContentsText,
									highlightColor: heroContentsHighlightColor,
									maxWidth: heroContentsMaxWidth,
									cssClass: heroContentsCssClass
										? heroContentsCssClass.split( ' ' )
										: undefined,
								},
						  ]
						: undefined,
				contentsColor: heroContentsColor,
		  }
		: undefined;

	const introBreadcrumbs = introContent__breadcrumbsUrl.length
		? introContent__breadcrumbsUrl.map( ( breadcrumbUrl, index ) => ( {
				url: breadcrumbUrl,
				text: introContent__breadcrumbsText[ index ],
				isActive: introContent__breadcrumbsisActive[ index ],
		  } ) )
		: undefined;

	const introText = introContent__contentsText
		? [
				{
					text: introContent__contentsText,
					cssClass: introContent__contentsCssClass,
				},
		  ]
		: undefined;

	const introVideo = introContent__videoUrl
		? {
				type: introContent__videoType,
				url: introContent__videoUrl,
				altText: introContent__videoAltText,
				vttUrl: introContent__videoVttUrl,
				title: introContent__videoTitle,
		  }
		: undefined;

	const introImage = introContent__imageUrl
		? {
				url: introContent__imageUrl,
				altText: introContent__imageAltText,
				cssClass: introContent__imageCssClass
					? introContent__imageCssClass.split( ' ' )
					: undefined,
		  }
		: undefined;

	const introContentSection = {
		hideMarketText: introContent__hideMarketText,
		hideProgramDesc: introContent__hideProgramDesc,
		hideRequiredCourses: introContent__hideRequiredCourses,
		breadcrumbs: introBreadcrumbs,
		contents: introText,
		video: introVideo,
		image: introImage,
	};

	const atAGlance = {
		hide: atAGlance__hide,
		offeredBy: atAGlance__offeredByUrl
			? {
					text: atAGlance__offeredByText,
					url: atAGlance__offeredByUrl,
					isActive: atAGlance__offeredByIsActive,
			  }
			: undefined,
		locations: atAGlance__locationsUrl.length
			? atAGlance__locationsTitle.map( ( text, index ) => ( {
					text,
					url: atAGlance__locationsUrl[ index ],
					isActive: atAGlance__locationsIsActive[ index ],
			  } ) )
			: undefined,
		firstRequirementMathCourse: atAGlance__firstRequirementMathCourse,
		mathIntensity: atAGlance__mathIntensity,
		timeCommitment: atAGlance__timeCommitment,
	};

	return {
		appPathFolder,
		dataSource,
		anchorMenu,
		hero,
		introContentSection,
		atAGlance,
		applicationRequirements: applicationRequirements__hide,
		changeMajorRequirements: changeMajorRequirements__hide,
		affordingCollege: affordingCollege__hide,
		flexibleDegreeOptions: flexibleDegreeOptions__hide,
		careerOutlook: {
			hide: careerOutlook__hide,
			image: careerOutlook__imageUrl
				? {
						url: careerOutlook__imageUrl,
						text: careerOutlook__imageAltText,
						cssClass: careerOutlook__imageCssClass
							? careerOutlook__imageCssClass.split( ' ' )
							: undefined,
				  }
				: undefined,
		},
		exampleCareers: { hide: exampleCareers__hide },
		globalOpportunity: {
			hide: globalOpportunity__hide,
			image: globalOpportunity__imageUrl
				? {
						url: globalOpportunity__imageUrl,
						altText: globalOpportunity__imageAltText,
						cssClass: globalOpportunity__imageCssClass
							? globalOpportunity__imageCssClass.split( ' ' )
							: undefined,
				  }
				: undefined,
		},
		attendOnline: {
			hide: attendOnline__hide,
			image: attendOnline__imageUrl
				? {
						url: attendOnline__imageUrl,
						altText: attendOnline__imageAltText,
						cssClass: attendOnline__imageCssClass
							? attendOnline__imageCssClass.split( ' ' )
							: undefined,
				  }
				: undefined,
		},
		programContactInfo: {
			hide: programContactInfo__hide,
			department: programContactInfo__department,
			email: programContactInfo__email,
		},
		nextSteps: {
			hide: nextSteps__hide,
			cards: {
				learnMore: nextSteps__learnMoreTitle
					? {
							icon: [ nextSteps__learnMoreIcon ],
							title: nextSteps__learnMoreTitle,
							content: nextSteps__learnMoreContent,
							buttonLink: {
								label: nextSteps__learnMoreButtonLabel,
								ariaLabel: nextSteps__learnMoreButtonAria,
								url: nextSteps__learnMoreButtonUrl,
								color: nextSteps__learnMoreButtonColor,
								size: nextSteps__learnMoreButtonSize,
							},
					  }
					: undefined,
				apply: nextSteps__applyTitle
					? {
							icon: [ nextSteps__applyIcon ],
							title: nextSteps__applyTitle,
							content: nextSteps__applyContent,
							buttonLink: {
								label: nextSteps__applyButtonLabel,
								ariaLabel: nextSteps__applyButtonAria,
								url: nextSteps__applyButtonUrl,
								color: nextSteps__applyButtonColor,
								size: nextSteps__applyButtonSize,
							},
					  }
					: undefined,
				visit: nextSteps__visitTitle
					? {
							icon: [ nextSteps__visitIcon ],
							title: nextSteps__visitTitle,
							content: nextSteps__visitContent,
							buttonLink: {
								label: nextSteps__visitButtonLabel,
								ariaLabel: nextSteps__visitButtonAria,
								url: nextSteps__visitButtonUrl,
								color: nextSteps__visitButtonColor,
								size: nextSteps__visitButtonSize,
							},
					  }
					: undefined,
			},
		},
		whyChooseAsu: {
			hide: whyChooseAsu__hide,
			sectionIntroText: whyChooseAsu__sectionIntroText,
			cards: {
				faculty: whyChooseAsu__facultyTitle
					? {
							image: {
								url: whyChooseAsu__facultyImageUrl,
								altText: whyChooseAsu__facultyImageAltText,
								cssClass: whyChooseAsu__facultyImageCss,
							},
							title: whyChooseAsu__facultyTitle,
							text: whyChooseAsu__facultyText,
							button: {
								label: whyChooseAsu__facultyButtonLabel,
								ariaLabel: whyChooseAsu__facultyButtonAria,
								url: whyChooseAsu__facultyButtonUrl,
								color: whyChooseAsu__facultyButtonColor,
								size: whyChooseAsu__facultyButtonSize,
							},
					  }
					: undefined,
				programs: whyChooseAsu__programsTitle
					? {
							image: {
								url: whyChooseAsu__programsImageUrl,
								altText: whyChooseAsu__programsImageAltText,
								cssClass: whyChooseAsu__programsImageCss,
							},
							title: whyChooseAsu__programsTitle,
							text: whyChooseAsu__programsText,
							button: {
								label: whyChooseAsu__programsButtonLabel,
								ariaLabel: whyChooseAsu__programsButtonAria,
								url: whyChooseAsu__programsButtonUrl,
								color: whyChooseAsu__programsButtonColor,
								size: whyChooseAsu__programsButtonSize,
							},
					  }
					: undefined,
				research: whyChooseAsu__researchTitle
					? {
							image: {
								url: whyChooseAsu__researchImageUrl,
								altText: whyChooseAsu__researchImageAltText,
								cssClass: whyChooseAsu__researchImageCss,
							},
							title: whyChooseAsu__researchTitle,
							text: whyChooseAsu__researchText,
							button: {
								label: whyChooseAsu__researchButtonLabel,
								ariaLabel: whyChooseAsu__researchButtonAria,
								url: whyChooseAsu__researchButtonUrl,
								color: whyChooseAsu__researchButtonColor,
								size: whyChooseAsu__researchButtonSize,
							},
					  }
					: undefined,
				inclusion: whyChooseAsu__inclusionTitle
					? {
							image: {
								url: whyChooseAsu__inclusionImageUrl,
								altText: whyChooseAsu__inclusionImageAltText,
								cssClass: whyChooseAsu__inclusionImageCss,
							},
							title: whyChooseAsu__inclusionTitle,
							text: whyChooseAsu__inclusionText,
							button: {
								label: whyChooseAsu__inclusionButtonLabel,
								ariaLabel: whyChooseAsu__inclusionButtonAria,
								url: whyChooseAsu__inclusionButtonUrl,
								color: whyChooseAsu__inclusionButtonColor,
								size: whyChooseAsu__inclusionButtonSize,
							},
					  }
					: undefined,
				mentors: whyChooseAsu__mentorsTitle
					? {
							image: {
								url: whyChooseAsu__mentorsImageUrl,
								altText: whyChooseAsu__mentorsImageAltText,
								cssClass: whyChooseAsu__mentorsImageCss,
							},
							title: whyChooseAsu__mentorsTitle,
							text: whyChooseAsu__mentorsText,
							button: {
								label: whyChooseAsu__mentorsButtonLabel,
								ariaLabel: whyChooseAsu__mentorsButtonAria,
								url: whyChooseAsu__mentorsButtonUrl,
								color: whyChooseAsu__mentorsButtonColor,
								size: whyChooseAsu__mentorsButtonSize,
							},
					  }
					: undefined,
				honors: whyChooseAsu__honorsTitle
					? {
							image: {
								url: whyChooseAsu__honorsImageUrl,
								altText: whyChooseAsu__honorsImageAltText,
								cssClass: whyChooseAsu__honorsImageCss,
							},
							title: whyChooseAsu__honorsTitle,
							text: whyChooseAsu__honorsText,
							button: {
								label: whyChooseAsu__honorsButtonLabel,
								ariaLabel: whyChooseAsu__honorsButtonAria,
								url: whyChooseAsu__honorsButtonUrl,
								color: whyChooseAsu__honorsButtonColor,
								size: whyChooseAsu__honorsButtonSize,
							},
					  }
					: undefined,
			},
		},
	};
};

export { transformAttributes };
