import React from "react";
import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__line"></div>
      <div className="techs__info">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__stacks">
          <li className="techs__stack">HTML</li>
          <li className="techs__stack">CSS</li>
          <li className="techs__stack">JS</li>
          <li className="techs__stack">React</li>
          <li className="techs__stack">Git</li>
          <li className="techs__stack">Express.js</li>
          <li className="techs__stack">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
