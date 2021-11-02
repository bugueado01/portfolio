import React from "react";
import "./project.css"

const Project = ({ image, title }) => {
  return (
    <div className="container">
      <div className="card project-container">
        <img src={image} className="card-img-top project-image" alt={title} />
        <div className="project-description-container">
          <p className="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
