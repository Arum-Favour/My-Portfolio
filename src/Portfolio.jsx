import React from "react";
import ProjectDetails from "./ProjectDetails";
import Project from "./Project";

function createProject(ProjectDetails) {
  return (
    <Project
      img={ProjectDetails.image}
      header={ProjectDetails.name}
      describe={ProjectDetails.description}
      url={ProjectDetails.projectUrl}
    />
  );
}

function Portfolio() {
  return (
    <section className="portfolio" id="portfolioSection">
      <div className="introhead">
        <h2>PORTFOLIO</h2>
        <p className="subtitle">My Past works</p>
      </div>
      {ProjectDetails.map(createProject)}
    </section>
  );
}

export default Portfolio;
