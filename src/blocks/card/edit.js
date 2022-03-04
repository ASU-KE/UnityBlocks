/**
 * External dependencies
 */
import { Card } from '@asu-design-system/components-core/dist/libCore.es';
import { __ } from '@wordpress/i18n';
import { image as icon } from '@wordpress/icons';
import { mediaUpload } from '@wordpress/editor';
import { useSelect } from '@wordpress/data';
import classNames from "classnames";
import {
	BlockIcon,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { Button, DropZone } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Controls from './controls';
import Inspector from './inspector';

/**
 * Block edit function
 *
 * @param {Object} props
 */
const Edit = ( props ) => {
	const {
		attributes: {
			type,
			width,
			horizontal,
			clickable,
			clickHref,
      imageId,
			image,
			imageAltText,
			title,
			icon,
			body,
			eventFormat,
			eventLocation,
			eventTime,
			buttonsColor,
			buttonsIcon,
			buttonsHref,
			buttonsLabel,
			buttonsOnclick,
			buttonsSize,
			buttonsTarget,
			linkLabel,
			linkUrl,
			tagsColor,
			tagsHref,
			tagsLabel,
			tagsOnclick,
		},
    setAttributes,
		className,
	} = props;

	const buttons = buttonsLabel.map( ( buttonsLabel, index ) => {
		return {
			color: buttonsColor[ index ],
			icon: buttonsIcon[ index ],
			href: buttonsHref[ index ],
			label: buttonsLabel[ index ],
			onClick: buttonsOnclick[ index ],
			size: buttonsSize[ index ],
			target: buttonsTarget[ index ],
		};
	} );

	const tags = tagsLabel.map( ( tagsLabel, index ) => {
		return {
			color: tagsColor[ index ],
			href: tagsHref[ index ],
			label: tagsLabel[ index ],
			onClick: tagsOnclick[ index ],
		};
	} );

	const args = {
		type,
		width,
		horizontal,
		clickable,
		clickHref,
		image,
		imageAltText,
		title,
		icon,
		body,
		eventFormat,
		eventLocation,
		eventTime,
		buttons,
		linkLabel,
		linkUrl,
		tags,
	};

  const onSelectImage = ( media ) => {
  		if ( media && media.url ) {
  			setAttributes( {
          image: media.url,
          imageAltText: media.alt
         } );
  		}
  	};

    const addImage = ( files ) => {
		mediaUpload( {
			allowedTypes: [ 'image' ],
			filesList: files,
			onFileChange: ( [ media ] ) => onSelectImage( media ),
		} );
	};

  const dropZone = (
  <DropZone
    label={ __( 'Drop to upload as a card image', 'unityblocks' )  }
    /* translators: image to represent the card block */
    onFilesDrop={ addImage }
  />
);

const blockProps = useBlockProps();
const onUploadImage = ( media ) => setAttributes( { imageId: media.id, image: media.url, imageAltText: media.alt } );
const {
		selectedClientId,
		getBlockRootClientId,
	} = useSelect( ( select ) => select( 'core/block-editor' ), [] );

  const selectedParentClientId = getBlockRootClientId( selectedClientId );

  const cardClass = classNames([className],"p-0", "card", "cards-components", {
      [`card-degree`]: type === "degree",
      [`card-event`]: type === "event",
      [`card-story`]: type === "story",
      [`w-${width.replace("%", "")}`]: width !== "100%",
      [`card-horizontal`]: horizontal,
      [`card-hover`]: clickable,
    });

/*
  <div class="card card-{ type }">


           <div class="card-buttons">
             <div class="card-button">
               <a
                 class="btn btn-maroon"
                 data-ga="Button link here"
                 data-ga-action="click"
                 data-ga-event="link"
                 data-ga-name="onclick"
                 data-ga-region="main content"
                 data-ga-section="card default title"
                 data-ga-type="internal link"
                 href="#"
               >
                 Button link here
               </a>
             </div>
           </div>

           <div class="card-tags">
             <a
               class="btn btn-tag btn-tag-alt-white"
               href="#"
             >
               test tag
             </a>
           </div>
         </div>
*/


  return (
		<>
    <Inspector { ...props } />
				<Controls { ...props } />
			<div { ...blockProps } className={ cardClass }>
				{ dropZone }

		    <figure className={classNames("card-img-top", "mb-0")}>
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={ [ 'image' ] }
								onSelect={ onUploadImage }
								render={ ( { open } ) => (
									<Button onClick={ open } className={classNames("card-img-top", "p-0")}>
										{ ! image
											? <BlockIcon icon="format-image" />
											: <img alt={ imageAltText } className={classNames("card-img-top", "mb-0")} src={ image } />
										}
									</Button>
								) }
								value={ image }
							>
							</MediaUpload>
						</MediaUploadCheck>
					</figure>

				<div className="card-header">
					<RichText
						className="card-title"
						identifier="title"
						multiline={ false }
						onChange={ ( title ) => {
							setAttributes( { title: title } );
						} }
						placeholder={
							__( 'Card title', 'unityblocks' )
						}
						tagName="h3"
						value={ title }
					/>
          </div>

          <div className="card-body">
					<RichText
						className="card-text"
						identifier="body"
						multiline={ false }
						onChange={ ( body ) => {
							setAttributes( { body: body } );
						} }
						placeholder={
							__( 'Basic card with mixed content and a fixed width …', 'unityblocks' )
						}
						tagName="p"
						value={ body }
					/>
          </div>

          <div className="card-buttons">
          <div className="card-button">
 					<InnerBlocks
 						__experimentalCaptureToolbars={ true }
 						allowedBlocks={ [ 'acf/uds-button' ] }
 						template={ [ [ 'acf/uds-button', { placeholder: __( 'Card button ...', 'unityblocks' ), className: '' } ] ] }
 						templateInsertUpdatesSelection={ false }
 					/>
           </div>
           </div>



          <div className="card-link">
					<RichText
						className=""
						identifier="link"
						multiline={ false }
						onChange={ ( linkLabel ) => {
							setAttributes( { linkLabel: linkLabel } );
						} }
						tagName="p"
						value={ linkLabel }
					/>
          </div>



			</div>
		</>
	);
};


	/*return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<Card { ...args } />
			</div>
		</>
	);
};
*/
export default Edit;
