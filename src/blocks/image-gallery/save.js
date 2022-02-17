/**
 * External dependencies
 */
import classnames from 'classnames';
import { transformAttributes } from './transformAttributes';

const save = ( props ) => {
	const { className } = props;

	const {
		imageItems,
		width,
		maxWidth,
		hasContent,
		imageAutoSize,
	} = transformAttributes( props.attributes );

	return (
		<div
			className={ classnames( className ) }
			data-imageitems={ JSON.stringify( imageItems ) }
			data-width={ width }
			data-maxwidth={ maxWidth }
			data-hascontent={ hasContent }
			data-imageautosize={ imageAutoSize }
		></div>
	);
};

export default save;
