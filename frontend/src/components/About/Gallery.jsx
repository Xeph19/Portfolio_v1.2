import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/301",
  "https://via.placeholder.com/302",
  "https://via.placeholder.com/303",
];

export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-semibold text-gray-800">Personal Gallery</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </motion.div>
  );
}
