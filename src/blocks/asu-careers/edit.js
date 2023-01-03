import ASUCareers from './ASUCareers';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
// import { __ } from '@wordpress/i18n';

/**
 * Block edit function
 *
 * @param {Object} props
 */
const Edit = ( props ) => {
	const {
		attributes: { siteType, depList },
		className,
	} = props;

	const args = {
		siteType,
		depList,
	};

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<ASUCareers { ...args } />
			</div>
		</>
	);
};

export default Edit;
