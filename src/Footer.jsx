import React from "react";

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
            <img src="./bxl-github.svg" alt="githubimage" className="github" />
          </a>
          <a href="https://www.linkedin.com/in/favour-arum-861639288/" target="_blank" rel="noreferrer">
            <img src="./bxl-linkedin.svg" alt="linkedin" className="linkedin" />
          </a>
          <a href="https://twitter.com/kvngfx" target="_blank" rel="noreferrer">
            <img src="./bxl-twitter.svg" alt="twitter" className="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
