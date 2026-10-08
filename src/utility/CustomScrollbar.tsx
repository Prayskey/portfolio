import { AnimatePresence, motion } from "framer-motion"; // 💡 Import motion tools
import { useEffect, useRef, useState } from "react";

export default function CustomScrollbar() {
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrollableContent, setHasScrollableContent] = useState(false); // 💡 Prevent ghost tracks
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Guard check: If content doesn't exceed viewport height, do not display scrollbar
      if (totalHeight <= viewportHeight + 10) {
        setHasScrollableContent(false);
        return;
      }
      setHasScrollableContent(true);

      // Calculate indicator pill height relative to page length
      const heightRatio = viewportHeight / totalHeight;
      const computedHeight = Math.max(viewportHeight * heightRatio, 50); // Balanced minimum 50px

      // Calculate track thumb position factor
      const maxScrollFactor = totalHeight - viewportHeight;
      const currentScrollPercent = maxScrollFactor > 0 ? scrollPosition / maxScrollFactor : 0;
      const computedTop = currentScrollPercent * (viewportHeight - computedHeight);

      setThumbHeight(computedHeight);
      setThumbTop(computedTop);

      // Trigger visibility fade-in
      setIsVisible(true);

      // Reset the 2.5-second inactivity timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2500); // 2.5s feels slightly punchier than a slow 3s wait
    };

    window.addEventListener("scroll", handleScroll, { passive: true }); // passive flag improves performance
    window.addEventListener("resize", handleScroll);

    // Initial check on mount
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
      Z-index set to z-50 to cleanly synchronize with the header container.
    */
    <div className="fixed right-1 top-0 bottom-0 z-50 w-1 pointer-events-none md:w-1.5">
      <AnimatePresence>
        {isVisible && hasScrollableContent && (
          <motion.div
            /*
              🎬 HARDWARE ACCELERATED TRANSITIONS:
              Using animate blocks over hardware channels forces rendering
              straight to the GPU, removing scrolling stutter.
            */
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="w-full bg-accent rounded-full shadow-xs origin-right"
            style={{
              height: `${thumbHeight}px`,
              y: thumbTop, // Framer Motion handles translateY optimization natively via 'y'
            }}
            /* Fast spring path ensures it catches up with fast mousewheels immediately */
            transition={{ type: "spring", stiffness: 500, damping: 45, mass: 0.2 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
