import React, { useState } from "react";
import "./header.css";
import menuIcon from "./menu-hamburguer.png";

// const hamburguerIcon = require('./menu-hamburguer.png')

const Header = () => {
  const [menuResponsive, setMenuResponsive] = useState(false);

  return (
    <>
      <nav className="menu container">
        <div className="title-container">
          <h1 className="title">Fernando Paredes Rios</h1>
        </div>
        <div className="icon-container" onClick={() => setMenuResponsive(!menuResponsive)}>
          <img
            src={menuIcon}
            alt="Menu responsive icon"
            className="icon-image"
          />
        </div>
      </nav>

      {menuResponsive && (
        <div className="menu-list-container">
          <ul className="menu-list">
            <li>Proyectos</li>
            <li>Blog</li>
            <li>Contacto</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
