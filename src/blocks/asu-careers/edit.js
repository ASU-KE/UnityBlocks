import ASUCareers from './components/ASUCareers';

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
		attributes: { listType, deptList },
		className,
	} = props;

	const args = {
		listType,
		deptList,
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
