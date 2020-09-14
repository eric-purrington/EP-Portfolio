import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav className="uk-navbar-container nav-trans uk-navbar" id="navbar" uk-navbar="true">
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav uk-visible@s">
                        <li><a href="#Overview">Overview</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a uk-toggle="target: #contact-canvas">Contact</a></li>
                        <li><a href="https://docs.google.com/document/d/1p017outhH1KKHGNTE0uOz2DamEU9NH1m3uNzBDrNu_g/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </ul>
                    <a href="#" className="uk-navbar-toggle uk-hidden@s" uk-toggle="target: #sidenav" id="hamburger"><i className="fas fa-bars fa-lg"></i></a>
                </div>
            </nav>
            <div id="contact-canvas" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar">

                    <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

                    <div className="contactCon">
                        <h2>Contact Me</h2>
                        <p className="contactP"><span uk-icon="receiver"></span>(206) 913-3909</p>
                        <p className="contactP"><span uk-icon="home"></span>Denver, CO 80231</p>
                        <p className="contactP"><a href="mailto:eric.purrington@gmail.com" target="_blank" rel="noopener noreferrer"><span uk-icon="mail"></span>eric.purrington@gmail.com</a></p>
                        <p className="contactP"><a href="https://github.com/eric-purrington" target="_blank" rel="noopener noreferrer"><i className="contactIcon fab fa-github"></i>eric-purrington</a></p>
                        <p className="contactP"><a href="https://www.linkedin.com/in/ericpurrington/" target="_blank" rel="noopener noreferrer"><i className="contactIcon fab fa-linkedin-in"></i>Eric Purrington</a></p>
                    </div>

                </div>
            </div>
            <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
                <div className="uk-offcanvas-bar">

                    <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

                    <ul className="uk-nav">
                        <li><a href="#Overview">Overview</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a uk-toggle="target: #contact-canvas">Contact</a></li>
                        <li><a href="https://docs.google.com/document/d/1p017outhH1KKHGNTE0uOz2DamEU9NH1m3uNzBDrNu_g/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;