import React from "react";
import { motion } from "framer-motion";
import BlurText from "../components/Homepage/BlurText";
import DisableElevation from "../components/Buttons";
import BackgroundBlobs from "../components/BackgroundBlobs";
import ProfileCard from "../components/Homepage/ProfileCard";

const resumeUrl = `${import.meta.env.BASE_URL}Poblacion_Resume.pdf`;

function Homepage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Poblacion_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden relative">
      <BackgroundBlobs />

      <motion.main
        className="pt-28 px-6 max-w-7xl mx-auto flex flex-col justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        {/* Welcome Text */}
        <div className="font-serif text-xs uppercase tracking-widest text-gray-500 mb-3">
          — Welcome to My Portfolio
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <motion.section
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="sr-only">Homepage Introduction</h1>

            <BlurText
              text="Hi, I'm John Rhe — An Aspiring Backend Developer."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900"
            />

            <p className="font-serif text-lg leading-relaxed text-gray-700 max-w-prose">
              I'm an IT student passionate about backend development, building reliable
              systems, and turning complex requirements into functional applications. I enjoy
              working with databases, APIs, and server-side technologies while continuously
              improving my skills through hands-on projects.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <DisableElevation
                buttonName="Download Resume"
                onClick={handleDownloadResume}
              />
            </div>
          </motion.section>

          {/* Right Image */}
          <motion.aside
            className="lg:col-span-5 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <ProfileCard />
          </motion.aside>
        </div>
      </motion.main>
    </div>
  );
}

export default Homepage;
