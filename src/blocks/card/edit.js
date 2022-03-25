/**
 * External dependencies
 */
import { Card } from '@asu-design-system/components-core/dist/libCore.es';

/**
 * Internal dependencies
 */
// import Controls from './controls';
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

	const buttons = buttonsLabel.map( ( _singleButton, index ) => {
		return {
			color: buttonsColor[ index ],
			icon: buttonsIcon[ index ].split( ' ' ),
			href: buttonsHref[ index ],
			label: buttonsLabel[ index ],
			size: buttonsSize[ index ],
			target: buttonsTarget[ index ],
		};
	} );

	const tags = tagsLabel.map( ( _singleTag, index ) => {
		return {
			color: tagsColor[ index ],
			href: tagsHref[ index ],
			label: tagsLabel[ index ],
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
		icon: icon.split( ' ' ),
		body,
		eventFormat,
		eventLocation,
		eventTime,
		buttons,
		linkLabel,
		linkUrl,
		tags,
	};

	return (
		<>
			<Inspector { ...props } />
			<div className={ className }>
				<Card { ...args } />
			</div>
		</>
	);
};

export default Edit;
