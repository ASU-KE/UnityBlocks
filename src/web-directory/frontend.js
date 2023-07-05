const { render } = wp.element;

// import { WebDirectoryComponent } from "@asu/app-webdir-ui";
import { WebDirectoryComponent } from "../../resources/unity/app-webdir-ui/src/WebDirectoryComponent/withRouter";

// It is possible to load multiple Directory blocks onto a page.
// Load each DOM element on page using the Gutenberg-generated class
const blocks = document.querySelectorAll(".wp-block-unityblocks-web-directory");

blocks.forEach((block) => {
  const searchType = block.dataset.searchtype;
  const API_URL = block.dataset.apiurl;
  const searchApiVersion = block.dataset.apiversion;
  const deptIds = block.dataset.deptids;
  const ids = block.dataset.ids;
  const display = block.dataset.display;
  const filters = block.dataset.filters;

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

  render(<WebDirectoryComponent {...props} />, block);
});
