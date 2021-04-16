import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Nav.scss";

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideMenu(false);
    }, 30);
  }, [hideMenu]);

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
              activeStyle={{
                borderBottom: "2px solid #ffffff",
                paddingBottom: "4px",
                color: "#ffffff",
              }}
              onClick={() => setNavActive(false)}
              to={"/home"}
            >
              Home
            </NavLink>
          </li>
          <li className="drop">
            <NavLink
              activeStyle={{
                borderBottom: "2px solid #ffffff",
                paddingBottom: "4px",
                color: "#ffffff",
              }}
              onClick={() => setNavActive(false)}
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
              activeStyle={{
                borderBottom: "2px solid #ffffff",
                paddingBottom: "4px",
                color: "#ffffff",
              }}
              onClick={() => setNavActive(false)}
              to={"/bio"}
            >
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid #ffffff",
                paddingBottom: "4px",
                color: "#ffffff",
              }}
              onClick={() => setNavActive(false)}
              to={"/statement"}
            >
              Artist Statement
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid #ffffff",
                paddingBottom: "4px",
                color: "#ffffff",
              }}
              onClick={() => setNavActive(false)}
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
};

export default Nav;
