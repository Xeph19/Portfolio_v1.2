import React from "react";
import { motion } from "framer-motion";

const blobs = [
  { size: 80, top: "10%", left: "15%", color: "bg-purple-300" },
  { size: 120, top: "30%", left: "70%", color: "bg-pink-300" },
  { size: 100, top: "60%", left: "25%", color: "bg-yellow-300" },
];

const BackgroundBlobs = () => (
  <>
    {blobs.map((blob, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{ scale: 1.1, opacity: 0.4 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 6 + i }}
        className={`absolute rounded-full ${blob.color}`}
        style={{
          width: blob.size,
          height: blob.size,
          top: blob.top,
          left: blob.left,
          filter: "blur(70px)",
          zIndex: -1,
        }}
      />
    ))}
  </>
);

export default BackgroundBlobs;
