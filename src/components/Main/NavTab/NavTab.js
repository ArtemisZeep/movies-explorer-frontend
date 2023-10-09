import React from "react";
import "./NavTab.css";

const NavTab = () => {
  return (
    <ul className="navtab">
      <li>
        <a className="navtab__link" href="#about-project">
          О проекте
        </a>
      </li>
      <li>
        <a className="navtab__link" href="#techs">
          Технологии
        </a>
      </li>
      <li>
        <a className="navtab__link" href="#student">
          Студент
        </a>
      </li>
    </ul>
  );
};

export default NavTab;
