/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

// Register block category
import './utils/block-category';

// Categories Helper
import { supportsCollections } from './utils/block-helpers';

// Register Blocks
import * as anchorMenu from './blocks/anchor-menu';
import * as hero from './blocks/hero';
import * as eventsGrid from './blocks/events-grid';
import * as eventsList from './blocks/events-list';
import * as imageGallery from './blocks/image-gallery';
import * as newsCarousel from './blocks/news-carousel';
import * as newsGrid from './blocks/news-grid';
import * as newsList from './blocks/news-list';
import * as testimonial from './blocks/testimonial';
import * as asuCareers from './blocks/asu-careers';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	let { category } = block;

	const { name, settings } = block;

	if ( ! supportsCollections() ) {
		category = 'unityblocks';
	}

	registerBlockType( name, {
		category,
		...settings,
	} );
};

/**
 * Function to register blocks provided by UnityBlocks.
 */
export const registerUnityBlocksBlocks = () => {
	[
		anchorMenu,
		hero,
		eventsGrid,
		eventsList,
		imageGallery,
		newsCarousel,
		newsGrid,
		newsList,
		testimonial,
		asuCareers,
		,
	].forEach( registerBlock );
};

registerUnityBlocksBlocks();
