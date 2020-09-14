import React from "react";
import "./style.css";

function Project(props) {
    return (
        // <div className="uk-container projectCon">
            <div className="uk-grid-large uk-child-width-expand@m uk-grid-match projectCon"  uk-grid="true">
                <div className="uk-first-column uk-text-center imgSide">
                    <h2 className="projectTitle">{props.title}</h2>
                    <img className="projectSS" src={require(`../../images/${props.imageURL}.png`)} alt={props.title} />
                </div>
                <div className="uk-first-column uk-text-center descSide">
                    <p>{props.description}</p>
                    <a className="uk-button uk-button-default projectURLs" href={props.gitURL} target="_blank" rel="noopener noreferrer">Github Page</a>
                    <a className="uk-button uk-button-default projectURLs" href={props.deployedURL} target="_blank" rel="noopener noreferrer">Live App</a>
                    <p className="techList">Technologies: {props.tech.join(", ")}</p>
                </div>
            </div>
        // </div>
    )
}

export default Project;