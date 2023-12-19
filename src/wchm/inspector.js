/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, ToggleControl } from "@wordpress/components";

const Inspector = (props) => {
  const {
    attributes: {
      useProdApi,
    },
  } = props;

  return (
    <InspectorControls>
      <PanelBody title={__("Who Can Help Me", "unityblocks")}>
        <PanelRow>
          <ToggleControl
            label={"Use Prod API?"}
            help={useProdApi ? "Prod API enabled." : "Dev API disabled."}
            checked={useProdApi}
            onChange={(value) => {
              setAttributes({ useProdApi: value });
            }}
          />
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  );
};

export default Inspector;
