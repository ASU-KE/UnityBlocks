const args = {
	image: {
		url: unityblocksHeroData.imageUrl,
		altText: unityblocksHeroData.imageAltText,
		size: unityblocksHeroData.imageSize,
	},
	subTitle: {
		text: unityblocksHeroData.subTitleText,
		highlightColor: unityblocksHeroData.subTitleHighlightColor,
		// color: "white" // "black"
	},
	title: {
		text: unityblocksHeroData.titleText,
		highlightColor: unityblocksHeroData.titleHighlightColor,
		// color: "white" // "black"
	},
	// `contents` is optional
	contentsColor: unityblocksHeroData.contentsColor, // "black"
	contents: unityblocksHeroData.contents,
};

// eslint-disable-next-line
AsuWebCore.initHero( {
	targetSelector: '#unityblocks-hero',
	props: {
		items: args,
	},
} );
