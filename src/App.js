import React from "react";
import Navbar from "./components/Navbar";
import HeroImg from "./components/HeroImg";
import Elevator from "./components/Elevator";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Elevator />
      <SkillSet />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App;