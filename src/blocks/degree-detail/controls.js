/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	IconButton,
	PanelBody,
	PanelRow,
	ResponsiveWrapper,
	TabPanel,
	Toolbar,
} from '@wordpress/components';

/**
 * Block dependencies
 */

import icon from './icon';

/**
 * Block controls
 *
 * @param {Object} props
 */
const Controls = ( props ) => {
	const {
		attributes: {
			heroType,
			heroMediaId,
			heroMediaUrl,
			heroMediaAltText,
			heroMediaCssClass,
			heroMediaSize,
		},
		className,
	} = props;

	// const onSelect = ( tabName ) => {};

	return (
		<>
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
						title: 'Intro',
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
					if ( 'hero-settings' === tab.name ) {
						const onSelectHeroMedia = ( media ) => {
							props.setAttributes( {
								heroMediaId: media.id,
								heroMediaUrl: media.url,
								heroMediaAltText: media.alt,
							} );
						};

						return (
							<>
								{ heroMediaId !== 0 && (
									<BlockControls>
										<Toolbar>
											<MediaUploadCheck>
												<MediaUpload
													value={ heroMediaId }
													onSelect={
														onSelectHeroMedia
													}
													allowedTypes={ [ 'image' ] }
													render={ ( { open } ) => (
														<IconButton
															className="components-toolbar__control"
															label={ __(
																'Edit image',
																'unityblocks'
															) }
															icon="edit"
															onClick={ open }
														/>
													) }
												/>
											</MediaUploadCheck>
										</Toolbar>
									</BlockControls>
								) }
								{ heroMediaId === 0 && (
									<div className={ `${ className }` }>
										<MediaUploadCheck>
											<MediaPlaceholder
												labels={ {
													title: __(
														'Hero image',
														'unityblocks'
													),
													instructions: __(
														'Drag image, upload a new one or select file from your library.',
														'unityblocks'
													),
												} }
												icon={ icon }
												accept="images/*"
												onSelect={ onSelectHeroMedia }
											/>
										</MediaUploadCheck>
									</div>
								) }
								{ heroMediaId !== 0 && (
									<ResponsiveWrapper
										naturalWidth={ 1920 }
										naturalHeight={ 512 }
									>
										<img
											alt={ heroMediaAltText }
											src={ heroMediaUrl }
										/>
									</ResponsiveWrapper>
								) }
							</>
						);
					}

					return <p>Placeholder</p>;
				} }
			</TabPanel>
		</>
	);
};

export default Controls;
