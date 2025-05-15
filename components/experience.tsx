"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experiência", 0.75, { isExperience: true });
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Minha Experiência</SectionHeading>

      <VerticalTimeline lineColor={theme === "light" ? "#d1fae5" : "#064e3b"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#ecfdf5" : "rgba(5, 150, 105, 0.1)",
                boxShadow: "none",
                border: `1px solid ${
                  theme === "light" ? "#a7f3d0" : "#064e3b"
                }`,
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: `0.4rem solid ${
                  theme === "light" ? "#a7f3d0" : "#10b981"
                }`,
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#d1fae5" : "#065f46",
                color: theme === "light" ? "#065f46" : "#d1fae5",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-emerald-700 dark:text-emerald-300">
                {item.title}
              </h3>
              <p className="font-medium text-gray-600 dark:text-gray-400">
                {item.location}
              </p>
              <p className="!mt-1 text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
