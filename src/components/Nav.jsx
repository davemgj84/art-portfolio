import React from "react";
import { Link, NavLink } from "react-router-dom";
import openNav from "../helpers/openNav";
import closeNav from "../helpers/closeNav";
import "../styles/Nav.scss";

const Nav = () => {
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
        <ul className="nav-links">
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid #ffffff",
                paddingBottom: "4px",
                color: "#ffffff",
              }}
              onClick={() => closeNav()}
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
              onClick={() => closeNav()}
              to={"/gallery"}
            >
              Gallery
            </NavLink>
            <ul className="dropdown">
              <li>
                <a href="#">Painting</a>
              </li>
              <li>
                <a href="#">Sculpture</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid #ffffff",
                paddingBottom: "4px",
                color: "#ffffff",
              }}
              onClick={() => closeNav()}
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
              onClick={() => closeNav()}
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
              onClick={() => closeNav()}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div onClick={() => openNav()} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
