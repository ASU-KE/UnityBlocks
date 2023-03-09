/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: { listType, deptList, titleText },
		className,
	} = props;

	return (
		<div
			id="wp-block-unityblocks-asu-careers"
			className={ classnames( className ) }
			data-listtype={ listType }
			data-deptlist={ JSON.stringify( deptList ) }
			data-titletext={ titleText }
		></div>
	);
};

export default save;
