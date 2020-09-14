import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="uk-card uk-text-center uk-card-default uk-card-body uk-first-column projectCard">
            <h2 className="projectTitle">{props.title}</h2>
            <div className="uk-inline uk-transition-toggle">
                <img className="projectSS" src={require(`../../images/${props.imageURL}.png`)} alt={props.title} />
                <div className="uk-overlay uk-transition-fade uk-overlay-primary uk-position-bottom">
                    <a className="uk-button uk-button-default projectURLs" href={props.gitURL} target="_blank" rel="noopener noreferrer">Github Page</a>
                    <a className="uk-button uk-button-default projectURLs" href={props.deployedURL} target="_blank" rel="noopener noreferrer">Live App</a>
                </div>
            </div>
            <p className="description">{props.description}</p>
            <p className="techList">Technologies: {props.tech.join(", ")}</p>
        </div>
    )
}

export default Project;