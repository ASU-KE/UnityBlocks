/**
 * External dependencies
 */
import { ImageGalleryCarousel } from '@asu-design-system/component-carousel/dist/asuCarousel.es';

/**
 * Internal dependencies
 */
import { Controls } from './controls';
import { Inspector } from './inspector';

/**
 * Block edit function
 *
 * @param {Object} props
 */
const edit = ( props ) => {
	const {
		attributes: { images, hasContent, imageAutoSize, width, maxWidth },
		className,
	} = props;

	return (
		<>
			<Controls { ...props } />
			<Inspector { ...props } />
			{ images.length > 0 && (
				<div className={ className }>
					<ImageGalleryCarousel
						imageItems={ images }
						hasContent={ hasContent }
						imageAutoSize={ imageAutoSize }
						width={ width }
						maxWidth={ maxWidth }
					/>
				</div>
			) }
		</>
	);
};

export { edit };
