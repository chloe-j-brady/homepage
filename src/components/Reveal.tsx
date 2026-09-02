/* Reveal component — wraps content and makes it fade/slide in when you
scroll to it. Can reuse this on any page, just wrap stuff in <Reveal>...</Reveal>.
AI usage: this was one of my extra credit ideas, wanted the site to feel
less static when scrolling. Used Claude to help me figure out the
IntersectionObserver API since I'd never used it before. */
import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

function Reveal({ children }: RevealProps) {
    // need an actual reference to the div itself (not just React state)
    // because IntersectionObserver has to watch a real DOM element
  const ref = useRef<HTMLDivElement>(null);

 // false = hasn't been scrolled to yet, true = it has and should animate in
  const [isVisible, setIsVisible] = useState(false);

 // empty [] means this only runs once when the component first loads, which is when we want to set up the observer
  useEffect(() => {
    const element = ref.current;
    if (!element) return; // safety check — ref isn't attached yet on first paint

   // this watches for when the div scrolls into view instead of me having
   // to write my own scroll event listener (which is more code and worse for performance)
    const observer = new IntersectionObserver(
      ([entry]) => {
        // `entry.isIntersecting` is true once the element is on screen.
        if (entry.isIntersecting) {
          setIsVisible(true); // triggers the fade/slide-in 
          observer.unobserve(element); // stop watching — only animate in once, not every time it scrolls by
        }
      },
      { threshold: 0.10} // counts as "visible" once 10% of it is on screen
    );
    observer.observe(element); 

    // runs if the component ever unmounts, so we're not leaving an
    // observer running on a div that doesn't exist anymore
    return () => observer.disconnect();
  }, []);

 // swaps the className depending on isVisible — actual fade/slide
  // animation is handled in the CSS, this just adds/removes the class
  return (
    <div ref={ref} className={`reveal ${isVisible ? "reveal-visible" : ""}`}>
      {children}
    </div>
  );
}

export default Reveal;