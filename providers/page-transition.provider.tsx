import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import { useEffect, useState } from "react";

export const PageTransitionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
      {loading ? "Loading" : children}
    </AnimatePresence>
  );
};
