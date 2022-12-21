const { render } = wp.element;
import ASUCareers from './ASUCareers';
import Selection from './Selection';

const ASUCareersBlocks = document.getElementsByClassName(
	'wp-block-unityblocks-asu-careers'
);

Object.values( ASUCareersBlocks ).map( ( ASUCareersBlock ) => {
	const siteType = ASUCareersBlock.dataset.sitetype;
	const depList = ASUCareersBlock.dataset.deplist;

	const props = {
		siteType,
		depList,
	};

	let result = (
		<>
			<ASUCareers { ...props } />
		</>
	);
	if ( siteType === 'all' ) {
		result = (
			<div className="uds-asu-careers-selection-wrapper">
				<Selection />
				<div className="uds-asu-careers-selection">
					<ASUCareers siteType="staff" depList={ depList } />
					<ASUCareers siteType="student" depList={ depList } />
				</div>
			</div>
		);
	}
	return render( result, ASUCareersBlock );
} );
