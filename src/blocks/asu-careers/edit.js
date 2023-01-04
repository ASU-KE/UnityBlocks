import { AsuCareers } from './components/AsuCareers';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

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

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<AsuCareers editorListType={ listType } deptList={ deptList } />
			</div>
		</>
	);
};

export default Edit;
