import { useEffect, useState, useRef } from "react";

export default function CustomScrollbar() {
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate how tall the indicator pill should be relative to page length
      const heightRatio = viewportHeight / totalHeight;
      const computedHeight = Math.max(viewportHeight * heightRatio, 40); // Minimum 40px tall so it stays clickable/visible

      // Calculate how far down the track the thumb should sit
      const maxScrollFactor = totalHeight - viewportHeight;
      const currentScrollPercent = maxScrollFactor > 0 ? scrollPosition / maxScrollFactor : 0;
      const computedTop = currentScrollPercent * (viewportHeight - computedHeight);

      setThumbHeight(computedHeight);
      setThumbTop(computedTop);

      // Trigger visibility on scroll
      setIsVisible(true);

      // Clear any active 3-second countdown timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Start a brand new 3-second timer to fade it out if the user stops scrolling
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Recalculate dimensions if screen size changes

    // Initial call to set sizes on layout draw
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    /*
      The Scrollbar Track:
      Pinned to the absolute top-right edge, floating floating directly ON TOP of site content.
      'pointer-events-none' ensures it never blocks clicks underneath it.
    */
    <div className="fixed right-1 top-0 bottom-0 z-100 w-1.5 pointer-events-none">
      {/*
        The Scrollbar Thumb Pill:
        Maps natively to your custom Tailwind v4 --color-accent token!
      */}
      <div
        className="w-full bg-accent rounded-full opacity-0 transition-opacity duration-500 ease-out"
        style={{
          height: `${thumbHeight}px`,
          transform: `translateY(${thumbTop}px)`,
          opacity: isVisible ? 1 : 0, // Fades completely out after 3 seconds
        }}
      />
    </div>
  );
}
