/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: {
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
		className,
	} = props;


  const buttons = buttonsAriaLabel.map( ( buttonAriaLabel, index ) => {
		return {
      ariaLabel: buttonAriaLabel,
      color: buttonsColor[ index ],
      icon: buttonsIcon[ index ],
      href: buttonsHref[ index ],
      label: buttonsLabel[ index ],
      onClick: buttonsOnclick[ index ],
      size: buttonsSize[ index ],
      target: buttonsTarget[ index ],
		};
	} );

  const tags = tagsAriaLabel.map( ( tagAriaLabel, index ) => {
    return {
      ariaLabel: tagAriaLabel,
      color: tagsColor[ index ],
      href: tagsHref[ index ],
      label: tagsLabel[ index ],
      onClick: tagsOnclick[ index ],
    };
  } );


	return (
		<div
			className={ classnames( className ) }
      data-type={ type }
      data-width={ width }
      data-horizontal={ horizontal }
      data-clickable={ clickable }
      data-clickHref={ clickHref }
      data-image={ image }
      data-imageAltText={ imageAltText }
      data-title={ title }
      data-icon={ icon }
      data-body={ body }
      data-eventFormat={ eventFormat }
      data-eventLocation={ eventLocation }
      data-eventTime={ eventTime }
      data-buttons={ JSON.stringify( buttons ) }
      data-linkLabel={ linkLabel }
      data-linkUrl={ linkUrl }
      data-tags={ JSON.stringify( tags ) }
		></div>
	);
};

export default save;
