import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: <FaFacebookF />, link: "https://www.facebook.com/j.rhe20" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/j.rhe18" },
  { icon: <FaGithub />, link: "https://github.com/Xeph19" },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/john-rhe-poblacion-b36b78304" },
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
