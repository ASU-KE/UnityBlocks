import { createRoot } from 'react-dom/client'
import { AnchorMenu } from "@asu-unity-stack/packages/unity-react-core/src/components/AnchorMenu/AnchorMenu";

const menu = document.querySelector("#unityblocks-anchor-menu");

  const items = JSON.parse(menu.dataset.items);
  const firstElementId = menu.dataset.firstelementid;
  const focusFirstFocusableElement = menu.dataset.focusfirstfocusableelement === "true";

  const root = createRoot(menu);
  root.render(
    <AnchorMenu
      items={items}
      firstElementId={firstElementId}
      focusFirstFocusableElement={focusFirstFocusableElement}
    />
  );
