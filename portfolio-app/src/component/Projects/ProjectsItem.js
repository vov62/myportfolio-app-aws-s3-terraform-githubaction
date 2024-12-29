import React from "react";
import "./projectsItem.css";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ title, img, desc, url, github }) => {
  return (
    <>
      <div className="project-details">
        <div className="project_img">
          <img src={img} alt={title} />
        </div>
        <div className="projectItem__info">
          <h3 className="projectItem__title">{title}</h3>
          <p className="projectItem__desc">{desc}</p>

          <div className="projectItem_links">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <h4 className="projectItem_viewProject">Live</h4>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={26} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
