/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * External dependencies
 */
import { AsuCareers } from './components/AsuCareers';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * Block edit function
 *
 * @param {Object} props
 */
const Edit = ( props ) => {
	const {
		attributes: { listType, deptList, titleText },
	} = props;

	return (
		<>
			<Inspector { ...props } />
			<div {...useBlockProps()}>
				<AsuCareers
					editorListType={ listType }
					deptList={ deptList }
					titleText={ titleText }
				/>
			</div>
		</>
	);
};

export default Edit;
