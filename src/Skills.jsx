import React from "react";

function Skills() {
  return (
    <section className="skills" id="skillsection">
      <div className="technologies">
        <div>
          <h2>TECHNOLOGIES</h2>
        </div>
        <div className="skillsimg">
          <img src="./002-html-5.png" alt="html img" className="htmlicon" />
          <img src="./001-css-3.png" alt="css img" className="cssicon" />
          <img
            src="./001-bootstrap.png"
            alt=" bootstrap img"
            className="bootstrapicon"
          />
          <img src="./002-js.png" alt="js img" className="jsicon" />
          <img
            src="./icons8-jquery-is-a-javascript-library-designed-to-simplify-html-64.png"
            alt=""
            className="jqueryicon"
          />
          <img src="./004-physics.png" alt=" react img" className="reacticon" />
          <img src="./003-github.png" alt="git img" className="githubicon" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
