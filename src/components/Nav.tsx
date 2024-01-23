import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/Nav.scss";

export default function Nav() {
  const [navActive, setNavActive] = useState<boolean>(false);
  const [hideMenu, setHideMenu] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setHideMenu(false);
    }, 30);
  }, [hideMenu]);

  function handleNavigation() {
    window.scrollTo(0, 0);
    setNavActive(false);
  }

  return (
    <>
      <nav>
        <div className="logo">
          <h4>
            <Link to={"/home"}>
              Art by D<span className="remove">avid</span> J
              <span className="remove">ardine</span>
            </Link>
          </h4>
        </div>
        <ul className={navActive ? "nav-active nav-links" : "nav-links"}>
          <li>
            <NavLink
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #ffffff" : "",
                paddingBottom: isActive ? "4px" : "1px",
                color: isActive ? "#ffffff" : "#d0d0d0",
              })}
              onClick={handleNavigation}
              to={"/home"}
            >
              Home
            </NavLink>
          </li>
          <li className="drop">
            <NavLink
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #ffffff" : "",
                paddingBottom: isActive ? "4px" : "1px",
                color: isActive ? "#ffffff" : "#d0d0d0",
              })}
              onClick={handleNavigation}
              to={"/gallery"}
            >
              Gallery
            </NavLink>
            <ul className={hideMenu ? "dropdown hide-menu" : "dropdown"}>
              <div>
                <Link to={"/painting"} onClick={() => setHideMenu(true)}>
                  Painting
                </Link>
              </div>
              <div>
                <Link to={"/sculpture"} onClick={() => setHideMenu(true)}>
                  Sculpture
                </Link>
              </div>
            </ul>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #ffffff" : "",
                paddingBottom: isActive ? "4px" : "1px",
                color: isActive ? "#ffffff" : "#d0d0d0",
              })}
              onClick={handleNavigation}
              to={"/bio"}
            >
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #ffffff" : "",
                paddingBottom: isActive ? "4px" : "1px",
                color: isActive ? "#ffffff" : "#d0d0d0",
              })}
              onClick={handleNavigation}
              to={"/statement"}
            >
              Artist Statement
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid #ffffff" : "",
                paddingBottom: isActive ? "4px" : "1px",
                color: isActive ? "#ffffff" : "#d0d0d0",
              })}
              onClick={handleNavigation}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          onClick={() => setNavActive((prev) => !prev)}
          className={navActive ? "burger toggle" : "burger"}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}
