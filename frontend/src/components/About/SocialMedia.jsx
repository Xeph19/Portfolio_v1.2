import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: <FaFacebookF />, link: "https://facebook.com" },
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <FaGithub />, link: "https://github.com" },
  { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/yourprofile" }, // Added LinkedIn
];

export default function SocialMedia() {
  return (
    <section className="space-y-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Connect with Me</h2>
      <div className="flex justify-center gap-6 text-gray-700 text-2xl">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
