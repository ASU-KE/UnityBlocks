/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow } from "@wordpress/components";

const Inspector = (props) => {
  return (
    <InspectorControls>
      <PanelBody title={__("WCHMs", "unityblocks")}>
        <PanelRow></PanelRow>
      </PanelBody>
    </InspectorControls>
  );
};

export default Inspector;
