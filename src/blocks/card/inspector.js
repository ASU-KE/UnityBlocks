/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
  RichText,
  LinkControl,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	PanelRow,
  FormToggle,
  RadioControl,
	ResponsiveWrapper,
	TextControl,
  ButtonGroup,
} from '@wordpress/components';

import { useState } from '@wordpress/element';
import { useInstanceId } from '@wordpress/compose';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: {
      type,
      width,
      horizontal,
      clickable,
      clickHref,
      imageId,
      title,
      icon,
      body,
      eventFormat,
      eventLocation,
      eventTime,
      buttonsAriaLabel,
      buttonsColor,
      buttonsIcon,
      buttonsHref,
      buttonsLabel,
      buttonsOnclick,
      buttonsSize,
      buttonsTarget,
      linkLabel,
      linkUrl,
      tagsAriaLabel,
      tagsColor,
      tagsHref,
      tagsLabel,
      tagsOnclick,
		},
		setAttributes,
	} = props;

	const removeMedia = () => {
		props.setAttributes( {
			imageId: 0,
			image: '',
		} );
	};

	const onSelectMedia = ( media ) => {
		props.setAttributes( {
			imageId: media.id,
			image: media.url,
			imageAltText: media.alt,
		} );
	};

  const instanceId = useInstanceId( FormToggle );
	const horizontalId = `horizontal-toggle-control-${ instanceId }`;
  const clickableId = `clickable-toggle-control-${ instanceId }`;
  const bodyId = `body-toggle-control-${ instanceId }`;

  const instanceId2 = useInstanceId( ButtonGroup );
  const eventFormatId = `event-format-toggle-control-${ instanceId2 }`;
  const widthId = `width-toggle-control-${ instanceId2 }`;
  const typeId = `type-toggle-control-${ instanceId2 }`;



	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Card image', 'unityblocks' ) }
					initialOpen={ true }
				>
					<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectMedia }
								value={ imageId }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button
										className={
											imageId === 0
												? 'editor-post-featured-image__toggle'
												: 'editor-post-featured-image__preview'
										}
										onClick={ open }
									>
										{ imageId === 0 &&
											__(
												'Choose an image',
												'unityblocks'
											) }
										{ props.media !== undefined && (
											<ResponsiveWrapper
												naturalWidth={
													props.media.media_details
														.width
												}
												naturalHeight={
													props.media.media_details
														.height
												}
											>
												<img
													alt={ props.media.alt }
													src={
														props.media.source_url
													}
												/>
											</ResponsiveWrapper>
										) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
						{ imageId !== 0 && (
							<MediaUploadCheck>
								<MediaUpload
									title={ __(
										'Replace image',
										'unityblocks'
									) }
									value={ imageId }
									onSelect={ onSelectMedia }
									allowedTypes={ [ 'image' ] }
									render={ ( { open } ) => (
										<Button
											onClick={ open }
											isDefault
											isLarge
										>
											{ __(
												'Replace image',
												'unityblocks'
											) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
						) }
						{ imageId !== 0 && (
							<MediaUploadCheck>
								<Button
									onClick={ removeMedia }
									isLink
									isDestructive
								>
									{ __( 'Remove image', 'unityblocks' ) }
								</Button>
							</MediaUploadCheck>
						) }
					</div>
				</PanelBody>

				<PanelBody
					title={ __( 'Card settings', 'unityblocks' ) }
					initialOpen={ false }
				>
        <PanelRow>
        <label htmlFor={ typeId } className="components-button-group__label">
          { __( 'Card type', 'unityblocks' ) }
        </label>
        <ButtonGroup id={ typeId } label={ __( 'Card type', 'unityblocks' ) }>
        { [ 'default', 'degree', 'event', 'news', 'story' ].map( ( typeValue ) => {
								return (
                  <Button
										key={ typeValue }
										isSmall
                    isPrimary={ typeValue === type? true : undefined}
										onClick={ () => setAttributes( { type: typeValue } ) }
									>
										{ typeValue }
									</Button>
								);
							} ) }
          </ButtonGroup>
        </PanelRow>

        <PanelRow>
        <label htmlFor={ widthId } className="components-button-group__label">
          { __( 'Card width', 'unityblocks' ) }
        </label>
        <ButtonGroup id={ widthId } label={ __( 'Card width', 'unityblocks' ) }>
        { [ 25, 50, 75, 100 ].map( ( widthValue ) => {
								return (
                  <Button
										key={ widthValue }
										isSmall
                    isPrimary={ `${ widthValue }%` === width? true : undefined}
										onClick={ () => setAttributes( { width: `${ widthValue }%` } ) }
									>
										{ widthValue }%
									</Button>
								);
							} ) }
          </ButtonGroup>
        </PanelRow>

        <PanelRow>
        <label htmlFor={ horizontalId } className="components-toggle-control__label">
				{ __( 'Horizontal?', 'unityblocks' ) }
			  </label>
        <FormToggle
        id={ horizontalId }
        checked={ horizontal }
        onChange={ ( ) =>
          setAttributes( { horizontal: !horizontal } )
        }
        />
        </PanelRow>

        <PanelRow>
        <label htmlFor={ clickableId } className="components-toggle-control__label">
				{ __( 'Clickable?', 'unityblocks' ) }
			  </label>
        <FormToggle
        id={ clickableId }
        checked={ clickable }
        onChange={ ( ) =>
          setAttributes( { clickable: !clickable }  )
        }
        />
        </PanelRow>
{ clickable == true &&
        <PanelRow>
          <TextControl
            label={ 'Link to:' }
            placeholder="example.com"
            value={ clickHref }
            onChange={ ( clickHref ) =>
              setAttributes( { clickHref } )
            }
          />
        </PanelRow>
      }
				</PanelBody>

        <PanelBody
					title={ __( 'Card content', 'unityblocks' ) }
					initialOpen={ false }
				>

        <PanelRow>
          <TextControl
            label={ 'Card title' }
            value={ title }
            onChange={ ( title ) =>
              setAttributes( { title } )
            }
          />
        </PanelRow>

        <PanelRow>
          <TextControl
            label={ 'Card icon' }
            value={ icon }
            onChange={ ( icon ) =>
              setAttributes( { icon } )
            }
          />
        </PanelRow>

        <PanelRow>
        	<label htmlFor={ bodyId } className="components-toggle-control__label">
        		{ __( 'Card body', 'unityblocks' ) }
        	</label>
        	<RichText
        		id={ bodyId }
        		tagName={ 'figcaption' }
        		value={ body }
        		onChange={ ( body ) => setAttributes( { body } ) }
        	/>
        </PanelRow>


        <PanelRow>
        <label htmlFor={ eventFormatId } className="components-toggle-control__label">
          { __( 'Event Format', 'unityblocks' ) }
        </label>
        <ButtonGroup id={ eventFormatId }>
          <Button
          key={ 'stack' }
          isPrimary={ 'stack' === eventFormat? true : undefined}
          onClick={ () =>setAttributes( { eventFormat: 'stack' } ) }
          >Stack</Button>
          <Button
          key={ 'inline' }
          isPrimary={ 'inline' === eventFormat? true : undefined}
          onClick={ () =>setAttributes( { eventFormat: 'inline' } ) }
          >Inline</Button>
          </ButtonGroup>
        </PanelRow>

        <PanelRow>
          <TextControl
            label={ 'Event Location' }
            value={ eventLocation }
            onChange={ ( eventLocation ) =>
              setAttributes( { eventLocation } )
            }
          />
        </PanelRow>

        <PanelRow>
          <TextControl
            label={ 'Event Time' }
            value={ eventTime }
            onChange={ ( eventTime ) =>
              setAttributes( { eventTime } )
            }
          />
        </PanelRow>

        <PanelRow>
          <TextControl
            label={ 'Link label' }
            value={ linkLabel }
            onChange={ ( linkLabel ) =>
              setAttributes( { linkLabel } )
            }
          />
        </PanelRow>

        <PanelRow>
          <TextControl
            label={ 'Link URL' }
            value={ linkUrl }
            onChange={ ( linkUrl ) =>
              setAttributes( { linkUrl } )
            }
          />
        </PanelRow>







        </PanelBody>

			</InspectorControls>
		</>
	);
};

export default Inspector;
