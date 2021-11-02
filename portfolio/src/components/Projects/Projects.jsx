import React from "react";
import Project from "../Project/Project";
import "./projects.css";
import project1 from "./valorweb_71355956-ce17-4795-8a8b-d67c81795b3b.png";
import project2 from "./scrrrnshotanimalia_43e52ab2-c03c-4dc0-b9a2-b46c9dc2e423.png";
import project3 from "./educaredhome_771e0e96-ac26-4dd5-b0e1-b8b5474984f0.png"
import project4 from "./dimensofthome_2a040775-d247-444a-9559-2832929c93c2.png"
import project5 from "./villaplanetlanding_294d522f-4b88-4bba-b963-173159d9ef75.png"

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="projects-title">Proyectos</h2>
        <Project image={project1} title={"Agencia Valor"} />

        <Project image={project2} title={"Veterinaria Animalia"} />

        <Project image={project3} title={"Educared"} />

        <Project image={project4} title={"Dimensoft Web"} />

        <Project image={project5} title={"VillaPlanet Landing Page"} />
      </div>
    </div>
  );
};

export default Projects;
