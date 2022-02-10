/* eslint camelcase: "off" */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	MediaUploadCheck,
	MediaUpload,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import {
	Card,
	CardBody,
	CardHeader,
	CardMedia,
	ResponsiveWrapper,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

import icon from './icon';

/**
 * Block controls
 *
 * @param {Object} props
 */
const OverrideImagesSettings = ( props ) => {
	const {
		attributes: {
			careerOutlook__imageId,
			careerOutlook__imageUrl,
			careerOutlook__imageAltText,
			// careerOutlook__imageCssClass,
			globalOpportunity__imageId,
			globalOpportunity__imageUrl,
			globalOpportunity__imageAltText,
			// globalOpportunity__imageCssClass,
			attendOnline__imageId,
			attendOnline__imageUrl,
			attendOnline__imageAltText,
			// attendOnline__imageCssClass,
		},
		careerOutlookImage,
		globalOpportunityImage,
		attendOnlineImage,
		// setAttributes,
	} = props;

	const onSelectCareerOutlookMedia = ( media ) => {
		props.setAttributes( {
			careerOutlook__imageId: media.id,
			careerOutlook__imageUrl: media.url,
			careerOutlook__imageAltText: media.alt,
		} );
	};

	const onSelectGlobalOpportunityMedia = ( media ) => {
		props.setAttributes( {
			globalOpportunity__imageId: media.id,
			globalOpportunity__imageUrl: media.url,
			globalOpportunity__imageAltText: media.alt,
		} );
	};

	const onSelectAttendOnlineMedia = ( media ) => {
		props.setAttributes( {
			attendOnline__imageId: media.id,
			attendOnline__imageUrl: media.url,
			attendOnline__imageAltText: media.alt,
		} );
	};

	return (
		<>
			<Card style={ { width: '50%' } }>
				<CardHeader>
					<h2>Customize featured images</h2>
				</CardHeader>

				<CardBody>
					<MediaUploadCheck>
						<MediaPlaceholder
							labels={ {
								title: __(
									'Customize "Career Outlook" feature image',
									'unityblocks'
								),
								instructions: __(
									'Drag file, upload a new one or select file from your library.',
									'unityblocks'
								),
							} }
							icon={ icon }
							accept="images/*"
							onSelect={ onSelectCareerOutlookMedia }
						/>
					</MediaUploadCheck>

					{ careerOutlook__imageId && (
						<CardMedia>
							<ResponsiveWrapper
								naturalWidth={
									careerOutlookImage
										? careerOutlookImage.media_details.width
										: 100
								}
								naturalHeight={
									careerOutlookImage
										? careerOutlookImage.media_details
												.height
										: 100
								}
							>
								<img
									alt={ careerOutlook__imageAltText }
									src={ careerOutlook__imageUrl }
								/>
							</ResponsiveWrapper>
						</CardMedia>
					) }
				</CardBody>

				<CardBody>
					<MediaUploadCheck>
						<MediaPlaceholder
							labels={ {
								title: __(
									'Customize "Global Opportunity" feature image',
									'unityblocks'
								),
								instructions: __(
									'Drag file, upload a new one or select file from your library.',
									'unityblocks'
								),
							} }
							icon={ icon }
							accept="images/*"
							onSelect={ onSelectGlobalOpportunityMedia }
						/>
					</MediaUploadCheck>

					{ globalOpportunity__imageId && (
						<CardMedia>
							<ResponsiveWrapper
								naturalWidth={
									globalOpportunityImage
										? globalOpportunityImage.media_details
												.width
										: 100
								}
								naturalHeight={
									globalOpportunityImage
										? globalOpportunityImage.media_details
												.height
										: 100
								}
							>
								<img
									alt={ globalOpportunity__imageAltText }
									src={ globalOpportunity__imageUrl }
								/>
							</ResponsiveWrapper>
						</CardMedia>
					) }
				</CardBody>

				<CardBody>
					<MediaUploadCheck>
						<MediaPlaceholder
							labels={ {
								title: __(
									'Customize "Attend Online" feature image',
									'unityblocks'
								),
								instructions: __(
									'Drag file, upload a new one or select file from your library.',
									'unityblocks'
								),
							} }
							icon={ icon }
							accept="images/*"
							onSelect={ onSelectAttendOnlineMedia }
						/>
					</MediaUploadCheck>

					{ attendOnline__imageId && (
						<CardMedia>
							<ResponsiveWrapper
								naturalWidth={
									attendOnlineImage
										? attendOnlineImage.media_details.width
										: 100
								}
								naturalHeight={
									attendOnlineImage
										? attendOnlineImage.media_details.height
										: 100
								}
							>
								<img
									alt={ attendOnline__imageAltText }
									src={ attendOnline__imageUrl }
								/>
							</ResponsiveWrapper>
						</CardMedia>
					) }
				</CardBody>
			</Card>
		</>
	);
};

export default compose(
	withSelect( ( select, props ) => {
		const { getMedia } = select( 'core' );
		const {
			careerOutlook__imageId,
			globalOpportunity__imageId,
			attendOnline__imageId,
		} = props.attributes;

		return {
			careerOutlookImage: careerOutlook__imageId
				? getMedia( careerOutlook__imageId )
				: null,
			globalOpportunityImage: globalOpportunity__imageId
				? getMedia( globalOpportunity__imageId )
				: null,
			attendOnlineImage: attendOnline__imageId
				? getMedia( attendOnline__imageId )
				: null,
		};
	} )
)( OverrideImagesSettings );
