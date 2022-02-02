/**
 * External dependencies
 */
import { Testimonial } from '@asu-design-system/components-core/dist/libCore.es';

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
			quoteTitle,
			quoteContent,
			quoteCiteName,
			quoteCiteDescription,
			mediaUrl,
			mediaAltText,
			containerCssClass,
			titleCssClass,
			contentCssClass,
		},
		className,
	} = props;

	const args = {
		quote: {
			title: quoteTitle,
			content: quoteContent,
			cite: {
				name: quoteCiteName,
				description: quoteCiteDescription,
			},
		},
		imageSource: mediaUrl,
		imageAltText: mediaAltText,
		itemStyle: {
			containerCssClass,
			titleCssClass,
			contentCssClass,
		},
	};

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<Testimonial { ...args } />
			</div>
		</>
	);
};

export default Edit;
