const menu = document.querySelector("#unityblocks-anchor-menu");

if (menu) {
  const firstElementId = menu.dataset.firstElementId;
  const focusFirstFocusableElement =
    menu.dataset.focusFirstFocusableElement === "true";
  const buttons = menu.querySelectorAll("button[data-target]");

  // Approximate height of the anchor menu bar in pixels
  const anchorMenuHeight = 103;

  const hasHeader = () =>
    !!(
      document.getElementById("asu-header") ||
      document.getElementById("headerContainer") ||
      document.getElementById("asuHeader")
    );

  const isSmallDevice = () => window.matchMedia("(max-width: 991px)").matches;

  // ASU header height differs between mobile (110px) and desktop (142px)
  const getHeaderHeight = () => (isSmallDevice() ? 110 : 142);

  const onScroll = () => {
    const firstElement = firstElementId
      ? document.getElementById(firstElementId)
      : null;

    if (firstElement) {
      const firstElementTop = firstElement.getBoundingClientRect().top;
      if (firstElementTop >= 0) {
        menu.classList.remove("sticky");
      }
    }

    if (window.scrollY > menu.getBoundingClientRect().top + window.scrollY) {
      menu.classList.add("sticky");
    }

    // Update active link based on scroll position
    const subsHeight = hasHeader()
      ? getHeaderHeight() + anchorMenuHeight
      : anchorMenuHeight;

    let curSection = "";
    buttons.forEach((button) => {
      const targetId = button.dataset.target;
      const container = document.getElementById(targetId);
      if (container) {
        const containerTop =
          container.getBoundingClientRect().top - subsHeight;
        const containerBottom =
          container.getBoundingClientRect().bottom - subsHeight;
        if (containerTop < 0 && containerBottom > 0) {
          curSection = targetId;
        }
      }
    });

    buttons.forEach((button) => {
      if (button.dataset.target === curSection) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", onScroll);

  // Smooth scroll on button click
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const container = document.getElementById(targetId);
      if (!container) return;

      // Expanded menu height differs between mobile (410px) and desktop (90px)
      const menuHeight = isSmallDevice() ? 410 : 90;
      // Additional 100px offset accounts for padding above target sections
      const curScroll =
        window.scrollY - (hasHeader() ? getHeaderHeight() + 100 : 100);

      let scrollTo = container.getBoundingClientRect().top + curScroll;

      if (!menu.classList.contains("sticky")) {
        scrollTo -= menuHeight;
      }

      if (focusFirstFocusableElement) {
        const firstFocusable = container.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable) firstFocusable.focus();
      }

      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    });
  });
}
