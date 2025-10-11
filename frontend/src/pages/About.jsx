import React from "react";
import Certificates from "../components/About/Certificates";
import Courses from "../components/About/Courses";
import TechStack from "../components/About/TechStack";
import Gallery from "../components/About/Gallery";
import SocialMedia from "../components/About/SocialMedia";

export default function AboutMePage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A snapshot of my skills, achievements, and interests. Explore my journey, projects, and social connections.
          </p>
        </div>

        {/* Sections */}
        <Certificates />
        <Courses />
        <TechStack />
        <Gallery />
        <SocialMedia />
      </div>
    </section>
  );
}
