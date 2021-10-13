/**
 * WordPress dependencies
 */
import { createSlotFill } from '@wordpress/components';

const { Fill, Slot } = createSlotFill( 'UnityBlocksLayoutSelectorFill' );

function UnityBlocksLayoutSelectorFill( { children } ) {
	return <Fill>{ children }</Fill>;
}

export { UnityBlocksLayoutSelectorFill as default, Slot };
