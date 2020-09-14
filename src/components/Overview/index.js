import React from "react";
import "./style.css";
import NewImg from "../../images/NewImg.jpg";

function Overview() {
    return (
        <div className="uk-container overviewContainer">
            <a name="Overview"></a>
            <h1 className="uk-text-center overviewTitle">About Me</h1>
            <hr></hr>
            <div className="aboutMe uk-container uk-text-center">
                <p>Hello there! I'm Eric, a certified full-stack web developer with a propensity for perfection. I am fully and unequivocally in love with coding. I’m fascinated by the way it combines logic and efficiency with design and aesthetics. I'm constantly on the lookout for projects and challenges that will allow me to advance my skills and further my passion. I would love to make the world a better place on the way.</p>
                <p>Outside of programming, I like nature, coffee, and music :)</p>
            </div>
            <div className="uk-container">
                <img className="myImg" src={NewImg} alt="Me" />
            </div>
            <a name="Skills"></a>
        </div>
    )
}

export default Overview;