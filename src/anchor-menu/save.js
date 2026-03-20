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

  return (
    <div
      id="unityblocks-anchor-menu"
      {...useBlockProps.save({
        className: "uds-anchor-menu uds-anchor-menu-expanded-lg mb-4",
      })}
      data-first-element-id={firstElementId}
      data-focus-first-focusable-element={focusFirstFocusableElement}
    >
      <div className="container-xl uds-anchor-menu-wrapper">
        <h2>On This Page:</h2>
        <div
          data-testid="anchor-menu-container"
          id="collapseAnchorMenu"
          className="card card-body collapse"
        >
          <nav data-testid="anchor-menu" className="nav" aria-label="On This Page">
            {itemTexts.map((itemText, index) => (
              <button
                key={itemTargets[index]}
                type="button"
                data-testid={`anchor-item-${itemTargets[index]}`}
                className="nav-link"
                aria-label={itemText}
                data-ga={itemText}
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-section=""
                data-target={itemTargets[index]}
              >
                {Array.isArray(itemIcons[index]) &&
                  itemIcons[index][0] &&
                  itemIcons[index][1] && (
                    <i
                      className={`${itemIcons[index][0]} fa-${itemIcons[index][1]} me-1`}
                    />
                  )}
                {itemText}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default save;
