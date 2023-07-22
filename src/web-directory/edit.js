/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * External dependencies
 */
import { WebDirectoryComponent } from "Unity/app-webdir-ui/webdirUI.es.js";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const Edit = (props) => {
  const {
    attributes: {
      searchType,
      API_URL,
      searchApiVersion,
      deptIds,
      ids,
      // profileURLBase, not sure if this is needed
      // appPathFolder, not sure if this is needed
      displayDefaultSort,
      displayDoNotDisplay,
      displayProfilesPerPage,
      displayUsePager,
      filtersEmployee,
      filtersExpertise,
      filtersTitle,
      filtersCampuses,
    },
  } = props;

  const display = {
    defaultSort: displayDefaultSort,
    doNotDisplayProfiles: displayDoNotDisplay,
    profilesPerPage: displayProfilesPerPage,
    usePager: displayUsePager,
  };

  const filters = {
    employee: filtersEmployee,
    expertise: filtersExpertise,
    title: filtersTitle,
    campuses: filtersCampuses,
  };

  const args = {
    searchType,
    API_URL,
    searchApiVersion,
    deptIds,
    ids,
    display,
    filters
  };

  return (
    <>
      {/* <Inspector {...props} /> */}
      <div {...useBlockProps()}>
        <WebDirectoryComponent {...args} />
      </div>
    </>
  );
};

export default Edit;
