/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
const save = (props) => {
  const {
    attributes: {
      firstElementId,
      focusFirstFocusableElement,
      itemIcons,
      itemTexts,
      itemTargets,
    },
  } = props;

  const items = itemTexts.map((itemText, index) => {
    const item = {
      text: itemText,
      targetIdName: itemTargets[index],
    };
    if (Array.isArray(itemIcons[index]) && itemIcons[index].length > 0) {
      item.icon = itemIcons[index];
    }
    return item;
  });

  const propsJson = JSON.stringify(
    { items, firstElementId, focusFirstFocusableElement },
    null,
    2
  ).replace(/<\//g, "<\\/");

  const initScript = `unityReactCore.initAnchorMenu({
  targetSelector: "#anchor-menu-component",
  props: ${propsJson}
});`;

  return (
    <div {...useBlockProps.save()}>
      <div id="anchor-menu-component"></div>
      <script
        dangerouslySetInnerHTML={{ __html: initScript }}
      />
    </div>
  );
};

export default save;
