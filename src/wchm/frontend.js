const { render } = wp.element;

import { WCHM } from "./components/WCHM";

// It is possible to load multiple Careers blocks onto a page.
// Load each DOM element on the page using the Gutenberg-generated class for the WCHMs block
const wchmBlocks = document.querySelectorAll(".wp-block-unityblocks-wchm");

wchmBlocks.forEach((block) => {
  render(<WCHM />, block);
});
