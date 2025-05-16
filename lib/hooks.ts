import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(
  sectionName: SectionName,
  threshold = 0.75,
  options: { isExperience?: boolean } = {}
) {
  const experienceOptions = options.isExperience ? {
    threshold: 0.2,
    rootMargin: "0px 0px -30% 0px",
    triggerOnce: false
  } : {};

  const { ref, inView } = useInView({
    threshold,
    ...experienceOptions
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const lastActive = useRef(0);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      if (options.isExperience) {
        if (Date.now() - lastActive.current > 500) {
          lastActive.current = Date.now();
          setActiveSection(sectionName);
        }
      } else {
        setActiveSection(sectionName);
      }
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName, options.isExperience]);

  return { ref };
}