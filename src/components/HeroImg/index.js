import React from "react";
import Navbar from "../Navbar";
import "./style.css";

function HeroImg() {
    return (
        <div class="hero-image">
            <Navbar />
            <div class="hero-text">
                <h1>Eric Purrington</h1>
                <h3>Full Stack Web Developer</h3>
            </div>
        </div>
    )
}

export default HeroImg;