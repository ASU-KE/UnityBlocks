/* eslint camelcase: "off" */

const { render } = wp.element;

import { DetailPage } from '@asu-design-system/app-degree-pages/dist/degreePages.es';

// Load first element with the unityblocks-degree-detail id
const degree = document.querySelector( '#unityblocks-degree-detail' );

const appPathFolder = degree.dataset.appfolder;
const dataSource = JSON.parse( degree.dataset.datasource );
const anchorMenu = JSON.parse( degree.dataset.anchormenu );
const hero = JSON.parse( degree.dataset.hero );
const introContent = JSON.parse( degree.dataset.introcontent );
const atAGlance = JSON.parse( degree.dataset.ataglance );
const applicationRequirements = degree.dataset.apprequirements;
const changeMajorRequirements = degree.dataset.changemajor;
const affordingCollege = degree.dataset.affordcollege;
const flexibleDegreeOptions = degree.dataset.flexdegreeoptions;
const careerOutlook = JSON.parse( degree.dataset.contentscolor );
const exampleCareers = JSON.parse( degree.dataset.contentscolor );
const globalOpportunity = JSON.parse( degree.dataset.contentscolor );
const attendOnline = JSON.parse( degree.dataset.contentscolor );
const programContactInfo = JSON.parse( degree.dataset.contentscolor );
const nextSteps = JSON.parse( degree.dataset.contentscolor );
const whyChooseAsu = JSON.parse( degree.dataset.contentscolor );

render(
	<DetailPage
		appPathFolder={ appPathFolder }
		dataSource={ dataSource }
		anchorMenu={ anchorMenu }
		hero={ hero }
		introContent={ introContent }
		atAGlance={ atAGlance }
		applicationRequirements={ applicationRequirements }
		changeMajorRequirements={ changeMajorRequirements }
		affordingCollege={ affordingCollege }
		flexibleDegreeOptions={ flexibleDegreeOptions }
		careerOutlook={ careerOutlook }
		exampleCareers={ exampleCareers }
		globalOpportunity={ globalOpportunity }
		attendOnline={ attendOnline }
		programContactInfo={ programContactInfo }
		nextSteps={ nextSteps }
		whyChooseAsu={ whyChooseAsu }
	/>,
	degree
);
