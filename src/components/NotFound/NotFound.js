import React from "react";
import { useNavigate } from "react-router";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-2);
  };

  return (
    <main>
      <section className="not-found">
        <p className="not-found__number">404</p>
        <p className="not-found__text">Страница не найдена</p>
        <button className="not-found__back" onClick={navigateBack}>
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFound;
