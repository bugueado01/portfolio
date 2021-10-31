import React from "react";
// import reactLogo from "./logo.svg";
import './skill.css'

const Skill = ({text, image}) => {
  return (
    <div className="card skill-container col-5 col-xl-2">
      <img src={image} className="card-img-top skill-image" alt="..." />
      <div className="card-body">
        <p className="card-text skill-text">{text}</p>
      </div>
    </div>
  );
};

export default Skill;
