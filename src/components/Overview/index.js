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
                <p>Hello there! I’m Eric, a certified full-stack web developer with a propensity for perfection. I am fully and unequivocally in love with coding. I’m fascinated by the way it combines logic and efficiency with design and aesthetics. I also love the way coding can help people connect with resources and loved ones. Now more than ever, we’ve seen the powerful impact that websites and apps can have on people’s wellbeing. As a mental health advocate, I’m passionate about using my skills to help improve people’s mental and emotional wellness.</p>
            </div>
            <div className="uk-container">
                <img className="myImg" src={NewImg} alt="Me" />
            </div>
            <a name="Skills"></a>
        </div>
    )
}

export default Overview;