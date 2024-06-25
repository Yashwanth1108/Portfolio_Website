import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <button className="logoButton">
          <img src={logo} alt="logo" className="logo" />
        </button>

        <div className="desktopMenu">
          <Link className="menuList">Home</Link>
          <Link className="menuList">About</Link>
          <Link className="menuList">Portfolio</Link>
          <Link className="menuList">Clients</Link>
        </div>
        <button className="menuButton">
          <img src={contactImg} alt="" className="ButtonImg" />
          Conatct Me
        </button>
      </nav>
    </>
  );
}

export default Navbar;
