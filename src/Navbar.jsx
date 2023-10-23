import React, { useState } from "react";
import  hamburger from  "./Images/icons8-hamburger-menu-50.png";

function Navbar() {

  const [hamburgerClicked, setHamburgerClicked] = useState("");
  const handleClick = () => {
    if (hamburgerClicked === "") {
      setHamburgerClicked("active");
    } else {
      setHamburgerClicked("");
    }
  };

  return (
    <div className="nav" id="navsection">
      <nav>
        <header>
          <a href="#html" className="logo">
            Favour.js
          </a>
        </header>
        <ul className={hamburgerClicked}>
          <li>
            <a href="#navsection" onClick={handleClick}>Home</a>
          </li>
          <li>
            <a href="#aboutsection" onClick={handleClick}>About</a>
          </li>
          <li>
            {" "}
            <a href="#skillsection" onClick={handleClick}>Skills</a>
          </li>
          <li>
            <a href="#portfolioSection" onClick={handleClick}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick}>Contact Me</a>
          </li>
        </ul>
        <span className="hamburger" onClick={handleClick}>
          <img src={hamburger} alt="dropdown" />
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
