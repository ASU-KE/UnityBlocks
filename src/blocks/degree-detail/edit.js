/**
 * External dependencies
 */
import { DetailPage } from '@asu-design-system/app-degree-pages/dist/degreePages.es';

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
const Edit = ( props ) => {
	const {
		attributes: { acadPlan },
		className,
	} = props;

	return (
		<>
			<Controls { ...props } />
			<Inspector { ...props } />

			{ acadPlan > '' && (
				<div className={ className }>
					<DetailPage
						{ ...transformAttributes( props.attributes ) }
					/>
				</div>
			) }
		</>
	);
};

export { Edit };
