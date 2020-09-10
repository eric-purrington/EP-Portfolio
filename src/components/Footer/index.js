import React from "react";
import "./style.css";

function Footer() {
    return (
        <div className="uk-container uk-container-expand footer">
            <div className="textHolder uk-text-center">
                <a href="https://github.com/eric-purrington" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/ericpurrington/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>
                <a href="mailto:eric.purrington@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope fa-2x"></i></a>
                <p>&copy; Eric Purrington 2020</p>
            </div>
        </div>
    )
}

export default Footer;