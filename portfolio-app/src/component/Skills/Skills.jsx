import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="container skills-container">
        <div className="skills-frontend">
          <h3>Frontend Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill
                fill="var(--lightGreen-awards-color)"
                className="skills-icon"
              />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill
                fill="var(--lightGreen-awards-color)"
                className="skills-icon"
              />
              <div>
                <h4>Css</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill
                fill="var(--lightGreen-awards-color)"
                className="skills-icon"
              />
              <div>
                <h4>Javascript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill
                fill="var(--lightGreen-awards-color)"
                className="skills-icon"
              />
              <div>
                <h4>Typescript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill
                fill="var(--lightGreen-awards-color)"
                className="skills-icon"
              />
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills-backend">
          <h3>Backend Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill
                fill="var(--lightGreen-awards-color)"
                className="skills-icon"
              />
              <div>
                <h4>Node.js</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill
                fill="var(--lightGreen-awards-color)"
                className="skills-icon"
              />
              <div>
                <h4>Mongodb</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill
                fill="var(--lightGreen-awards-color)"
                className="skills-icon"
              />
              <div>
                <h4>Firebase</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill
                fill="var(--lightGreen-awards-color)"
                className="skills-icon"
              />
              <div>
                <h4>Heroku</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
          <article className="skills_details">
            <BsPatchCheckFill
              fill="var(--lightGreen-awards-color)"
              className="skills-icon"
            />
            <div>
              <h4>Git</h4>
              <small>Experienced</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
