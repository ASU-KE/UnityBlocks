// @ts-check
import { shortenText } from '../utils/shorten-text';

// Transformer data function provided to the high order component
const transformData = ( post ) => ( {
	id: post.id,
	imageUrl: post.uds_featured_image.media_details.sizes.medium.source_url,
	imageAltText: post.uds_featured_image.alt_text,
	title: shortenText( post.title.rendered, 80 ),
	content: post.excerpt.rendered,
	buttonLink: post.slug,
	interests: post.interest,
	newsUnits: post.college_unit,
} );

export { transformData };
