import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav class="uk-navbar-container uk-navbar-transparent uk-navbar" id="navbar" uk-navbar>
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="#">Eric Purrington</a>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li><a href="#Overview">Overview</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a uk-toggle="target: #contact-canvas">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div id="contact-canvas" uk-offcanvas="overlay: true">
                <div class="uk-offcanvas-bar">

                    <button class="uk-offcanvas-close" type="button" uk-close><i class="exitCanvas fas fa-times"></i></button>

                    <div className="contactCon">
                        <h3>Let's work together!</h3>
                        <div className="col-xs">
                            <p className="contactP"><i className="contactIcon fas fa-phone"></i>(206) 913-3909</p>
                            <p className="contactP"><i className="contactIcon fas fa-home"></i>Denver, CO 80231</p>
                            <p className="contactP"><a href="mailto:eric.purrington@gmail.com" target="_blank" rel="noopener noreferrer"><i className="contactIcon fas fa-envelope"></i>eric.purrington@gmail.com</a></p>
                            <p className="contactP"><a href="https://github.com/eric-purrington" target="_blank" rel="noopener noreferrer"><i className="contactIcon fab fa-github"></i>eric-purrington</a></p>
                            <p className="contactP"><a href="https://www.linkedin.com/in/ericpurrington/" target="_blank" rel="noopener noreferrer"><i className="contactIcon fab fa-linkedin-in"></i>Eric Purrington</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;