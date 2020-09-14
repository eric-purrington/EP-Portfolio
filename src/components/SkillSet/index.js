import React from "react";
import "./style.css";

function SkillSet() {
    return (
        <div className="uk-container-expand skillSet">
            <a name="Skills"></a>
            <h1 className="uk-text-center skillTitle">Skill Set</h1>
            <hr></hr>
            <div className="uk-grid-large uk-child-width-expand@m uk-grid-match" uk-grid="true">
                <div className="uk-card uk-text-center uk-card-default uk-card-body uk-card-hover uk-first-column" uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                    <h3 className="uk-card-title">Client Side</h3>
                    <ul className="uk-list uk-list-divider">
                        <li>React</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap, UIKit</li>
                    </ul>
                </div>
                <div className="uk-card uk-text-center uk-card-default uk-card-body uk-card-hover uk-first-column" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: false">
                    <h3 className="uk-card-title">Server Side</h3>
                    <ul className="uk-list uk-list-divider">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Handlebars</li>
                        <li>APIs</li>
                        <li>MySQL | Sequelize</li>
                        <li>MongoDB | Mongoose</li>
                    </ul>
                </div>
                <div className="uk-card uk-text-center uk-card-default uk-card-body uk-card-hover uk-first-column" uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                    <h3 className="uk-card-title">Related</h3>
                    <ul className="uk-list uk-list-divider">
                        <li>Figma</li>
                        <li>Responsive Web Design</li>
                        <li>Progressive Web Apps</li>
                        <li>Version Control</li>
                        <li>Testing</li>
                        <li>Authentication</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SkillSet;