import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Nav_bar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY < 30);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrolled(true);
  }, [pathname]);

  return (
    <nav
      className={`navbar navbar-expand-lg main-navbar fixed-top ${
        scrolled ? "navbar-shrink" : ""
      } `}
    >
      <div className="container">
        <NavLink className={`navbar-brand ${scrolled ? "fs-2" : "fs-4"} `} to="/">
          START FRAMEWORK
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portofolio">
                PORTOFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav_bar;
