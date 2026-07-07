import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * SiteAnimator (ADDITIVE)
 * -----------------------
 * Renders nothing. On every route change it finds the main content
 * blocks (sections + cards) on the current page and gives them a
 * smooth, staggered fade-up as they scroll into view.
 *
 * Safety guarantees (so nothing is ever left invisible):
 *  - Respects prefers-reduced-motion (does nothing in that case).
 *  - Reveals anything already in the viewport on load.
 *  - A fallback timer force-reveals everything after a short delay,
 *    even if the IntersectionObserver never fires.
 *  - Skips the hero/carousel, navbar and any fixed/sticky elements.
 *
 * It does NOT modify, remove or replace any existing markup or logic.
 */

const REVEAL_SELECTOR = [
  "section",
  '[class*="card"]',
  '[class*="Card"]',
  "footer",
].join(",");

// Elements/containers we must never hide.
const SKIP_CLOSEST =
  '.home-hero, nav, .navbar, [class*="navbar"], [class*="Navbar"]';

export default function SiteAnimator() {
  const location = useLocation();

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return; // leave everything fully visible

    let cancelled = false;
    let observer = null;
    const timers = [];

    const collectTargets = () => {
      const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
      const targets = [];

      nodes.forEach((el) => {
        if (!el) return;
        if (el.dataset.animDone === "1") return;
        if (el.classList.contains("reveal-visible")) return;
        if (el.closest(SKIP_CLOSEST)) return;

        let cs;
        try {
          cs = window.getComputedStyle(el);
        } catch (e) {
          cs = null;
        }
        if (cs && (cs.position === "fixed" || cs.position === "sticky")) return;

        targets.push(el);
      });

      return targets;
    };

    // Stagger items that share the same parent for a pleasant cascade.
    const applyStagger = (targets) => {
      const counts = new Map();
      targets.forEach((el) => {
        const parent = el.parentElement || document.body;
        const idx = counts.get(parent) || 0;
        counts.set(parent, idx + 1);
        const delay = Math.min(idx * 70, 350); // cap at 0.35s
        el.style.transitionDelay = delay + "ms";
      });
    };

    const reveal = (el) => {
      el.classList.add("reveal-visible");
      el.dataset.animDone = "1";
    };

    const run = () => {
      if (cancelled) return;

      const targets = collectTargets();
      if (!targets.length) return;

      targets.forEach((el) => el.classList.add("reveal"));
      applyStagger(targets);

      if (!("IntersectionObserver" in window)) {
        targets.forEach(reveal);
        return;
      }

      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                reveal(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
      }

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          // Already on screen: animate in on next frames so the
          // transition actually plays (a nice load-in).
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              if (!cancelled) reveal(el);
            })
          );
        } else {
          observer.observe(el);
        }
      });
    };

    // Run shortly after the route content renders, then once more
    // to catch late content (images, async data, etc.).
    timers.push(setTimeout(run, 80));
    timers.push(setTimeout(run, 600));

    // Absolute safety net: never let anything stay hidden.
    timers.push(
      setTimeout(() => {
        document
          .querySelectorAll(".reveal:not(.reveal-visible)")
          .forEach((el) => el.classList.add("reveal-visible"));
      }, 2600)
    );

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      timers.forEach((t) => clearTimeout(t));
    };
  }, [location.pathname]);

  return null;
}
