"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { ProjectCard } from "./projectCard";

export default function Projects() {
  const { ref } = useSectionInView("Projetos", 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 px-4 sm:px-16 min-h-[60vh]"
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
