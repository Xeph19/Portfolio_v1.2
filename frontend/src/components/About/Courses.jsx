import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    name: "Python Project for Data Science",
    url: "https://www.coursera.org/learn/python-project-for-data-science",
  },
  {
    name: "Machine Learning with Python",
    url: "https://www.coursera.org/learn/machine-learning-with-python",
  },
  {
    name: "Python for Applied Data Science and AI",
    url: "https://www.coursera.org/learn/python-for-applied-data-science-ai",
  },
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
      <h2 className="text-3xl font-semibold text-gray-800 text-center sm:text-left">
        Courses Taken
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <motion.a
            key={index}
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-lg p-5 text-gray-700 hover:shadow-lg transition-all duration-300 text-center sm:text-left"
          >
            <h3 className="text-lg font-semibold text-blue-600 hover:underline">
              {course.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">View on Coursera</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
