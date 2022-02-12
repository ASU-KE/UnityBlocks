// @ts-check

/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { Card, CardBody, TextareaControl } from '@wordpress/components';

import {
	FacultyCard,
	HonorsCard,
	InclusionCard,
	MentorsCard,
	ProgramsCard,
	ResearchCard,
} from '../whyChooseAsuCards';

/**
 * Block controls
 *
 * @param {Object} props
 */
const WhyChooseAsuSettings = ( props ) => {
	const {
		attributes: { whyChooseAsu__sectionIntroText },
		setAttributes,
	} = props;

	return (
		<>
			<h2>Customize the Why Choose ASU content.</h2>
			<Card size={ 'small' } style={ { width: '50%' } }>
				<CardBody>
					<TextareaControl
						label={ 'Introductory text.' }
						value={ whyChooseAsu__sectionIntroText }
						onChange={ ( newValue ) =>
							setAttributes( {
								whyChooseAsu__sectionIntroText: newValue,
							} )
						}
					/>
				</CardBody>
			</Card>

			<FacultyCard { ...props } />
			<HonorsCard { ...props } />
			<InclusionCard { ...props } />
			<MentorsCard { ...props } />
			<ProgramsCard { ...props } />
			<ResearchCard { ...props } />
		</>
	);
};

export { WhyChooseAsuSettings };
