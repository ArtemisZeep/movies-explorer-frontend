import React, { useEffect, useState } from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [width, setWidth] = useState(0);

  function getWidth() {
    const display = window.innerWidth;
    setWidth(display);
    
  }
  useEffect(() => {
    getWidth();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", getWidth);
    }, 500);
  });

  return (
    <section className="about-me" id="student">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__line"></div>
      {width > 450 ? (
        <div className="about-me__info">
          <div className="about-me__info-text">
            <h3 className="about-me__name">Артемий</h3>
            <p className="about-me__job-and-age">
            Фронтенд-разработчик, 21 год
            </p>
            <p className="about-me__description">
            Я родился в Новосибирске, живу в Санкт-Петербурге. Сейчас заканчиваю факультет менеджмента Высший Школы Экономики. 
              Я люблю писать музыку, также играю диджеем в крупных клубах Санкт-Петербурга. Около года работал младшим маркетологом, где научился анализу данных и понял, что мне нравится разработка. После того, как прошёл курс по веб-разработке, решил найти интересную работу,  которая поможет стать мне крутым специалистом.
            </p>
            <a
              className="about-me__link-to-github"
              href="https://github.com/ArtemisZeep"
            >
              Github
            </a>
          </div>
          <div className="about-me__photo"></div>
        </div>
      ) : (
        <div className="about-me__info">
          <div className="about-me__photo"></div>
          <div className="about-me__info-text">
            <h3 className="about-me__name">Артемий</h3>
            <p className="about-me__job-and-age">
              Фронтенд-разработчик, 21 год
            </p>
            <p className="about-me__description">
              Я родился в Новосибирске, живу в Санкт-Петербурге. Сейчас заканчиваю факультет менеджмента Высший Школы Экономики. 
              Я люблю писать музыку, также играю диджеем в крупных клубах Санкт-Петербурга. Около года работал младшим маркетологом, где научился анализу данных и понял, что мне нравится разработка. После того, как прошёл курс по веб-разработке, решил найти интересную работу,  которая поможет стать мне крутым специалистом.
            </p>
            <a
              className="about-me__link-to-github"
              href="https://github.com/ArtemisZeep"
            >
              Github
            </a>
          </div>
        </div>
      )}
      <h3 className="about-me__portfolio-title">Портфолио</h3>
      <a className="about-me__app-container" href="https://github.com/ArtemisZeep/how-to-learn" target="_blank">
        <a className="about-me__app">Статичный сайт</a>
        <div className="about-me__arrow"></div>
      </a>
      <div className="about-me__line about-me__line_type_grey" ></div>
      <a className="about-me__app-container" href="https://github.com/ArtemisZeep/russian-travel" target="_blank">
        <a className="about-me__app">Адаптивный сайт</a>
        <div className="about-me__arrow"></div>
      </a>
      <div className="about-me__line about-me__line_type_grey"></div>
      <a className="about-me__app-container" href="https://github.com/ArtemisZeep/react-mesto-api-full-gha" target="_blank">
        <a className="about-me__app">Одностраничное приложение</a>
        <div className="about-me__arrow"></div>
      </a>
    </section>
  );
};

export default AboutMe;
