/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
// import { __ } from '@wordpress/i18n';
// import {
// 	BlockControls,
// 	// MediaPlaceholder,
// 	MediaUpload,
// 	MediaUploadCheck,
// } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

/**
 * Block controls
 *
 * @param {Object} props
 */
const Controls = ( props ) => {
	const {
		// attributes: { mediaId },
		// className,
	} = props;

	// const onSelect = ( tabName ) => {};

	return (
		<>
			<TabPanel
				className="my-tab-panel"
				// activeClass="active-tab"
				// onSelect={ onSelect }
				tabs={ [
					{
						name: 'tab1',
						title: 'Tab 1',
						className: 'tab-one',
					},
					{
						name: 'tab2',
						title: 'Tab 2',
						className: 'tab-two',
					},
				] }
			>
				{ ( tab ) => <p>Selected tab: { tab.title }</p> }
			</TabPanel>
		</>
	);
};

export default Controls;
