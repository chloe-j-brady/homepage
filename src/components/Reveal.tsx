import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

// Wraps any content and fades/slides it in once it scrolls into view.
// Reusable across any page — just wrap a section in <Reveal>...</Reveal>
function Reveal({ children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // IntersectionObserver watches when an element enters the viewport,
    // without needing to manually listen to scroll events ourselves.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // only animate in once, not every time
        }
      },
      { threshold: 0.15 } // trigger once 15% of the element is visible
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${isVisible ? "reveal-visible" : ""}`}>
      {children}
    </div>
  );
}

export default Reveal;