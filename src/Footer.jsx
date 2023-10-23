import React from "react";

import  github from  "./Images/bxl-github.svg";
import  twitter from  "./Images/bxl-twitter.svg";
import  linkedin from  "./Images/bxl-linkedin.svg";

function Footer(params) {
  return (
    <footer>
      <div className="footercontent">
        <div>
          <a href="#navsection" className="logo" id="footer-logo">
            Favour.js
          </a>
        </div>
        <div>
          <p>©️ Favour Arum.All rights reserved</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/Kingsxn/" target="_blank" rel="noreferrer">
            <img src={github} alt="githubimage" className="github" />
          </a>
          <a href="https://www.linkedin.com/in/favour-arum-861639288/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" className="linkedin" />
          </a>
          <a href="https://twitter.com/kvngfx" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" className="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
