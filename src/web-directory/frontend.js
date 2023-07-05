const { render } = wp.element;

// import { WebDirectoryComponent } from "@asu/app-webdir-ui";
import { WebDirectoryComponent } from "../../resources/unity/app-webdir-ui/src/WebDirectoryComponent/withRouter";

// It is possible to load multiple events grids onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the News Grid block
const directory = document.querySelectorAll(".wp-block-unityblocks-web-directory");

directory.forEach((webdir) => {
  const searchType = webdir.dataset.searchtype;
  const API_URL = webdir.dataset.apiurl;
  const searchApiVersion = webdir.dataset.apiversion;
  const deptIds = webdir.dataset.deptids;
  const ids = webdir.dataset.ids;
  const display = webdir.dataset.display;
  const filters = webdir.dataset.filters;

  const props = searchType === "departments"
    ? {
        searchType,
        API_URL,
        searchApiVersion,
        deptIds,
        display,
      }
    : {
        searchType,
        API_URL,
        searchApiVersion,
        ids,
        display,
        filters,
      };

  render(<WebDirectoryComponent {...props} />, directory);
});
