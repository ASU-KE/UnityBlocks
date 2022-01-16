/**
 * External dependencies
 */
import { AnchorMenu } from '@asu-design-system/components-core/dist/libCore.es';

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
			firstElementId,
			focusFirstFocusableElement,
			itemsTexts,
			itemsTargets,
		},
		className,
	} = props;

	const args = {
		firstElementId,
		focusFirstFocusableElement,
		itemsTexts,
		itemsTargets,
	};

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<AnchorMenu { ...args } />
			</div>
		</>
	);
};

export default Edit;
