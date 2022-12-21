/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: { siteType, depList },
		className,
	} = props;

	return (
		<div
			id="wp-block-unityblocks-asu-careers"
			className={ classnames( className ) }
			data-siteType={ siteType }
			data-depList={ depList }
		></div>
	);
};

export default save;
