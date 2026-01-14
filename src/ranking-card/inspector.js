/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  RadioControl,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = (props) => {
  const {
    attributes: {
      imageSize,
      image,
      imageAlt,
      heading,
      body,
      readMoreLink,
      citation,
    },
    setAttributes,
  } = props;

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Image Settings", "unityblocks")} initialOpen={true}>
          <PanelRow>
            <RadioControl
              label={__("Image size", "unityblocks")}
              selected={imageSize}
              options={[
                {
                  label: __("Large", "unityblocks"),
                  value: "large",
                },
                {
                  label: __("Small", "unityblocks"),
                  value: "small",
                },
              ]}
              onChange={(value) => setAttributes({ imageSize: value })}
            />
          </PanelRow>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => {
                  setAttributes({
                    image: media.url,
                    imageAlt: media.alt || "",
                  });
                }}
                allowedTypes={["image"]}
                value={image}
                render={({ open }) => (
                  <div>
                    <Button onClick={open} variant="secondary">
                      {image ? __("Change Image", "unityblocks") : __("Select Image", "unityblocks")}
                    </Button>
                    {image && (
                      <div style={{ marginTop: "10px" }}>
                        <img src={image} alt={imageAlt} style={{ maxWidth: "100%", height: "auto" }} />
                      </div>
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>
          </PanelRow>
          <PanelRow>
            <TextControl
              label={__("Image Alt Text", "unityblocks")}
              value={imageAlt}
              onChange={(value) => setAttributes({ imageAlt: value })}
            />
          </PanelRow>
        </PanelBody>

        <PanelBody title={__("Content", "unityblocks")} initialOpen={true}>
          <PanelRow>
            <TextControl
              label={__("Heading", "unityblocks")}
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
            />
          </PanelRow>
          <PanelRow>
            <TextareaControl
              label={__("Body", "unityblocks")}
              value={body}
              onChange={(value) => setAttributes({ body: value })}
              rows={6}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={__("Read More Link", "unityblocks")}
              value={readMoreLink}
              onChange={(value) => setAttributes({ readMoreLink: value })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label={__("Citation", "unityblocks")}
              help={imageSize === "small" ? __("Required for small image size", "unityblocks") : __("Only shown when image size is small", "unityblocks")}
              value={citation}
              onChange={(value) => setAttributes({ citation: value })}
              disabled={imageSize !== "small"}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </>
  );
};

export default Inspector;
