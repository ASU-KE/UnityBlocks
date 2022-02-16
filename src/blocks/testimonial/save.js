/**
 * External dependencies
 */
import classnames from 'classnames';

const save = ( props ) => {
	const {
		attributes: {
			quoteTitle,
			quoteContent,
			quoteCiteName,
			quoteCiteDescription,
			mediaUrl,
			mediaAltText,
			containerCssClass,
			titleCssClass,
			contentCssClass,
		},
		className,
	} = props;

	const quote = {
		title: quoteTitle,
		content: quoteContent,
		cite: {
			name: quoteCiteName,
			description: quoteCiteDescription,
		},
	};

	const itemStyle = {
		containerCssClass,
		titleCssClass,
		contentCssClass,
	};

	return (
		<div
			className={ classnames( className ) }
			data-quote={ JSON.stringify( quote ) }
			data-itemstyle={ JSON.stringify( itemStyle ) }
			data-imagesource={ mediaUrl }
			data-imagealttext={ mediaAltText }
		></div>
	);
};

export default save;
