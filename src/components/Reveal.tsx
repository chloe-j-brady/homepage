/**
 * Reveal — wraps any content and fades/slides it in once it scrolls into view.
 * Reusable across any page — just wrap a section in <Reveal>...</Reveal>.
 *
 * AI usage: I wanted the site to feel more seamless/polished as you scroll
 * (this is one of my extra-credit portions). I used
 * Claude (Anthropic) to help build this using the IntersectionObserver
 * browser API, which I hadn't used before.
 */
import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

function Reveal({ children }: RevealProps) {
  // `ref` gives us a direct handle on the actual <div> DOM node below,
  // so we can pass it to the browser's IntersectionObserver API.
  // React state (isVisible) can't do this on its own — we need the
  // real DOM element to watch it enter/leave the viewport.
  const ref = useRef<HTMLDivElement>(null);

  // Tracks whether this element has scrolled into view yet.
  // Starts false (hidden/not-animated-in), flips to true once seen.
  const [isVisible, setIsVisible] = useState(false);

  // useEffect with an empty dependency array ([]) runs once, right after
  // this component first renders — the right place to set up a browser
  // API "listener" like IntersectionObserver.
  useEffect(() => {
    const element = ref.current;
    if (!element) return; // safety check — ref isn't attached yet on first paint

    // IntersectionObserver watches when an element enters the viewport,
    // without needing to manually listen to scroll events ourselves
    // (manual scroll listeners are less efficient and more code to manage).
    const observer = new IntersectionObserver(
      ([entry]) => {
        // `entry.isIntersecting` is true once the element is on screen.
        if (entry.isIntersecting) {
          setIsVisible(true); // triggers the fade/slide-in CSS via the className below
          observer.unobserve(element); // stop watching — only animate in once, not every time it scrolls by
        }
      },
      { threshold: 0.10
       } // "intersecting" fires once 10% of the element is visible on screen
    );

    observer.observe(element); // start watching this specific element

    // Cleanup function: React runs this if the component unmounts
    // (e.g. navigating away). Disconnecting avoids a memory leak from
    // a stale observer still watching a DOM node that's gone.
    return () => observer.disconnect();
  }, []);

  // The className switches between "reveal" (hidden/offset state) and
  // "reveal reveal-visible" (animated-in state) based on isVisible.
  // The actual fade/slide animation itself lives in your CSS, keyed off
  // the "reveal-visible" class — this component only decides *when*
  // to add that class.
  return (
    <div ref={ref} className={`reveal ${isVisible ? "reveal-visible" : ""}`}>
      {children}
    </div>
  );
}

export default Reveal;