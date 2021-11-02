import React from "react";
import "./footer.css";
import SocialLink from "../SocialLink/SocialLink";
import githubIcon from "./github-icon.svg";
import instagramIcon from "./instagram-2-1.svg";
import twitterIcon from "./twitter-6.svg";
import linkedinIcon from "./linkedin-icon-2.svg";

const Footer = () => {
  return (
    <>
      <h1 className="footer-title">Sígueme y estemos en contacto</h1>

      <div className="container icons-container">
        <SocialLink iconImage={githubIcon} />
        <SocialLink iconImage={instagramIcon} />
        <SocialLink iconImage={twitterIcon} />
        <SocialLink iconImage={linkedinIcon} />
      </div>

      <div className="footer-ending">
        <p>&copy; 2021 Fernando Paredes Rios</p>
      </div>
    </>
  );
};

export default Footer;
