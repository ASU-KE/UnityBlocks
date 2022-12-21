import ASUCareers from './ASUCareers';

/**
 * Internal dependencies
 */
// import Controls from './controls';
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

	/*const args = {
		siteType: 'staff',
		depList: 'Office of Univ Events&Protocol, Solar Fab',
	};
*/

	const args = {
		siteType,
		depList,
	};

	//console.log( args );
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
