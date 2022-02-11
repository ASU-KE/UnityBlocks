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
		nextSteps__cardsIcon,
		nextSteps__cardsTitle,
		nextSteps__cardsContent,
		nextSteps__cardsButtonIcon,
		nextSteps__cardsButtonLabel,
		nextSteps__cardsButtonUrl,
		nextSteps__cardsButtonColor,
		nextSteps__cardsButtonSize,
		whyChooseAsu__hide,
		whyChooseAsu__sectionIntroText,
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
		externalAnchors: anchorExternalAnchorsText.map( ( text, index ) => ( {
			text,
			targetIdName: anchorExternalAnchorsTargetId[ index ],
		} ) ),
	};

	const hero = {
		type: heroType,
		image: {
			url: heroMediaUrl,
			altText: heroMediaAltText,
			cssClass: heroMediaCssClass.split( ' ' ),
			size: heroMediaSize,
		},
		title: {
			text: heroTitleText,
			highlightColor: heroTitleHighlightColor,
			maxWidth: heroTitleMaxWidth,
			cssClass: heroTitleCssClass.split( ' ' ),
		},
		subTitle: {
			text: heroSubTitleText,
			highlightColor: heroSubTitleHighlightColor,
			maxWidth: heroSubTitleMaxWidth,
			cssClass: heroSubTitleCssClass.split( ' ' ),
		},
		contents: [
			{
				text: heroContentsText,
				highlightColor: heroContentsHighlightColor,
				maxWidth: heroContentsMaxWidth,
				cssClass: heroContentsCssClass.split( ' ' ),
			},
		],
		contentsColor: heroContentsColor,
	};

	const introBreadcrumbs = introContent__breadcrumbsUrl.map(
		( breadcrumbUrl, index ) => ( {
			url: breadcrumbUrl,
			text: introContent__breadcrumbsText[ index ],
			isActive: introContent__breadcrumbsisActive[ index ],
		} )
	);

	const introText = [
		{
			text: introContent__contentsText,
			cssClass: introContent__contentsCssClass,
		},
	];

	const introVideo = {
		type: introContent__videoType,
		url: introContent__videoUrl,
		altText: introContent__videoAltText,
		vttUrl: introContent__videoVttUrl,
		title: introContent__videoTitle,
	};

	const introImage = {
		url: introContent__imageUrl,
		altText: introContent__imageAltText,
		cssClass: introContent__imageCssClass.split( ' ' ),
	};

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
		offeredBy: {
			text: atAGlance__offeredByText,
			url: atAGlance__offeredByUrl,
			isActive: atAGlance__offeredByIsActive,
		},
		locations: atAGlance__locationsTitle.map( ( locationText, index ) => ( {
			text: locationText,
			url: atAGlance__locationsUrl[ index ],
			isActive: atAGlance__locationsIsActive[ index ],
		} ) ),
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
			image: {
				url: careerOutlook__imageUrl,
				text: careerOutlook__imageAltText,
				cssClass: careerOutlook__imageCssClass.split( ' ' ),
			},
		},
		exampleCareers: { hide: exampleCareers__hide },
		globalOpportunity: {
			hide: globalOpportunity__hide,
			image: {
				url: globalOpportunity__imageUrl,
				altText: globalOpportunity__imageAltText,
				cssClass: globalOpportunity__imageCssClass.split( ' ' ),
			},
		},
		attendOnline: {
			hide: attendOnline__hide,
			image: {
				url: attendOnline__imageUrl,
				altText: attendOnline__imageAltText,
				cssClass: attendOnline__imageCssClass.split( ' ' ),
			},
		},
		programContactInfo: {
			hide: programContactInfo__hide,
			department: programContactInfo__department,
			email: programContactInfo__email,
		},
		nextSteps: {
			hide: nextSteps__hide,
			cards: nextSteps__cardsTitle.map( ( cardTitle, index ) => ( {
				title: cardTitle,
				icon: nextSteps__cardsIcon[ index ],
				content: nextSteps__cardsContent[ index ],
				buttonLink: nextSteps__cardsButtonUrl.map( ( url, index ) => ( {
					url,
					label: nextSteps__cardsButtonLabel[ index ],
					icon: nextSteps__cardsButtonIcon[ index ],
					color: nextSteps__cardsButtonColor[ index ],
					size: nextSteps__cardsButtonSize[ index ],
				} ) ),
			} ) ),
		},
		whyChooseAsu: {
			hide: whyChooseAsu__hide,
			sectionIntroText: whyChooseAsu__sectionIntroText,
		},
	};
};

export default transformAttributes;
