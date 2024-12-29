import React from "react";
import "./about.css";
import me1 from "../../images/me1.jpg";
// import {
//   ScrollContainer,
//   ScrollPage,
//   Animator,
//   MoveIn,
// } from "react-scroll-motion";

const About = () => {
  return (
    <section id="about" className="container">
      <div className="container-left">
        <div className="left-card bg"></div>
        <div className="left-card">
          <img src={me1} alt="" />
        </div>
      </div>

      <div className="container-right">
        <h1 className="profile-title">About Me</h1>
        <p className="profile-sub">
          Hi, i'm a junior full stack developer who looking for an opportunity
          to express my skills and learn new technological tools.
          <br />
          i'm highly motivated, Fast learner, hard worker, responsible with
          strong team collaboration and leadership skills.
        </p>
        <a href="#contact" className="profile-btn">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
