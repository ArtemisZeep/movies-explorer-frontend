import React from "react";
import "./MoviesCard.css";

function MoviesCard({ card, saved }) {
  const cardSaveButtonClass = `${
    card.saved
      ? "movies-card__save-button movies-card__save-button_active"
      : "movies-card__save-button"
  }`;

  return (
    <li className="movies-card">
      <img className="movies-card__image" alt={card.nameRU} src={card.link} />
      <div className="movies-card__info-container">
        <h3 className="movies-card__text">{card.nameRU}</h3>
        <p className="movies-card__time">{card.duration}</p>
      </div>

      {saved ? (
        <button className="movies-card__delete-button"></button>
      ) : (
        <button className={cardSaveButtonClass}>Сохранить</button>
      )}
    </li>
  );
}

export default MoviesCard;
