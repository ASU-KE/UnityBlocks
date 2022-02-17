/**
 * External dependencies
 */
import { ImageGalleryCarousel } from '@asu-design-system/component-carousel/dist/asuCarousel.es';

/**
 * Internal dependencies
 */
import { Controls } from './controls';
import { Inspector } from './inspector';
import { transformAttributes } from './transformAttributes';

/**
 * Block edit function
 *
 * @param {Object} props
 */
const edit = ( props ) => {
	const { className } = props;

	return (
		<>
			<Controls { ...props } />
			<Inspector { ...props } />
			<div className={ className }>
				{ /* <ImageGalleryCarousel
					{ ...transformAttributes( props.attributes ) }
				/> */ }
			</div>
		</>
	);
};

export { edit };
