/**
 * WordPress dependencies
 */
import {
  getCategories,
  setCategories,
  registerBlockCollection,
} from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import { supportsCollections } from "./block-helpers";

const categories = getCategories();

/**
 * Function to register a block collection for our blocks.
 */
if (supportsCollections()) {
  registerBlockCollection("unityblocks", {
    title: "UnityBlocks",
    icon: "welcome-learn-more",
  });
} else {
  categories.unshift({
    slug: "unityblocks",
    title: "UnityBlocks",
    icon: "welcome-learn-more",
  });
}

setCategories(categories);
