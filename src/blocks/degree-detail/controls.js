/**
 * WordPress dependencies
 */
import { TabPanel } from '@wordpress/components';

/**
 * Block dependencies
 */
import AnchorMenuSettings from './components/AnchorMenuSettings';
import DegreeSettings from './components/DegreeSettings';
import HeroSettings from './components/HeroSettings';
import IntroductionSettings from './components/IntroductionSettings';
import HideSectionsSettings from './components/HideSectionsSettings';
import OverrideImagesSettings from './components/OverrideImagesSettings';
import AtAGlanceSettings from './components/AtAGlanceSettings';
import ProgramContactsSettings from './components/ProgramContactsSettings';
import NextStepsSettings from './components/NextStepsSettings';
import WhyChooseAsuSettings from './components/WhyChooseAsuSettings';

/**
 * Block controls
 *
 * @param {Object} props
 */
const Controls = ( props ) => {
	// const [ previewBlock, setPreviewBlock ] = useState( false );

	return (
		<>
			{ /* <BlockControls>
				<Toolbar>
					<IconButton
						label={
							previewBlock
								? __( 'Preview', 'unityblocks' )
								: __( 'Edit', 'unityblocks' )
						}
						icon={ previewBlock ? 'edit' : 'image' }
						onClick={ setPreviewBlock( ! previewBlock ) }
					/>
				</Toolbar>
			</BlockControls> */ }
			<TabPanel
				className="my-tab-panel"
				orientation={ 'horizontal' }
				// activeClass="active-tab"
				// onSelect={ onSelect }
				tabs={ [
					{
						name: 'degree-settings',
						title: 'Degree',
						className: '',
					},
					{
						name: 'anchor-menu',
						title: 'Anchor Menu',
						className: '',
					},
					{
						name: 'hero-settings',
						title: 'Hero',
						className: '',
					},
					{
						name: 'intro-content',
						title: 'Introduction',
						className: '',
					},
					{
						name: 'hide-sections',
						title: 'Hide Sections',
						className: '',
					},
					{
						name: 'override-images',
						title: 'Override images',
						className: '',
					},
					{
						name: 'at-a-glance',
						title: 'At a Glance',
						className: '',
					},
					{
						name: 'program-contacts',
						title: 'Program Contacts',
						className: '',
					},
					{
						name: 'next-steps',
						title: 'Next steps',
						className: '',
					},
					{
						name: 'why-choose-asu',
						title: 'Why ASU',
						className: '',
					},
				] }
			>
				{ ( tab ) => {
					if ( 'degree-settings' === tab.name ) {
						return <DegreeSettings { ...props } />;
					}

					if ( 'anchor-menu' === tab.name ) {
						return <AnchorMenuSettings { ...props } />;
					}

					if ( 'hero-settings' === tab.name ) {
						return <HeroSettings { ...props } />;
					}

					if ( 'intro-content' === tab.name ) {
						return <IntroductionSettings { ...props } />;
					}

					if ( 'hide-sections' === tab.name ) {
						return <HideSectionsSettings { ...props } />;
					}

					if ( 'override-images' === tab.name ) {
						return <OverrideImagesSettings { ...props } />;
					}

					if ( 'at-a-glance' === tab.name ) {
						return <AtAGlanceSettings { ...props } />;
					}

					if ( 'program-contacts' === tab.name ) {
						return <ProgramContactsSettings { ...props } />;
					}

					if ( 'next-steps' === tab.name ) {
						return <NextStepsSettings { ...props } />;
					}

					if ( 'why-choose-asu' === tab.name ) {
						return <WhyChooseAsuSettings { ...props } />;
					}

					return <h2>An Unexpected error has occurred!</h2>;
				} }
			</TabPanel>
		</>
	);
};

export default Controls;
