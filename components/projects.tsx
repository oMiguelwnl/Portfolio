"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { ProjectCard } from "./projectCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { ref } = useSectionInView("Projetos", isMobile ? 0.1 : 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 px-4 sm:px-16 min-h-[50vh]"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Meus Projetos
      </h2>

      <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
