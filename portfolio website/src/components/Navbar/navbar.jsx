import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link className="menuList">Home</Link>
          <Link className="menuList">Aout</Link>
          <Link className="menuList">Portfolio</Link>
          <Link className="menuList">Clients</Link>
        </div>
        <button className="menuButton">
          <img src="" alt="" className="ButtonImg" />
          Conatct Me
        </button>
      </nav>
    </>
  );
}

export default Navbar;
