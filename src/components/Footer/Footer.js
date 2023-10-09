import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <footer className="footer">
      <h2 className="footer__copyright">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__line"></div>
      <div className="footer__info">
        <p className="footer__year">© 2020</p>
        <div className="footer__links">
          <a className="footer__link">Яндекс.Практикум</a>
          <a className="footer__link">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default About;
