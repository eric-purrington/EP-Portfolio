import React from "react";
import projects from "../../utils/projects.json";
import Project from "../Project";
import "./style.css";

function Portfolio() {
    return (
        <div className="uk-container-expand portfolioCon">
            <h1 className="uk-text-center portfolioTitle">Portfolio</h1>
            <hr></hr>
            <div className="uk-grid-large uk-grid uk-child-width-1-2@l uk-grid-match" uk-grid="true">
                {projects.map(project => (
                    <Project
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imageURL={project.imageURL}
                    gitURL= {project.gitURL}
                    deployedURL= {project.deployedURL}
                    tech={project.tech} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;