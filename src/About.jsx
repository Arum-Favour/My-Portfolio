import React from "react";
import  aboutpics from  "./Images/1671114349178.jpg";

function About() {
  return (
    <section className="about" id="aboutsection">
      <div className="introhead">
        <h2>About Me</h2>
        <p className="subtitle">Get to know Me</p>
      </div>
      <div className="img-bio">
        <div className="bioimg">
          <img src={aboutpics} alt="imageKingson" />
        </div>
        <div className="bio">
          <p>
            {" "}
            I'm a web developer who creates lightning-fast and visually stunning
            responsive web applications. With a knack for optimizing{" "}
            <strong>SEO performance</strong>, I ensure your creations shine in
            the digital spotlight.<br></br> <br></br> I'm not just a coder – I'm a
            contributor. I've left my mark on open-source projects, fostering a
            collaborative spirit within the tech community.<br /> <strong>Let's transform your
            digital dreams into reality, one pixel at a time!</strong>
          </p>
          <a href="https://twitter.com/kvngfx" target="_blank" rel="noreferrer"><button>Contact Me</button></a>
        </div>
      </div>
    </section>
  );
}

export default About;
