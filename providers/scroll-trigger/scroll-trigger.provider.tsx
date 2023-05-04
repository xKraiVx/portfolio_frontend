import { ReactNode, createContext, useEffect, useState } from "react";
import { IScrollTrigger } from "./scroll-trigger.types";
import { throttle } from "@common/utils/throttle";

interface ScrollTriggerProps {
  children?: ReactNode;
}

export const ScrollTriggerContext = createContext<IScrollTrigger | null>(null);

export const ScrollTriggerProvider = ({ children }: ScrollTriggerProps) => {
  const blockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "visible";
  };

  const [scrollState, setScrollState] = useState<IScrollTrigger>({
    scrolledDistance: null,
    isScrolled: false,
    isScrolledDown: false,
    isScrolledUp: false,
    blockScroll,
    enableScroll,
  });

  const handleScroll = () => {
    const newScrollValue = window.pageYOffset;
    const isScrolled = window.pageYOffset !== 0;

    setScrollState((prev) => {
      const prevDistance = prev.scrolledDistance;

      if (prevDistance !== newScrollValue) {
        return {
          ...prev,
          scrolledDistance: newScrollValue,
          isScrolled,
          isScrolledDown: prev.scrolledDistance < newScrollValue,
          isScrolledUp: prev.scrolledDistance > newScrollValue,
        };
      }
      return {
        ...prev,
        scrolledDistance: newScrollValue,
        isScrolled,
      };
    });
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", throttle(handleScroll, 100));

    return () =>
      window.removeEventListener("scroll", throttle(handleScroll, 100));
  }, []);

  return (
    <ScrollTriggerContext.Provider value={scrollState}>
      {children}
    </ScrollTriggerContext.Provider>
  );
};
