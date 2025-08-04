import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Navbar from '../components/Navbar';
import BlurText from '../components/BlurText';
import DisableElevation from '../components/Buttons';

function Homepage() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar className="bg-black !text-white" />

      <main className="pt-12 px-6 max-w-7xl mx-auto">
        <div className="font-serif text-xs uppercase tracking-widest text-gray-500 mb-3">
          - Welcome
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left content */}
          <section className="lg:col-span-7 flex flex-col gap-6">
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

            {/* Button + Future social icons */}
            <div className="flex items-center gap-3 mt-2">
              <DisableElevation
                buttonName="More About Me"
                className="px-3 py-1 text-sm font-medium rounded-md"
              />
              {/* Placeholder for future icons */}
              {/* Example:
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              */}
            </div>
          </section>

          {/* Right: Profile card only */}
          <aside className="lg:col-span-5 flex justify-center lg:justify-start">
            <ProfileCard />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
