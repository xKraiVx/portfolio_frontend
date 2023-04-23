import { ScrollTriggerContext } from "providers/scroll-trigger/scroll-trigger.provider";
import { useContext } from "react";

export const useScrollTrigger = () => {
  return useContext(ScrollTriggerContext);
};
