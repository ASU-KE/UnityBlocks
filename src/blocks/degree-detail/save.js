/* eslint camelcase: "off" */

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { transformAttributes } from './transformAttributes';

const save = ( props ) => {
	const {
		attributes: { appPathFolder },
		className,
	} = props;

	const {
		dataSource,
		anchorMenu,
		hero,
		introContentSection,
		atAGlance,
		applicationRequirements,
		changeMajorRequirements,
		affordingCollege,
		flexibleDegreeOptions,
		careerOutlook,
		exampleCareers,
		globalOpportunity,
		attendOnline,
		programContactInfo,
		nextSteps,
		whyChooseAsu,
	} = transformAttributes( props.attributes );

	return (
		<div
			id="unityblocks-degree-details"
			className={ classnames( className ) }
			data-appfolder={ appPathFolder }
			data-datasource={ JSON.stringify( dataSource ) }
			data-anchormenu={ JSON.stringify( anchorMenu ) }
			data-hero={ JSON.stringify( hero ) }
			data-introcontent={ JSON.stringify( introContentSection ) }
			data-ataglance={ JSON.stringify( atAGlance ) }
			data-apprequirements={ applicationRequirements }
			data-changemajor={ changeMajorRequirements }
			data-affordcollege={ affordingCollege }
			data-flexdegreeoptions={ flexibleDegreeOptions }
			data-careeroutlook={ JSON.stringify( careerOutlook ) }
			data-examplecareers={ JSON.stringify( exampleCareers ) }
			data-globalopportunity={ JSON.stringify( globalOpportunity ) }
			data-attendonline={ JSON.stringify( attendOnline ) }
			data-programcontact={ JSON.stringify( programContactInfo ) }
			data-nextsteps={ JSON.stringify( nextSteps ) }
			data-chooseasu={ JSON.stringify( whyChooseAsu ) }
		></div>
	);
};

export { save };
