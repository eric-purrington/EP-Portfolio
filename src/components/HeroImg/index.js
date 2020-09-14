import React from "react";
import Navbar from "../Navbar";
import "./style.css";

function HeroImg() {
    return (
        <div className="hero-image uk-background-fixed">
            <Navbar />
            <div className="hero-text">
                <h1>Eric Purrington</h1>
                <h2>Full Stack Web Developer</h2>
                <h3>Making logic aesthetically pleasing.</h3>
            </div>
        </div>
    )
}

export default HeroImg;