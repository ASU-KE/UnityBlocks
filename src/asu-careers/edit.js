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
import { AsuCareers } from '../../resources/unity/component-careers/AsuCareers';
/**
 * Internal dependencies
 */
import Inspector from './inspector';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const Edit = ( props ) => {
	const {
		attributes: {
      listType,
      deptList,
      titleText,
    },
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
