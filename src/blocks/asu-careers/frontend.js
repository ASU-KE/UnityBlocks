const { render } = wp.element;
import { AsuCareers } from './components/AsuCareers';

// It is possible to load multiple Careers blocks onto a page.
// Load each DOM element on the page using the Gutenberg-generated class for the ASU Careers block
const careers = document.querySelectorAll(
	'.wp-block-unityblocks-asu-careers'
);

careers.forEach( ( block ) => {
	const listType = block.dataset.listtype;
	const deptList = block.dataset.deptlist;

	render( <AsuCareers listType={ listType } deptList={ deptList } />, block );
} );
