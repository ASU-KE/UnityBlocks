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

  const display = JSON.stringify({
    defaultSort: displayDefaultSort,
    doNotDisplayProfiles: displayDoNotDisplay,
    profilesPerPage: displayProfilesPerPage,
    usePager: displayUsePager,
  });

  const filters = JSON.stringify({
    employee: filtersEmployee,
    expertise: filtersExpertise,
    title: filtersTitle,
    campuses: filtersCampuses,
  });

  const dataAttributes = {
    "data-searchtype": searchType,
    "data-apiurl": API_URL,
    "data-apiversion": searchApiVersion,
    "data-deptids": deptIds,
    "data-ids": ids,
    "data-display": display,
    "data-filters": filters,
  };

  return <div {...useBlockProps.save()} {...dataAttributes}></div>;
};

export default save;
