/**
 * External dependencies
 */
import { AnchorMenu } from '@asu-ke/components-core';

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
		attributes: { firstElementId, focusFirstFocusableElement, items },
		className,
	} = props;

	const args = { firstElementId, focusFirstFocusableElement, items };

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
