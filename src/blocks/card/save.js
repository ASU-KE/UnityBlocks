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
			buttonsColor,
			buttonsIcon,
			buttonsHref,
			buttonsLabel,
			buttonsSize,
			buttonsTarget,
			linkLabel,
			linkUrl,
			tagsColor,
			tagsHref,
			tagsLabel,
		},
		className,
	} = props;

	const buttons = buttonsLabel.map( ( singleButton, index ) => {
		return {
			color: buttonsColor[ index ],
			icon: buttonsIcon[ index ].split( ' ' ),
			href: buttonsHref[ index ],
			label: buttonsLabel[ index ],
			size: buttonsSize[ index ],
			target: buttonsTarget[ index ],
		};
	} );

	const tags = tagsLabel.map( ( singleTag, index ) => {
		return {
			color: tagsColor[ index ],
			href: tagsHref[ index ],
			label: tagsLabel[ index ],
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
