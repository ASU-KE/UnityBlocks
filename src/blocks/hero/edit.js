/**
 * External dependencies
 */
import { Hero } from '@asu-design-system/components-core/dist/libCore.es';

/**
 * Internal dependencies
 */
// import Controls from './controls';
import Inspector from './inspector';

/**
 * Block edit function
 *
 * @param {Object} props
 */
const Edit = ( props ) => {
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

	const args = {
		heroType,
		image: {
			url: mediaUrl,
			altText: mediaAltText,
			cssClass: mediaCssClass,
			size: mediaSize,
		},
		subTitle: {
			text: subTitleText,
			highlightColor: subTitleHighlightColor,
			maxWidth: subTitleMaxWidth,
			cssClass: subTitleCssClass,
		},
		title: {
			text: titleText,
			highlightColor: titleHighlightColor,
			maxWidth: titleMaxWidth,
			cssClass: titleCssClass,
		},
		contents: [
			{
				text: contentsText,
				maxWidth: contentsMaxWidth,
				cssClass: contentsCssClass,
				highlightColor: contentsHighlightColor,
			},
		],
		contentsColor,
	};

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<Hero { ...args } />
			</div>
		</>
	);
};

export default Edit;
