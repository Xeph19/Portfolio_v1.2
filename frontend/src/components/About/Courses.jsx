import React from "react";
import { motion } from "framer-motion";

const courses = [
  "Data Structures & Algorithms",
  "Database Management",
  "Web Development with MERN",
  "UI/UX Design Principles",
];

export default function Courses() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-semibold text-gray-800">Courses Taken</h2>
      <ul className="list-disc list-inside text-gray-600 grid sm:grid-cols-2 gap-2">
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </motion.div>
  );
}
