/**
 * WordPress dependencies
 */
import {
	createSlotFill,
	__experimentalUseSlot as useSlot,
} from '@wordpress/components';

const slotName = 'UnityBlocksSettingsModalControl';

const { Fill, Slot: UnityBlocksSettingsModalControlSlot } = createSlotFill(
	slotName
);

function Slot( { children } ) {
	const slot = useSlot( slotName );
	const hasFills = Boolean( slot.fills && slot.fills.length );

	if ( ! hasFills ) {
		return children;
	}

	return <UnityBlocksSettingsModalControlSlot bubblesVirtually />;
}

const UnityBlocksSettingsModalControl = Fill;
UnityBlocksSettingsModalControl.Slot = Slot;

export default UnityBlocksSettingsModalControl;
