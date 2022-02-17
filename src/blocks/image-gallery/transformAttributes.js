// @ts-check

/* eslint camelcase: "off" */

const transformAttributes = ( attributes ) => {
	const {
		imageIds,
		imageSources,
		imageAltTexts,
		imageThumbnailSources,
		imageTitles,
		imageContents,
		hasContent,
		imageAutoSize,
		width,
		maxWidth,
	} = attributes;

	return {
		imageItems: imageIds.map( ( imgId, index ) => ( {
			id: imgId,
			imageSource: imageSources[ index ],
			imageAltText: imageAltTexts[ index ],
			thumbnailSource: imageThumbnailSources[ index ],
			title: imageTitles[ index ],
			content: imageContents[ index ],
		} ) ),
		width,
		maxWidth,
		hasContent,
		imageAutoSize,
	};
};

export { transformAttributes };
