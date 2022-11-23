const { render } = wp.element;
import BrassRing from './BrassRing';
import Selection from './Selection';

const brassringBlocks = document.getElementsByClassName(
	'wp-block-unityblocks-brassring'
);

Object.values( brassringBlocks ).map( ( brassringBlock ) => {
	const siteType = brassringBlock.dataset.sitetype;
	const depList = brassringBlock.dataset.deplist;

	const props = {
		siteType,
		depList,
	};

	let result = (
		<>
			<BrassRing { ...props } />
		</>
	);
	if ( siteType === 'all' ) {
		result = (
			<div className="uds-brassring-selection-wrapper">
				<Selection />
				<div className="uds-brassring-selection">
					<BrassRing siteType="staff" depList={ depList } />
					<BrassRing siteType="student" depList={ depList } />
				</div>
			</div>
		);
	}
	return render( result, brassringBlock );
} );
