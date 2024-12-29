import React from "react";
import projectsData from "../../assets/projectsData/data";
import ProjectItem from "./ProjectsItem";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects_allItems">
        <>
          {projectsData.map((project, idx) => {
            return (
              <ProjectItem
                title={project.name}
                img={project.img}
                desc={project.description}
                url={project.url}
                github={project.github}
                key={idx}
              />
            );
          })}
        </>
      </div>
    </section>
  );
};

export default Projects;
