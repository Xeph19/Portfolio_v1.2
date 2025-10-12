import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/Homepage/ProfileCard";
import BlurText from "../components/Homepage/BlurText";
import DisableElevation from "../components/Buttons";
import BackgroundBlobs from "../components/BackgroundBlobs";

function Homepage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "John_Rhe_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden relative">
      <BackgroundBlobs />
      <motion.main
        className="pt-28 px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <div className="font-serif text-xs uppercase tracking-widest text-gray-500 mb-3">
          - Welcome
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.section
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="sr-only">Homepage Introduction</h1>
            <div>
              <BlurText
                text="I'm John Rhe — An Aspiring Successful IT Student"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight"
              />
            </div>

            <p className="font-serif text-lg leading-relaxed max-w-prose">
              I specialize in Web Development and enjoy turning ideas into functional,
              impactful applications. Welcome to my portfolio, where I showcase my projects,
              skills, and journey in tech.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <DisableElevation
                buttonName="Download Resume"
                onClick={handleDownloadResume}
              />
            </div>
          </motion.section>

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
