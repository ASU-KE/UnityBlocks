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
 * WordPress dependencies
 */
// import { __ } from '@wordpress/i18n';

/**
 * Block edit function
 *
 * @param {Object} props
 */
const Edit = ( props ) => {
	const {
		attributes: {
			imageUrl,
			imageAltText,
			imageSize,
			subTitleText,
			subTitleHighlightColor,
			titleText,
			titleHighlightColor,
			contentsColor,
			contents,
		},
		className,
	} = props;

	const args = {
		image: { imageUrl, imageAltText, imageSize },
		subTitle: {
			subTitleText,
			subTitleHighlightColor,
		},
		title: {
			titleText,
			titleHighlightColor,
		},
		contentsColor,
		contents,
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
