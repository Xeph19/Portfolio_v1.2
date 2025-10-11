import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaFigma, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPandas } from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Pandas", icon: <SiPandas className="text-indigo-500" /> },
];

export default function TechStack() {
  // Duplicate the stack to create a seamless loop
  const repeatedStack = [...techStack, ...techStack];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">Tech Stack</h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {repeatedStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] p-4 bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <span className="text-gray-800 font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
