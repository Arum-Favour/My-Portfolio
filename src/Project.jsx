import React from "react";

function Project(props) {
  return (
    <div className="project">
      <div className="project-left">
        <img src={props.img} alt="projectimg" className="projectimage" />
      </div>
      <div className="project-right">
        <h3>{props.header}</h3>
        <p>{props.describe}</p>
        <a href={props.url}target="_blank" rel="noreferrer"><button>Demo</button></a>
      </div>
    </div>
  );
}
export default Project;
