/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: {
			firstElementId,
			focusFirstFocusableElement,
			itemTexts,
			itemTargets,
		},
		className,
	} = props;

	const items = itemTexts.map( ( itemText, index ) => {
		return {
			text: itemText,
			targetIdName: itemTargets[ index ],
		};
	} );

	return (
		<div
			id="unityblocks-anchor-menu"
			className={ classnames( className ) }
			data-items={ JSON.stringify( items ) }
			data-firstElementId={ firstElementId }
			data-focusFirstFocusableElement={ focusFirstFocusableElement }
		></div>
	);
};

export default save;
