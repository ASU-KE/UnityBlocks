/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  RadioControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = (props) => {
  const {
    attributes: {
      enableHeader,
      headerText,
      headerColor,
      ctaColor,
      ctaText,
      ctaUrl,
      dataSourceUrl,
      dataSourceFilters,
      noResultsText,
      maxItems,
    },
    setAttributes,
  } = props;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Header", "unityblocks")} initialOpen={true}>
          <PanelRow>
            <ToggleControl
              label={"Enable Header"}
              help={enableHeader ? "Header enabled." : "Header disabled."}
              checked={enableHeader}
              onChange={(value) => {
                setAttributes({ enableHeader: value });
              }}
            />
          </PanelRow>
          {enableHeader && (
            <>
              <PanelRow>
                <TextControl
                  label={"Header text"}
                  value={headerText}
                  onChange={(value) => setAttributes({ headerText: value })}
                />
              </PanelRow>
              <PanelRow>
                <RadioControl
                  label={__("Header text color", "unityblocks")}
                  selected={headerColor}
                  options={[
                    {
                      label: __("White", "unityblocks"),
                      value: "white",
                    },
                    {
                      label: __("Dark", "unityblocks"),
                      value: "dark",
                    },
                  ]}
                  onChange={(value) => setAttributes({ headerColor: value })}
                />
              </PanelRow>
            </>
          )}
        </PanelBody>

        {enableHeader && (
          <PanelBody
            title={__("CTA button", "unityblocks")}
            initialOpen={false}
          >
            <PanelRow>
              <TextControl
                label={"CTA text"}
                placeholder="Click to see more events"
                value={ctaText}
                onChange={(value) => setAttributes({ ctaText: value })}
              />
            </PanelRow>
            <PanelRow>
              <TextControl
                className="eventsgrid__cardbutton-url"
                label={"CTA URL"}
                value={ctaUrl}
                onChange={(value) => setAttributes({ ctaUrl: value })}
              />
            </PanelRow>
            <PanelRow>
              <RadioControl
                label={__("CTA button color", "unityblocks")}
                selected={ctaColor}
                options={[
                  {
                    label: __("Gold", "unityblocks"),
                    value: "gold",
                  },
                  {
                    label: __("Maroon", "unityblocks"),
                    value: "maroon",
                  },
                  {
                    label: __("Gray", "unityblocks"),
                    value: "gray",
                  },
                  {
                    label: __("Dark", "unityblocks"),
                    value: "dark",
                  },
                ]}
                onChange={(value) => setAttributes({ ctaColor: value })}
              />
            </PanelRow>
          </PanelBody>
        )}

        <PanelBody>
          <PanelRow>
            <TextControl
              label={"Text to display when no results found"}
              value={noResultsText}
              onChange={(value) => setAttributes({ noResultsText: value })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={"Max items to load"}
              help={
                "Changing this value doesn't update the Edit view immediately. Update and reload to refresh the editor."
              }
              value={maxItems}
              onChange={(value) =>
                setAttributes({
                  maxItems: Number(value), // Force attribute to number because this input field returns value as string.
                })
              }
            />
          </PanelRow>
        </PanelBody>

        <PanelBody title={__("Data Source", "unityblocks")} initialOpen={false}>
          <PanelRow>
            <TextControl
              label={"Url"}
              help={"Data source url requires CORS proxy."}
              value={dataSourceUrl}
              onChange={(value) =>
                setAttributes({
                  dataSourceUrl: value,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={"Events filters"}
              help={
                "Enter taxonomy terms, separated by commas. For the master list of available filtering terms, refer to: https://asuevents.asu.edu/reports/taxonomy-terms"
              }
              value={dataSourceFilters}
              onChange={(value) =>
                setAttributes({
                  dataSourceFilters: value,
                })
              }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </>
  );
};

export default Inspector;
