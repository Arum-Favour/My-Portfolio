import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import About from "./About";
import Portfolio from "./Portfolio";
import Contactme from "./Contactme";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <About />
      <Portfolio />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
