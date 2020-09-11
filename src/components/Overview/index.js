import React from "react";
import "./style.css";
import NewImg from "../../images/NewImg.jpg";

function Overview() {
    return (
        <div className="uk-container">
            <a name="Overview"></a>
            {/* <div className="uk-grid-medium uk-container-small uk-child-width-expand@s uk-grid-match uk-column-1-2 uk-text-center" uk-grid> */}
                <div className="uk-container">
                    <img className="myImg" src={NewImg} alt="Me" />
                </div>
                <div className="aboutMe uk-container uk-text-center">
                    <p>In early 2020, I decided to take a leap of faith and started a full-stack web development bootcamp hosted by the University of Washington in Seattle. I spent an intensive 24-weeks gaining technical programming skills in JavaScript, HTML5, CSS3, React, Node, SQL, and Mongo. The most important thing I learned is that coding is truly a passion of mine.</p>
                    <p>At the University of Washington, I spent two years studying math, engineering, philosophy, and computer science, knowing I had a knack for logical thinking. I eventually honed in on mathematics and completed my bachelors in Mathematics at Ottawa University. My time in college satisfied my hunger for logical thinking, but I found myself craving a challenge that included an aspect of creativity as well. I decided I would go back to school specifically for web development as a way to pursue a career that would allow my two passions to intersect. I now am fully and unequivocally in love with coding. I’m fascinated by the way it combines logic and efficiency with design and aesthetics. I'm constantly on the lookout for projects and challenges that will allow me to advance my skills and further my passion.</p>
                    <p>Outside of programming, I have fostered a strong knowledge of the service industry. I have worked as a shift lead in various coffee shops for the last 4 years, allotting time to learn about the coffee culture in Seattle as well as how to lead and work within a team. I feel my ability to adapt and communicate in a fast paced environment, all while providing excellent customer service has made me a well-rounded job candidate with a diverse set of skills and background.</p>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Overview;