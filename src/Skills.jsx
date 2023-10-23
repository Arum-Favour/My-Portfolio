import React from "react";
import  html from  "./Images/002-html-5.png";
import  css from  "./Images/001-css-3.png";
import  javascript from  "./Images/002-js.png";
import  bootstrap from  "./Images/001-bootstrap.png";
import  react from  "./Images/004-physics.png";
import  github from  "./Images/003-github.png";
import  jquery from  "./Images/icons8-jquery-is-a-javascript-library-designed-to-simplify-html-64.png";


function Skills() {
  return (
    <section className="skills" id="skillsection">
      <div className="technologies">
        <div>
          <h2>TECHNOLOGIES</h2>
        </div>
        <div className="skillsimg">
          <img src={html} alt="html img" className="htmlicon" />
          <img src={css} alt="css img" className="cssicon" />
          <img
            src={bootstrap}
            alt=" bootstrap img"
            className="bootstrapicon"
          />
          <img src={javascript} alt="js img" className="jsicon" />
          <img
            src={jquery}
            alt="jquery img"
            className="jqueryicon"
          />
          <img src={react} alt=" react img" className="reacticon" />
          <img src={github} alt="git img" className="githubicon" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
