import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__number">404</p>
      <p className="not-found__text">Страница не найдена</p>
      <a className="not-found__back" href="/">
        Назад
      </a>
    </div>
  );
}

export default NotFound;
