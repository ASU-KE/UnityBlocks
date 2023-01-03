/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: { listType, deptList },
		className,
	} = props;

	return (
		<div
			id="wp-block-unityblocks-asu-careers"
			className={ classnames( className ) }
			data-listtype={ listType }
			data-deptlist={ deptList }
		></div>
	);
};

export default save;
