import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import ProjectGallery from "./pages/ProjectGallery";
import About from "./pages/About";
import Footer from "./components/Footer"

const NAVBAR_HEIGHT = 80;

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="pt-[80px]">
        <section id="home" className="min-h-screen bg-gray-50">
          <Homepage />
        </section>

        <section id="projects" className="min-h-screen bg-gray-100">
          <ProjectGallery />
        </section>

        <section id="about" className="min-h-screen bg-gray-50">
          <About />
        </section>
             <Footer />
      </main>
    </div>
  );
}

export default App;
