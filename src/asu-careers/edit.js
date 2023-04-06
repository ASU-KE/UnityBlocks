import { AsuCareers } from '../../resources/unity/component-careers/AsuCareers';

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
		attributes: { listType, deptList, titleText },
		className,
	} = props;

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<AsuCareers
					editorListType={ listType }
					deptList={ deptList }
					titleText={ titleText }
				/>
			</div>
		</>
	);
};

export default Edit;
