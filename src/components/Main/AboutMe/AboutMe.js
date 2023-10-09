import React, { useEffect, useState } from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [width, setWidth] = useState(0);

  function getWidth() {
    const display = window.innerWidth;
    setWidth(display);
    console.log(width);
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
    <div className="about-me" id="student">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__line"></div>
      {width > 767 ? (
        <div className="about-me__info">
          <div className="about-me__info-text">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__job-and-age">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
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
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__job-and-age">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
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
      <div className="about-me__app-container">
        <a className="about-me__app">Статичный сайт</a>
        <div className="about-me__arrow"></div>
      </div>
      <div className="about-me__line about-me__line_type_grey"></div>
      <div className="about-me__app-container">
        <a className="about-me__app">Адаптивный сайт</a>
        <div className="about-me__arrow"></div>
      </div>
      <div className="about-me__line about-me__line_type_grey"></div>
      <div className="about-me__app-container">
        <a className="about-me__app">Одностраничное приложение</a>
        <div className="about-me__arrow"></div>
      </div>
    </div>
  );
};

export default AboutMe;
