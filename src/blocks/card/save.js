/**
 * External dependencies
 */
import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';

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
		>
    <InnerBlocks.Content /></div>
	);
};

export default save;
