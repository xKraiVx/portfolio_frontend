import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

export const useDeviceQuery = (): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} => {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const handleWindowResize = (): void => {
      const parser = new UAParser(window.navigator.userAgent);
      setDevice(parser.getDevice().type);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("orientationchange", handleWindowResize);

    return (): void => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("orientationchange", handleWindowResize);
    };
  }, [setDevice]);

  return {
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
};
