// src/pages/ProjectGallery.jsx
import React from "react";
import ScrollStack, { ScrollStackItem } from "../components/ProjectGallery/ScrollStack";
import { motion } from "framer-motion";

function ProjectGallery() {
  const projects = [
    {
      title: "UpTalk",
      description:
        "UpTalk is a messaging app with route tracking, waiting area suggestions and booking features.",
    },
    {
      title: "Portfolio v1.0",
      description:
        "My personal portfolio built with React, Tailwind and framer-motion to showcase projects and UX work.",
    },
    {
      title: "MyWay",
      description:
        "Route guidance app that suggests transport options and waiting areas for commuters.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-8 pt-20">
        {/* HEADER SECTION */}
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
                className="flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="h-36 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                    thumbnail
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
