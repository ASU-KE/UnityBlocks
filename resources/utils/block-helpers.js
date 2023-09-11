/**
 * WordPress dependencies
 */
import { registerBlockCollection } from "@wordpress/blocks";

/**
 * Return bool depending on registerBlockCollection compatibility.
 *
 * @return {boolean} Value to indicate function support.
 */
export const supportsCollections = () => {
  if (typeof registerBlockCollection === "function") {
    return true;
  }
  return false;
};
