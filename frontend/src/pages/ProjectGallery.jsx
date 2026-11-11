import React from "react";
import ScrollStack, { ScrollStackItem } from "../components/ProjectGallery/ScrollStack";
import { motion } from "framer-motion";
import mywayImg from "../assets/MyWay.svg";

const psitsStackedLogo = `${import.meta.env.BASE_URL}PSITS%20WIT%20Stacked%20Logo.png`;

function ProjectGallery() {
  const projects = [
    {
      title: "MyWay — An AI Assessment for Career Path",
      meta: "Backend, Frontend & AI Developer | PERN-S | Jan 2026 – Oct 2026",
      image: mywayImg,
      url: "https://myway-app-delta.vercel.app/signup",
      highlights: [
        "Built a RAG pipeline with DeepSeek, vector embeddings, and academic data for personalized IT roadmaps.",
        "Applied RIASEC and SFIA assessments to match learners with IT specializations.",
        "Developed PERN-S services, data models, and workflows for recommendations and progress tracking.",
      ],
      outcome:
        "Supported structured career exploration for 185 students, validated by 6 experts.",
    },
    {
      title: "PSITS Official Website",
      meta: "Backend Developer | PERN-S | March 2026 – August 2026",
      url: "https://witpsits-webapp.vercel.app/",
      image: psitsStackedLogo,
      imageFit: "contain",
      highlights: [
        "Built dashboard backend features for content, announcements, and student events.",
        "Implemented data workflows for publishing and content updates.",
      ],
      outcome:
        "Gave administrators one place to maintain announcements and event information.",
    },
    {
      title: "ITara — Digital Student Clearance Management System",
      meta: "Backend Developer | PERN-S | Jul 2026 – Aug 2026",
      initials: "ITara",
      url: "https://witpsits-attendace-portal.vercel.app/",
      highlights: [
        "Built backend services for a department-wide digital clearance system.",
        "Implemented clearance tracking, record verification, and database operations.",
      ],
      outcome:
        "Replaced manual record handling with a centralized clearance workflow.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16">
      <div className="mx-auto max-w-7xl space-y-10 px-4 pt-16 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Project Gallery</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects demonstrating web, UX, and app development.
          </p>
        </header>

        {/* PROJECT LIST */}
        <ScrollStack>
          {projects.map((project, index) => (
            <ScrollStackItem key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 items-start gap-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8 md:grid-cols-[minmax(0,1fr)_11rem] md:gap-8"
              >
                {/* Text Section */}
                <div className="min-w-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm italic text-gray-500">{project.meta}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-sm leading-relaxed text-gray-600">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-gray-700">
                    <span className="font-semibold">Outcome: </span>
                    {project.outcome}
                  </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-end">
                  <div className="h-36 w-36 overflow-hidden rounded-xl bg-gray-100 shadow-md sm:h-40 sm:w-40 md:h-44 md:w-44">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} thumbnail`}
                        className={`${project.imageFit === "contain" ? "object-contain p-3" : "object-cover"} w-full h-full transition-transform duration-300 hover:scale-105`}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-blue-600 p-4 text-center text-2xl font-bold text-white">
                        {project.initials}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
}

export default ProjectGallery;
