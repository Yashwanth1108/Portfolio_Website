import React from "react";
import "./homeSection.css";
import bgImage from "../../assets/image.png";
import { Link } from "react-scroll";
import hireImg from "../../assets/hireme.png";

function HomeSection() {
  return (
    <>
      <scection id="home">
        <div className="homeContent">
          <span className="hello">Hello,</span>
          <span className="intro">
            I,m{" "}
            <span className="name">
              Yashwanth Reddy <br></br>{" "}
            </span>{" "}
            Web Developer
          </span>
          <p className="description">I'm a Skilled Web developer</p>
          <a>
            <button className="btn">
              <img src={hireImg} alt="hireMe" className="btnImg"></img> Hire me
            </button>
          </a>
        </div>
        <img src={bgImage} alt="profileImg" className="bgImg" />
      </scection>
    </>
  );
}
export default HomeSection;
