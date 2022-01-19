/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: {
			heroType,
			mediaUrl,
			mediaAltText,
			mediaCssClass,
			mediaSize,
			subTitleText,
			subTitleHighlightColor,
			subTitleMaxWidth,
			subTitleCssClass,
			titleText,
			titleHighlightColor,
			titleMaxWidth,
			titleCssClass,
			contentsText,
			contentsMaxWidth,
			contentsCssClass,
			contentsHighlightColor,
			contentsColor,
		},
		className,
	} = props;

	const image = {
		url: mediaUrl,
		altText: mediaAltText,
		cssClass: mediaCssClass,
		size: mediaSize,
	};

	const subTitle = {
		text: subTitleText,
		highlightColor: subTitleHighlightColor,
		maxWidth: subTitleMaxWidth,
		cssClass: subTitleCssClass,
	};

	const title = {
		text: titleText,
		highlightColor: titleHighlightColor,
		maxWidth: titleMaxWidth,
		cssClass: titleCssClass,
	};

	const contents = [
		{
			text: contentsText,
			maxWidth: contentsMaxWidth,
			cssClass: contentsCssClass,
			highlightColor: contentsHighlightColor,
		},
	];

	return (
		<div
			id="unityblocks-hero"
			className={ classnames( className ) }
			data-herotype={ heroType }
			data-image={ JSON.stringify( image ) }
			data-subtitle={ JSON.stringify( subTitle ) }
			data-title={ JSON.stringify( title ) }
			data-contents={ JSON.stringify( contents ) }
			data-contentscolor={ contentsColor }
		></div>
	);
};

export default save;
