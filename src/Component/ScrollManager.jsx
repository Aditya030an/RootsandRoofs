import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Height of the fixed navbar so section scrolling lands just below it.
const NAVBAR_OFFSET = 90;

/**
 * Global scroll behaviour for every route:
 *  - Navigation carrying `state.scrollTo` (a button) → smooth-scroll to that
 *    section id, retrying briefly so it lands correctly even while lazy content
 *    and on-scroll animations are still settling.
 *  - Back / forward (POP) → restore the scroll position the user left.
 *  - Any other fresh navigation, e.g. a navbar link (PUSH/REPLACE, no state) → top.
 */
const ScrollManager = () => {
  const location = useLocation();
  const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"
  const positions = useRef({});

  // Remember the scroll position for the current history entry as the user scrolls.
  useEffect(() => {
    const key = location.key;
    const onScroll = () => {
      positions.current[key] = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.key]);

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    // 1) Scroll to a specific section (came from a button with scrollTo state).
    if (sectionId) {
      let tries = 0;
      let timer;
      const land = () => {
        const el = document.getElementById(sectionId);
        if (el) {
          const top =
            window.scrollY + el.getBoundingClientRect().top - NAVBAR_OFFSET;
          window.scrollTo({ top, behavior: "smooth" });
        }
        // Re-aim a few times while the page height keeps changing.
        if (++tries < 6) timer = setTimeout(land, 180);
      };
      const start = setTimeout(land, 80);

      // Clear the router state (without a re-render) so a refresh or a later
      // back-navigation to this entry won't re-trigger the section scroll.
      if (window.history.state) {
        window.history.replaceState(
          { ...window.history.state, usr: null },
          "",
        );
      }

      return () => {
        clearTimeout(start);
        clearTimeout(timer);
      };
    }

    // 2) Returning to a page via back/forward → restore where the user left.
    if (navType === "POP" && positions.current[location.key] != null) {
      const y = positions.current[location.key];
      const t = setTimeout(() => window.scrollTo(0, y), 60);
      return () => clearTimeout(t);
    }

    // 3) Fresh navigation (navbar link, etc.) → start at the top.
    window.scrollTo(0, 0);
  }, [location.key]);

  return null;
};

export default ScrollManager;
