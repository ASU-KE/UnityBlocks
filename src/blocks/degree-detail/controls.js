/**
 * WordPress dependencies
 */
import { TabPanel } from '@wordpress/components';

/**
 * Block dependencies
 */
import {
	AnchorMenuSettings,
	DegreeSelectorSettings,
	HeroSettings,
	IntroductionSettings,
	HideSectionsSettings,
	CustomImagesSettings,
	AtAGlanceSettings,
	ProgramContactSettings,
	NextStepsSettings,
	WhyChooseAsuSettings,
} from './components';

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
				tabs={ [
					{
						name: 'degree-selection',
						title: 'Degree Selector',
					},
					{
						name: 'anchor-menu',
						title: 'Anchor Menu',
					},
					{
						name: 'hero-settings',
						title: 'Hero',
					},
					{
						name: 'hide-sections',
						title: 'Hide Sections',
					},
					{
						name: 'custom-images',
						title: 'Custom images',
					},
					{
						name: 'intro-content',
						title: 'Introduction',
					},
					{
						name: 'at-a-glance',
						title: 'At a Glance',
					},
					{
						name: 'program-contact',
						title: 'Program Contact',
					},
					{
						name: 'next-steps',
						title: 'Next steps',
					},
					{
						name: 'why-choose-asu',
						title: 'Why ASU',
					},
				] }
			>
				{ ( tab ) => {
					if ( 'degree-selection' === tab.name ) {
						return <DegreeSelectorSettings { ...props } />;
					}

					if ( 'anchor-menu' === tab.name ) {
						return <AnchorMenuSettings { ...props } />;
					}

					if ( 'hero-settings' === tab.name ) {
						return <HeroSettings { ...props } />;
					}

					if ( 'hide-sections' === tab.name ) {
						return <HideSectionsSettings { ...props } />;
					}

					if ( 'custom-images' === tab.name ) {
						return <CustomImagesSettings { ...props } />;
					}

					if ( 'intro-content' === tab.name ) {
						return <IntroductionSettings { ...props } />;
					}

					if ( 'at-a-glance' === tab.name ) {
						return <AtAGlanceSettings { ...props } />;
					}

					if ( 'program-contacts' === tab.name ) {
						return <ProgramContactSettings { ...props } />;
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

export { Controls };
