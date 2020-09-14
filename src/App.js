import React from "react";
import HeroImg from "./components/HeroImg";
import Overview from "./components/Overview";
import SkillSet from "./components/SkillSet";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio">
      <HeroImg />
      <Overview />
      <SkillSet />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App;