import React from "react";
// import Navbar from "./components/Navbar";
import HeroImg from "./components/HeroImg";
import Overview from "./components/Overview";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio">
      <HeroImg />
      <Overview />
      <SkillSet />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;