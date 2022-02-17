/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const { className } = props;

	const {
		images,
		width,
		maxWidth,
		hasContent,
		imageAutoSize,
	} = props.attributes;

	return (
		<div
			className={ classnames( className ) }
			data-imageitems={ JSON.stringify( images ) }
			data-width={ width }
			data-maxwidth={ maxWidth }
			data-hascontent={ hasContent }
			data-imageautosize={ imageAutoSize }
		></div>
	);
};

export default save;
