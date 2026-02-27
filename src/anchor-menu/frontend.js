const { render } = wp.element;


import { AnchorMenu } from "@asu-unity-stack/packages/unity-react-core/src/components/AnchorMenu/AnchorMenu";

// var stickyMenu = document.getElementsByClassName("uds-anchor-menu");

// const onScroll = () => {
//   const scroll = document.documentElement.scrollTop;

//   if (scroll > 500) {
//     stickyMenu[0].classList.add("sticky");
//   } else {
//     stickyMenu[0].classList.remove("sticky");
//   }
// };

// window.addEventListener("scroll", onScroll);

/*
Load the block attributes from the dom element attributes.

If the Unity component was designed to be inserted multiple times into a page, we would select
the dom elements by the WP-generated class and load the resulting elements into an array.
The class for this block is wp-block-unityblocks-anchor-menu.

However, the AnchorMenu React component only targets a single occurrence on a page using an element
id.
*/

// Load first element with the unityblocks-anchormenu id
const menu = document.querySelector("#unityblocks-anchor-menu");

const items = JSON.parse(menu.dataset.items);
const firstElementId = menu.dataset.firstElementId;
const focusFirstFocusableElement = menu.dataset.focusFirstFocusableElement === "true";

render(
  <AnchorMenu
    items={items}
    firstElementId={firstElementId}
    focusFirstFocusableElement={focusFirstFocusableElement}
  />,
  menu
);
