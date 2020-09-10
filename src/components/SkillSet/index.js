import React from "react";
import "./style.css";

function SkillSet() {
    return (
        <div className="uk-container">
            <a name="Skills"></a>
            <div class="uk-grid-large uk-child-width-expand@s uk-grid-match uk-column-1-3 uk-text-center" uk-grid>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 className="uk-card-title">Client Side</h3>
                    <ul className="uk-list uk-list-divider">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Handlebars</li>
                        <li>MySQL </li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 className="uk-card-title">Server Side</h3>
                    <ul className="uk-list uk-list-divider">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Handlebars</li>
                        <li>MySQL </li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 className="uk-card-title">Related</h3>
                    <ul className="uk-list uk-list-divider">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Handlebars</li>
                        <li>MySQL </li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SkillSet;