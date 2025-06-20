/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  PanelRow,
  RadioControl,
  SelectControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { useFetchWpRestTaxonomy } from "../../resources/utils/hooks/use-fetch-wp-rest-taxonomy";

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
      ctaText,
      ctaUrl,
      ctaColor,
      cardButtonText,
      cardButtonColor,
      cardButtonSize,
      enableStoryDate,
      enableStoryAuthor,
      enableCardTags,
      enableAsuDataSource,
      asuDataSourceUrl,
      asuDataSourceFeed,
      // asuDataSourceFilters,
      enableKeDataSource,
      keDataSourceUrl,
      keStoryBasePath,
      keDataSourceUnits,
      keDataSourceInterests,
      keDataSourceLocations,
      keDataSourcePage,
      keDataSourcePerPage,
      maxItems,
      numberColumns,
    },
    setAttributes,
  } = props;

  // Fetch College/Unit tags via WP-REST.
  const {
    payload: units,
    loading: unitsLoading,
    error: unitsError,
  } = useFetchWpRestTaxonomy(keDataSourceUrl, "college_unit");

  // Fetch Interest tags via WP-REST.
  const {
    payload: interests,
    loading: interestsLoading,
    error: interestsError,
  } = useFetchWpRestTaxonomy(keDataSourceUrl, "interest");

  // Fetch Locations tags via WP-REST.
  const {
    payload: locations,
    loading: locationsLoading,
    error: locationsError,
  } = useFetchWpRestTaxonomy(keDataSourceUrl, "location");

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Card and Grid Settings", "unityblocks")} initialOpen={true}>
        <PanelRow>
            <TextControl
              label={"Max items to load in view"}
              value={maxItems}
              onChange={(newValue) =>
                setAttributes({
                  maxItems: Number(newValue), // Force attribute to number because this input field returns value as string.
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <RadioControl
              label={__("Grid column width", "unityblocks")}
              selected={numberColumns}
              options={[
                {
                  label: __("Two (2)", "unityblocks"),
                  value: "2",
                },
                {
                  label: __("Three (3)", "unityblocks"),
                  value: "3",
                },
              ]}
              onChange={(newValue) =>
                setAttributes({
                  numberColumns: newValue,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={"Enable Story Date"}
              help={enableStoryDate ? "Date enabled." : "Date disabled."}
              checked={enableStoryDate}
              onChange={(newValue) => {
                setAttributes({ enableStoryDate: newValue });
              }}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={"Enable Story Author"}
              help={enableStoryAuthor ? "Author enabled." : "Author disabled."}
              checked={enableStoryAuthor}
              onChange={(newValue) => {
                setAttributes({
                  enableStoryAuthor: newValue,
                });
              }}
            />
          </PanelRow>
          {/* <PanelRow>
            <ToggleControl
              label={"Enable Card Tags"}
              help={enableCardTags ? "Tags enabled." : "Tags disabled."}
              checked={enableCardTags}
              onChange={(newValue) => {
                setAttributes({ enableCardTags: newValue });
              }}
            />
          </PanelRow> */}
        </PanelBody>
        <PanelBody title={__("Header", "unityblocks")} initialOpen={false}>
          <PanelRow>
            <ToggleControl
              label={"Enable Header"}
              help={enableHeader ? "Header enabled." : "Header disabled."}
              checked={enableHeader}
              onChange={(newValue) => {
                setAttributes({ enableHeader: newValue });
              }}
            />
          </PanelRow>
          {enableHeader && (
            <>
              <PanelRow>
                <TextControl
                  label={"Header text"}
                  value={headerText}
                  onChange={(newValue) =>
                    setAttributes({
                      headerText: newValue,
                    })
                  }
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
                  onChange={(newValue) =>
                    setAttributes({
                      headerColor: newValue,
                    })
                  }
                />
              </PanelRow>
              <PanelBody
                title={__("CTA button", "unityblocks")}
                initialOpen={false}
              >
                <PanelRow>
                  <TextControl
                    label={"CTA text"}
                    value={ctaText}
                    onChange={(newValue) => setAttributes({ ctaText: newValue })}
                  />
                </PanelRow>
                <PanelRow>
                  <TextControl
                    label={"CTA URL"}
                    value={ctaUrl}
                    onChange={(newValue) => setAttributes({ ctaUrl: newValue })}
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
                    onChange={(newValue) => setAttributes({ ctaColor: newValue })}
                  />
                </PanelRow>
              </PanelBody>
            </>
          )}
        </PanelBody>
           <PanelBody title={__("Card Button", "unityblocks")} initialOpen={false}>
          <PanelRow>
            <TextControl
              label={__("Button Text", "unityblocks")}
              value={cardButtonText}
              onChange={(newValue) =>
                setAttributes({
                  cardButtonText: newValue,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <RadioControl
              label={__("Button Color", "unityblocks")}
              selected={cardButtonColor}
              options={[
                { label: __("Gold", "unityblocks"), value: "gold" },
                { label: __("Maroon", "unityblocks"), value: "maroon" },
                { label: __("Gray", "unityblocks"), value: "gray" },
                { label: __("Dark", "unityblocks"), value: "dark" },
              ]}
              onChange={(newValue) =>
                setAttributes({
                  cardButtonColor: newValue,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <RadioControl
              label={__("Button Size", "unityblocks")}
              selected={cardButtonSize}
              options={[
                { label: __("Default", "unityblocks"), value: "default" },
                { label: __("Small", "unityblocks"), value: "small" },
                { label: __("Medium", "unityblocks"), value: "medium" },
                { label: __("Large", "unityblocks"), value: "large" },
              ]}
              onChange={(newValue) =>
                setAttributes({
                  cardButtonSize: newValue,
                })
              }
            />
          </PanelRow>
        </PanelBody>
        <PanelBody
          title={__("ASU Data Source", "unityblocks")}
          initialOpen={false}
        >
          <PanelRow>
            <ToggleControl
              label={"Enable ASU News"}
              help={enableAsuDataSource ? "ASU enabled." : "ASU disabled."}
              checked={enableAsuDataSource}
              onChange={(newValue) => {
                setAttributes({
                  enableAsuDataSource: newValue,
                });
              }}
            />
          </PanelRow>
          {enableAsuDataSource && (
            <>
              {" "}
              <PanelRow>
                <TextControl
                  label={"ASU Feed Url"}
                  help={"The ASU News Feed url requires the provided proxy."}
                  value={asuDataSourceUrl}
                  onChange={(newValue) =>
                    setAttributes({
                      asuDataSourceUrl: newValue,
                    })
                  }
                />
              </PanelRow>
              <PanelRow>
                <TextControl
                  label={"Base feed machine name"}
                  help={
                    "Enter the single taxonomy machine name to select the base news feed. For the master list of available news feeds, refer to: https://news.asu.edu/reports/taxonomy-terms-count"
                  }
                  value={asuDataSourceFeed}
                  onChange={(newValue) =>
                    setAttributes({
                      asuDataSourceFeed: newValue,
                    })
                  }
                />
              </PanelRow>
              {/* <PanelRow>
							<TextControl
								label={ 'Filters' }
								help={
									'Enter optional taxonomy terms, comma delimited.'
								}
								placeholder={
									'nursing_and_health_care,School of Mathematical and Natural Sciences,Student'
								}
								value={ asuDataSourceFilters }
								onChange={ ( newValue ) =>
									setAttributes( { asuDataSourceFilters: newValue } )
								}
							/>
						</PanelRow> */}
            </>
          )}
        </PanelBody>

        <PanelBody
          title={__("KE Data Source", "unityblocks")}
          initialOpen={false}
        >
          <PanelRow>
            <ToggleControl
              label={"Enable KE News"}
              help={enableKeDataSource ? "KE enabled." : "KE disabled."}
              checked={enableKeDataSource}
              onChange={(newValue) => {
                setAttributes({
                  enableKeDataSource: newValue,
                });
              }}
            />
          </PanelRow>
          {enableKeDataSource && (
            <>
              <PanelRow>
                <TextControl
                  label={"KE API Endpoint Url"}
                  value={keDataSourceUrl}
                  onChange={(newValue) =>
                    setAttributes({
                      keDataSourceUrl: newValue,
                    })
                  }
                />
              </PanelRow>
              <PanelRow>
                <TextControl
                  label={"Story base path"}
                  help={"No leading or trailing slashes"}
                  value={keStoryBasePath}
                  onChange={(newValue) =>
                    setAttributes({
                      keStoryBasePath: newValue,
                    })
                  }
                />
              </PanelRow>
              <PanelRow>
                <SelectControl
                  multiple
                  label={__("Filter Colleges/Units")}
                  value={keDataSourceUnits}
                  options={units?.data?.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  }))}
                  onChange={(newValue) => {
                    return setAttributes({
                      keDataSourceUnits: newValue,
                    });
                  }}
                />
              </PanelRow>
              <PanelRow>
                <SelectControl
                  multiple
                  label={__("Filter Interests")}
                  value={keDataSourceInterests}
                  options={interests?.data?.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  }))}
                  onChange={(newValue) => {
                    return setAttributes({
                      keDataSourceInterests: newValue,
                    });
                  }}
                />
              </PanelRow>
              <PanelRow>
                <SelectControl
                  multiple
                  label={__("Filter Locations")}
                  value={keDataSourceLocations}
                  options={locations?.data?.map(({ id, name }) => ({
                    value: id,
                    label: name,
                  }))}
                  onChange={(newValue) => {
                    return setAttributes({
                      keDataSourceLocations: newValue,
                    });
                  }}
                />
              </PanelRow>
              <PanelRow>
                <TextControl
                  label={"Page"}
                  help={"Page number of the results to return. Default 100 items per page. Example: to return items 101-200, set page to 2."}
                  value={keDataSourcePage}
                  onChange={(newValue) =>
                    setAttributes({
                      keDataSourcePage: newValue,
                    })
                  }
                />
              </PanelRow>
              <PanelRow>
                <TextControl
                  label={"Per page"}
                  help={"Number of items returned per page. Recommended to leave at 100."}
                  value={keDataSourcePerPage}
                  onChange={(newValue) =>
                    setAttributes({
                      keDataSourcePerPage: newValue,
                    })
                  }
                />
              </PanelRow>
            </>
          )}
        </PanelBody>
      </InspectorControls>
    </>
  );
};

export default Inspector;
