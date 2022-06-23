/**
 * @Author Abdul Wahab Kazmi abdul.wahab@va8ivedigital.com
 * This file has all the generic javascript functions which
 * can be reused in all over the site.
 */
function scrollhandler() {
  element = document.querySelectorAll(
    "[data-srcset],[data-src], [data-bgimage]"
  );
  for (var i = 0, len = element.length; i < len; i++) {
    if (
      element[i].getBoundingClientRect().top - window.innerHeight <
      window.pageYOffset
    ) {
      if (
        !element[i].dataset.hasOwnProperty("bgimage") &&
        element[i].dataset.hasOwnProperty("src")
      ) {
        element[i].setAttribute("src", element[i].dataset.src);
        element[i].removeAttribute("data-src");
      } else if (element[i].dataset.hasOwnProperty("srcset")) {
        element[i].setAttribute("srcset", element[i].dataset.srcset);
        element[i].removeAttribute("data-srcset");
      } else {
        element[i].removeAttribute("data-bgimage");
      }
    }
  }
}

scrollhandler();
window.addEventListener(
  "scroll",
  (e) => {
    window.requestAnimationFrame(scrollhandler);
  },
  { passive: true }
);

/**
 * @const { Node } sidebar The sidebar element
 */
const sidebar = document.querySelector(".sticky");
if (sidebar) {
  /**
   * Make sidebar scroll to the bottom before implementing sticky
   * behavior on screens shorter than the height of the sidebar
   * @param { Node } ELEMENT
   * @param { Number } PADDING
   * @param { Number } WINDOWHEIGHT
   */
  const handleStickyElement = (ELEMENT, PADDING, WINDOWHEIGHT) => {
    /**
     * @const { Node } header Website header element
     */
    //const _header = document.querySelector(".site-header");
    //const _availableSpace = WINDOWHEIGHT - _header.scrollHeight + 16;
    const _availableSpace = WINDOWHEIGHT + 16;
    if (ELEMENT.scrollHeight > _availableSpace) {
      ELEMENT.style.top = `${
        _availableSpace - ELEMENT.scrollHeight - PADDING
      }px`;
    } else {
      ELEMENT.style.top = "0";
    }
  };
  /**
   * Function to call the sticky handler on window resize
   */
  const handleResize = () => {
    handleStickyElement(sidebar, 10, window.innerHeight);
  };
  /**
   * Invoke the sticky handler function on page load
   */
  handleStickyElement(sidebar, 10, window.innerHeight);
  /**
   * Add an event listener to the window to run this function anytime
   * the window is resized
   */
  window.addEventListener("resize", handleResize);
}
