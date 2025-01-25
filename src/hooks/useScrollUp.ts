import { useState, useEffect, useCallback } from "react";

export default function useScrollUp(offset = 300) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollUp = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > offset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { isVisible, scrollUp };
}
