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
			id="wp-block-unityblocks-brassring"
			className={ classnames( className ) }
			data-siteType={ siteType }
			data-depList={ depList }
		></div>
	);
};

export default save;
