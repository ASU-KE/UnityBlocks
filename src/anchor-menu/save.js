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
    attributes: { itemIcons, itemTexts, itemTargets },
  } = props;

  return (
    <div
      id="uds-anchor-menu"
      {...useBlockProps.save({
        className: "uds-anchor-menu uds-anchor-menu-expanded-lg",
      })}
    >
      <div className="container">
        <div className="uds-anchor-menu-wrapper">
          <h2
            data-bs-toggle="collapse"
            data-bs-target="#anchorMenuNav"
            aria-expanded="false"
            aria-controls="anchorMenuNav"
          >
            On This Page: <span className="fas fa-chevron-down"></span>
          </h2>
          <div id="anchorMenuNav" className="card card-body collapse">
            <nav className="nav" aria-label="Page navigation">
              {itemTexts.map((itemText, index) => (
                <a
                  key={itemTargets[index]}
                  className="nav-link"
                  href={`#${itemTargets[index]}`}
                  data-ga-name="onclick"
                  data-ga-event="link"
                  data-ga-action="click"
                  data-ga-type="internal link"
                  data-ga-region="main content"
                  data-ga-section={itemText}
                  data-ga-text={itemText}
                >
                  {Array.isArray(itemIcons[index]) &&
                    itemIcons[index].length >= 2 && (
                      <span
                        className={`${itemIcons[index][0]} fa-${itemIcons[index][1]}`}
                      ></span>
                    )}
                  {itemText}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default save;
