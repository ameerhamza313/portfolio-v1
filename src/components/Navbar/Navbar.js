import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // State for mobile menu toggle
  const [Mobile, setMobile] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobile(!Mobile);
  };

  // Add a scroll event listener using useEffect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${Mobile ? "active" : ""}`}>
        <div className="container d_flex">
          <div className="logo">{/* <img src={logo} alt='' /> */}</div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#skills">skills</a>
              </li>
              <li>
                <a href="#projects">projects</a>
              </li>
              <li>
                <a href="#education">education</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1nqSQGfKlfEyOwmvxGE_nkrBLd2G9EQ6K/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="home-btn">RESUME</button>
                </a>
              </li>
            </ul>

            <button className="toggle" onClick={toggleMobileMenu}>
              {Mobile ? (
                <FontAwesomeIcon icon={faTimes} className="close home-btn" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
