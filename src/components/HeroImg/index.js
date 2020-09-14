import React from "react";
import Navbar from "../Navbar";
import "./style.css";

function HeroImg() {
    return (
        <div className="hero-image-con uk-text-center">
            <div className="hero-image uk-background-fixed">
                <Navbar />
                <div className="hero-text">
                    <h1>Eric Purrington</h1>
                    <h3>Shaping aesthetically pleasing logic</h3>
                </div>
            </div>
            <a href="#Overview"><span className="scrollDownIcon uk-animation-shake" uk-icon="icon: chevron-down; ratio: 5"></span></a>
        </div>
    )
}

export default HeroImg;