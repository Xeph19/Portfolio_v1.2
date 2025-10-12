import React from "react";
import { motion } from "framer-motion";

export default function CertificateCard({ title, issuer, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300 cursor-pointer w-full sm:w-[80%] md:w-[60%] lg:w-[300px] mx-auto"
    >
      <div className="relative group w-full">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{issuer}</p>
    </motion.div>
  );
}
