import React from "react";
import classNames from "classnames";

import { Autocomplete } from "../components/autoComplete";

const WCHM = () => {
  return (
    <div className={classNames("uds-wchm-list", "bg-white", "py-4", "my-2")}>
      <Autocomplete />
    </div>
  );
};

export { WCHM };
