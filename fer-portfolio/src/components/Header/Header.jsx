import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const iconArrowRigth = <FontAwesomeIcon icon={faCaretSquareRight} />;
const closeIcon = <FontAwesomeIcon icon={faTimes} />;

export const Header = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const openMenu = () => {
    setClickMenu(true);
  };
  const closeMenu = () => {
    setClickMenu(false);
  };

  return (
    <div className="header-container">
      <div className="header-title-icon-container">
        {clickMenu == true ? (
          <>
            <ul>
              <li className="list-menu-item">Fernando Paredes Rios</li>
              <li className="list-menu-item">Projects</li>
              <li className="list-menu-item">Blog</li>
              <li className="list-menu-item">About</li>
              <li className="list-menu-item">Contact</li>
            </ul>
            <div className="header-icon-close-container header-icon-container" onClick={closeMenu}>
              {closeIcon}
            </div>
          </>
        ) : (
          <>
            <div className="header-close-menu-container">
              <div className="header-icon-container" onClick={openMenu}>
                {iconArrowRigth}
              </div>
              <div className="header-website-name">Fernando Paredes Rios</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
