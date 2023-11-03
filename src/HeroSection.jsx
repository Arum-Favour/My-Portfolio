import React from "react";
import  github from  "./Images/bxl-github.svg";
import  twitter from  "./Images/bxl-twitter.svg";
import  linkedin from  "./Images/bxl-linkedin.svg";
import  profilepics from  "./Images/profilePics.jpg";

function HeroSection() {
  return (
    <section className="herosection" id="herosect">
      <div className="herobio">
        <h1>Hi, I'm Favour Arum</h1>
        <h2>Frontend Developer</h2>
        <p>
          Crafting digital dreams into <strong>reality!</strong> I'm a
          passionate and disciplined web developer with an intuitive flair for
          creating awe-inspiring websites and cutting-edge web applications.
          <strong>Let's elevate your online presence together!</strong>
        </p>
        <div className="btn">
          <button>
            <a
              href="mailto: nwajiudo@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
          </button>
          <button>
            <a href="https://drive.google.com/file/d/1CXa6WYM7YlgA6Sce3ZaNJ-Qn33ICQUy_/view?usp=sharing" target="_blank" rel="noreferrer">
               My CV{" "}
            </a>
          </button>
        </div>
        <div className="socials">
          <a
            href="https://github.com/Kingsxn/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src= {github}
              alt="githubimage"
              className="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/favour-arum-861639288/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="linkedin" />
          </a>
          <a href="https://twitter.com/kvngfx" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" className="twitter" />
          </a>
        </div>
      </div>

      <div className="homeimg">
        <img src={profilepics} alt="ProfilePicture" />
      </div>
    </section>
  );
}

export default HeroSection;
