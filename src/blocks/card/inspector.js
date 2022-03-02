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
	IconButton,
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
			buttonsColor,
			buttonsIcon,
			buttonsHref,
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
	const buttonsColorId = `button-color-toggle-control-${ instanceId2 }`;
	const buttonsSizeId = `button-size-toggle-control-${ instanceId2 }`;
	const buttonsTargetId = `button-Target-toggle-control-${ instanceId2 }`;
	const tagsColorId = `tag-color-toggle-control-${ instanceId2 }`;

	const handleAddButton = () => {
		const buttonsColor = [ ...props.attributes.buttonsColor ];
		const buttonsIcon = [ ...props.attributes.buttonsIcon ];
		const buttonsHref = [ ...props.attributes.buttonsHref ];
		const buttonsLabel = [ ...props.attributes.buttonsLabel ];
		const buttonsOnclick = [ ...props.attributes.buttonsOnclick ];
		const buttonsSize = [ ...props.attributes.buttonsSize ];
		const buttonsTarget = [ ...props.attributes.buttonsTarget ];
		buttonsColor.push( 'maroon' );
		buttonsIcon.push( '' );
		buttonsHref.push( '' );
		buttonsLabel.push( 'Read more' );
		buttonsOnclick.push( '' );
		buttonsSize.push( 'default' );
		buttonsTarget.push( '_blank' );
		props.setAttributes( { buttonsColor } );
		props.setAttributes( { buttonsLabel } );
    console.log(buttonsLabel);
	};

	const handleRemoveButton = ( index ) => {
		const buttonsColor = [ ...props.attributes.buttonsColor ];
		const buttonsIcon = [ ...props.attributes.buttonsIcon ];
		const buttonsHref = [ ...props.attributes.buttonsHref ];
		const buttonsLabel = [ ...props.attributes.buttonsLabel ];
		const buttonsOnclick = [ ...props.attributes.buttonsOnclick ];
		const buttonsSize = [ ...props.attributes.buttonsSize ];
		const buttonsTarget = [ ...props.attributes.buttonsTarget ];
		buttonsColor.splice( index, 1 );
		buttonsIcon.splice( index, 1 );
		buttonsHref.splice( index, 1 );
		buttonsLabel.splice( index, 1 );
		buttonsOnclick.splice( index, 1 );
		buttonsSize.splice( index, 1 );
		buttonsTarget.splice( index, 1 );
		props.setAttributes( { buttonsLabel } );
	};

	const handleButtonsColorChange = ( text, index ) => {
		const buttonsColor = [ ...props.attributes.buttonsColor ];
		buttonsColor[ index ] = text;
		props.setAttributes( { buttonsColor } );
	};

	const handleButtonsIconChange = ( text, index ) => {
		const buttonsIcon = [ ...props.attributes.buttonsIcon ];
		buttonsIcon[ index ] = text;
		props.setAttributes( { buttonsIcon } );
	};

	const handleButtonsHrefChange = ( text, index ) => {
		const buttonsHref = [ ...props.attributes.buttonsHref ];
		buttonsHref[ index ] = text;
		props.setAttributes( { buttonsHref } );
	};

	const handleButtonsLabelChange = ( text, index ) => {
		const buttonsLabel = [ ...props.attributes.buttonsLabel ];
		buttonsLabel[ index ] = text;
		props.setAttributes( { buttonsLabel } );
    console.log(buttonsLabel);
	};

	const handleButtonsOnclickChange = ( text, index ) => {
		const buttonsOnclick = [ ...props.attributes.buttonsOnclick ];
		buttonsOnclick[ index ] = text;
		props.setAttributes( { buttonsOnclick } );
	};

	const handleButtonsSizeChange = ( text, index ) => {
		const buttonsSize = [ ...props.attributes.buttonsSize ];
		buttonsSize[ index ] = text;
		props.setAttributes( { buttonsSize } );
	};

	const handleButtonsTargetChange = ( text, index ) => {
		const buttonsTarget = [ ...props.attributes.buttonsTarget ];
		buttonsTarget[ index ] = text;
		props.setAttributes( { buttonsTarget } );
	};

	let buttonFields;

	if ( props.attributes.buttonsLabel.length ) {
		buttonFields = props.attributes.buttonsLabel.map(
			( buttonsLabel, index ) => {
				return (
					<PanelBody key={ index }>
						<PanelRow>
							<label
								htmlFor={ buttonsColorId }
								className="components-button-group__label"
							>
								{ __( 'Button color', 'unityblocks' ) }
							</label>
							<ButtonGroup
								id={ buttonsColorId }
								label={ __( 'Button color', 'unityblocks' ) }
							>
								{ [ 'gold', 'maroon', 'gray', 'dark' ].map(
									( buttonsColorValue ) => {
										return (
											<Button
												key={ buttonsColorValue }
												isSmall
												isPrimary={
													buttonsColorValue ===
													props.attributes
														.buttonsColor[ index ]
														? true
														: undefined
												}
												onClick={ () =>
													handleButtonsColorChange(
														buttonsColorValue,
														index
													)
												}
											>
												{ buttonsColorValue }
											</Button>
										);
									}
								) }
							</ButtonGroup>
							<IconButton
								className="card__remove-button"
								icon="no-alt"
								label="Delete Button"
								onClick={ () => handleRemoveButton( index ) }
							/>
						</PanelRow>

						<PanelRow>
							<label
								htmlFor={ buttonsSizeId }
								className="components-button-group__label"
							>
								{ __( 'Button size', 'unityblocks' ) }
							</label>
							<ButtonGroup
								id={ buttonsSizeId }
								label={ __( 'Button size', 'unityblocks' ) }
							>
								{ [ 'default', 'small', 'xsmall' ].map(
									( buttonsSizeValue ) => {
										return (
											<Button
												key={ buttonsSizeValue }
												isSmall
												isPrimary={
													buttonsSizeValue ===
													props.attributes
														.buttonsSize[ index ]
														? true
														: undefined
												}
												onClick={ () =>
													handleButtonsSizeChange(
														buttonsSizeValue,
														index
													)
												}
											>
												{ buttonsSizeValue }
											</Button>
										);
									}
								) }
							</ButtonGroup>
						</PanelRow>

						<PanelRow>
							<TextControl
								className="card__button-label"
								label={ __( 'Button label', 'unityblocks' ) }
								value={ props.attributes.buttonsLabel[ index ] }
								onChange={ ( buttonsLabel ) =>
									handleButtonsLabelChange(buttonsLabel, index)
								}
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								className="card__button-href"
								label={ __( 'Button URL', 'unityblocks' ) }
								value={ props.attributes.buttonsHref[ index ] }
								onChange={ ( buttonsHref ) =>
									handleButtonsHrefChange(
										buttonsHref,
										index
									)
								}
							/>
						</PanelRow>

						<PanelRow>
							<label
								htmlFor={ buttonsTargetId }
								className="components-button-group__label"
							>
								{ __( 'Button Target', 'unityblocks' ) }
							</label>
							<ButtonGroup
								id={ buttonsTargetId }
								label={ __( 'Button Target', 'unityblocks' ) }
							>
								{ [ '_blank', '_self', '_top', '_parent' ].map(
									( buttonsTargetValue ) => {
										return (
											<Button
												key={ buttonsTargetValue }
												isSmall
												isPrimary={
													buttonsTargetValue ===
													props.attributes
														.buttonsTarget[ index ]
														? true
														: undefined
												}
												onClick={ () =>
													handleButtonsTargetChange(
														buttonsTargetValue,
														index
													)
												}
											>
												{ buttonsTargetValue }
											</Button>
										);
									}
								) }
							</ButtonGroup>
						</PanelRow>
					</PanelBody>
				);
			}
		);
	}

	const handleAddTag = () => {
		const tagsColor = [ ...props.attributes.tagsColor ];
		const tagsHref = [ ...props.attributes.tagsHref ];
		const tagsLabel = [ ...props.attributes.tagsLabel ];
		const tagsOnclick = [ ...props.attributes.tagsOnclick ];
		tagsColor.push( 'gray' );
		tagsHref.push( '' );
		tagsLabel.push( 'Tag text' );
		tagsOnclick.push( '' );
		props.setAttributes( { tagsColor } );
		props.setAttributes( { tagsLabel } );
	};

	const handleRemoveTag = ( index ) => {
		const tagsColor = [ ...props.attributes.tagsColor ];
		const tagsHref = [ ...props.attributes.tagsHref ];
		const tagsLabel = [ ...props.attributes.tagsLabel ];
		const tagsOnclick = [ ...props.attributes.tagsOnclick ];
		tagsColor.splice( index, 1 );
		tagsHref.splice( index, 1 );
		tagsLabel.splice( index, 1 );
		tagsOnclick.splice( index, 1 );
		props.setAttributes( { tagsLabel } );
	};

	const handleTagsColorChange = ( text, index ) => {
		const tagsColor = [ ...props.attributes.tagsColor ];
		tagsColor[ index ] = text;
		props.setAttributes( { tagsColor } );
	};

	const handleTagsHrefChange = ( text, index ) => {
		const tagsHref = [ ...props.attributes.tagsHref ];
		tagsHref[ index ] = text;
		props.setAttributes( { tagsHref } );
	};

	const handleTagsLabelChange = ( text, index ) => {
		const tagsLabel = [ ...props.attributes.tagsLabel ];
		tagsLabel[ index ] = text;
		props.setAttributes( { tagsLabel } );
	};

	const handleTagsOnclickChange = ( text, index ) => {
		const tagsOnclick = [ ...props.attributes.tagsOnclick ];
		tagsOnclick[ index ] = text;
		props.setAttributes( { tagsOnclick } );
	};

	let tagFields;

	if ( props.attributes.tagsLabel.length ) {
		tagFields = props.attributes.tagsLabel.map( ( tagsLabel, index ) => {
			return (
				<PanelBody key={ index }>
					<PanelRow>
						<label
							htmlFor={ tagsColorId }
							className="components-tag-group__label"
						>
							{ __( 'Tag color', 'unityblocks' ) }
						</label>
						<ButtonGroup
							id={ tagsColorId }
							label={ __( 'Tag color', 'unityblocks' ) }
						>
							{ [ 'white', 'gray', 'dark' ].map(
								( tagsColorValue ) => {
									return (
										<Button
											key={ tagsColorValue }
											isSmall
											isPrimary={
												tagsColorValue ===
												props.attributes.tagsColor[
													index
												]
													? true
													: undefined
											}
											onClick={ () =>
												handleTagsColorChange(
													tagsColorValue,
													index
												)
											}
										>
											{ tagsColorValue }
										</Button>
									);
								}
							) }
						</ButtonGroup>
						<IconButton
							className="card__remove-tag"
							icon="no-alt"
							label="Delete Tag"
							onClick={ () => handleRemoveTag( index ) }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							className="card__tag-label"
							label={ __( 'Tag label', 'unityblocks' ) }
							value={ props.attributes.tagsLabel[ index ] }
							onChange={ ( tagsLabel ) =>
								handleTagsLabelChange( tagsLabel, index )
							}
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							className="card__tag-href"
							label={ __( 'Tag URL', 'unityblocks' ) }
							value={ props.attributes.tagsHref[ index ] }
							onChange={ ( tagsHref ) =>
								handleTagsHrefChange( tagsHref, index )
							}
						/>
					</PanelRow>
				</PanelBody>
			);
		} );
	}


  const handleCardIconChange = ( text ) => {
    //const icon = [ ...props.attributes.icon ];
    //icon.push('fa');
    let icon1 = text.split(' ');
    //console.log(icon1);
    props.setAttributes( { icon:text } );

    //console.log(icon);
  };
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
						<label
							htmlFor={ typeId }
							className="components-button-group__label"
						>
							{ __( 'Card type', 'unityblocks' ) }
						</label>
						<ButtonGroup
							id={ typeId }
							label={ __( 'Card type', 'unityblocks' ) }
						>
							{ [
								'default',
								'degree',
								'event',
								'news',
								'story',
							].map( ( typeValue ) => {
								return (
									<Button
										key={ typeValue }
										isSmall
										isPrimary={
											typeValue === type
												? true
												: undefined
										}
										onClick={ () =>
											setAttributes( { type: typeValue } )
										}
									>
										{ typeValue }
									</Button>
								);
							} ) }
						</ButtonGroup>
					</PanelRow>

					{ type == 'event' && (
						<PanelRow>
							<label
								htmlFor={ eventFormatId }
								className="components-toggle-control__label"
							>
								{ __( 'Event Format', 'unityblocks' ) }
							</label>
							<ButtonGroup id={ eventFormatId }>
								<Button
									key={ 'stack' }
									isPrimary={
										'stack' === eventFormat
											? true
											: undefined
									}
									onClick={ () =>
										setAttributes( {
											eventFormat: 'stack',
										} )
									}
								>
									Stack
								</Button>
								<Button
									key={ 'inline' }
									isPrimary={
										'inline' === eventFormat
											? true
											: undefined
									}
									onClick={ () =>
										setAttributes( {
											eventFormat: 'inline',
										} )
									}
								>
									Inline
								</Button>
							</ButtonGroup>
						</PanelRow>
					) }

					<PanelRow>
						<label
							htmlFor={ widthId }
							className="components-button-group__label"
						>
							{ __( 'Card width', 'unityblocks' ) }
						</label>
						<ButtonGroup
							id={ widthId }
							label={ __( 'Card width', 'unityblocks' ) }
						>
							{ [ 25, 50, 75, 100 ].map( ( widthValue ) => {
								return (
									<Button
										key={ widthValue }
										isSmall
										isPrimary={
											`${ widthValue }%` === width
												? true
												: undefined
										}
										onClick={ () =>
											setAttributes( {
												width: `${ widthValue }%`,
											} )
										}
									>
										{ widthValue }%
									</Button>
								);
							} ) }
						</ButtonGroup>
					</PanelRow>

					<PanelRow>
						<label
							htmlFor={ horizontalId }
							className="components-toggle-control__label"
						>
							{ __( 'Horizontal?', 'unityblocks' ) }
						</label>
						<FormToggle
							id={ horizontalId }
							checked={ horizontal }
							onChange={ () =>
								setAttributes( { horizontal: ! horizontal } )
							}
						/>
					</PanelRow>

					<PanelRow>
						<label
							htmlFor={ clickableId }
							className="components-toggle-control__label"
						>
							{ __( 'Clickable?', 'unityblocks' ) }
						</label>
						<FormToggle
							id={ clickableId }
							checked={ clickable }
							onChange={ () =>
								setAttributes( { clickable: ! clickable } )
							}
						/>
					</PanelRow>
					{ clickable == true && (
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
					) }
				</PanelBody>

				<PanelBody
					title={ __( 'Card content', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Card title' }
							value={ title }
							onChange={ ( title ) => setAttributes( { title } ) }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label={ 'Card icon' }
							value={ icon }
							onChange={ ( icon ) => handleCardIconChange( icon ) }
						/>
					</PanelRow>

					<PanelRow>
						<label
							htmlFor={ bodyId }
							className="components-toggle-control__label"
						>
							{ __( 'Card body', 'unityblocks' ) }
						</label>
						<RichText
							id={ bodyId }
							tagName={ 'figcaption' }
							value={ body }
							onChange={ ( body ) => setAttributes( { body } ) }
						/>
					</PanelRow>

					{ type == 'event' && (
						<PanelRow>
							<TextControl
								label={ 'Event Location' }
								value={ eventLocation }
								onChange={ ( eventLocation ) =>
									setAttributes( { eventLocation } )
								}
							/>
						</PanelRow>
					) }
					{ type == 'event' && (
						<PanelRow>
							<TextControl
								label={ 'Event Time' }
								value={ eventTime }
								onChange={ ( eventTime ) =>
									setAttributes( { eventTime } )
								}
							/>
						</PanelRow>
					) }
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

				<PanelBody title={ __( 'Buttons', 'unityblocks' ) }>
					{ buttonFields }
					<PanelRow>
						<Button
							isDefault
							onClick={ handleAddButton.bind( this ) }
						>
							{ __( 'Add Button' ) }
						</Button>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Tags', 'unityblocks' ) }>
					{ tagFields }
					<PanelRow>
						<Button isDefault onClick={ handleAddTag.bind( this ) }>
							{ __( 'Add Tag' ) }
						</Button>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
