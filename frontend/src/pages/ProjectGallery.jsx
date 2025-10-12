import React from "react";
import ScrollStack, { ScrollStackItem } from "../components/ProjectGallery/ScrollStack";
import { motion } from "framer-motion";
import uptalkImg from "../assets/UpTalk.svg";
import portfolioImg from "../assets/JR.jpg";
import mywayImg from "../assets/MyWay.svg";
import teslaGamestopImg from "../assets/TeslavsGameStop.png";
import toDos from "../assets/Todos.png"

function ProjectGallery() {
  const projects = [
    {
      title: "UpTalk",
      description:
        "A communication platform designed to help couples interact clearly and effectively, fostering better understanding and connection. Currently in development.",
      image: uptalkImg,
    },
    {
      title: "Portfolio v1.0",
      description:
        "My first personal portfolio showcasing my skills and projects, designed in Figma and implemented using Tailwind CSS, HTML, and CSS.",
      image: portfolioImg,
    },
    {
      title: "MyWay",
      description:
        "An AI-powered web application that guides IT professionals and students in navigating their career paths and learning progress effectively.",
      image: mywayImg,
    },
    {
      title: "Tesla vs Gamestop Revenue Comparison",
      description:
        "A data manipulation and visualization project from Coursera that analyzes and compares the revenue trends of Tesla and Gamestop.",
      image: teslaGamestopImg,
    },
    {
      title: "Awesome To Dos",
      description:
        "My first-ever deployed web application — a simple yet functional task manager that allows users to add, edit, and organize their daily to-dos efficiently. It marks my early exploration into full-stack development and web deployment.",
      image: toDos,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12 pt-20">
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
                className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 bg-white shadow-sm rounded-2xl p-6"
              >
                {/* Text Section */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-gray-100 shadow-md">
                    <img
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
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
