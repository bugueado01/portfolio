import React from "react";
import Skill from "../Skill/Skill";
import './skillsCard.css'
import reactLogo from "./logo.svg";
import reactnativeLogo from './react-native-1.svg'
import javascriptLogo from './logo-javascript.svg'
import pythonLogo from './python-5.svg'
import nodeLogo from './nodejs.svg'


const SkillsCard = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="skills-title">Lenguajes y Frameworks</h2>
        <Skill text={'JavaScript'} image={javascriptLogo}/>
        <Skill text={'React'} image={reactLogo}/>
        <Skill text={'React Native'} image={reactnativeLogo}/>
        <Skill text={'Node JS'} image={nodeLogo}/>
        <Skill text={'Python'} image={pythonLogo}/>
      </div>
    </div>
  );
};

export default SkillsCard;
