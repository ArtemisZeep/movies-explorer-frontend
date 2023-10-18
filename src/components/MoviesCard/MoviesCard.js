import React from "react";
import "./MoviesCard.css";

function MoviesCard({
  card,
  saved,
  isSavedFilms,
  handleLikeClick,
  onCardDelete,
  savedMovies,
  pathname,
}) {
  function onCardClick() {
    if (saved) {
      console.log("Not");
      onCardDelete(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeClick(card);
      console.log("Saved");
    }
  }

  function onDelete() {
    onCardDelete(card);
  }

  const cardSaveButtonClass = `${
    saved
      ? "movies-card__save-button movies-card__save-button_active"
      : "movies-card__save-button"
  }`;

  return (
    <li className="movies-card">
      <a href={card.trailerLink} target="_blank">
        <img
          className="movies-card__image"
          alt={card.nameRU}
          src={
            isSavedFilms
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
        />
      </a>
      <div className="movies-card__info-container">
        <h3 className="movies-card__text">{card.nameRU}</h3>
        <p className="movies-card__time">{`${Math.floor(card.duration / 60)}ч ${
          card.duration - Math.floor(card.duration / 60) * 60
        }м`}</p>
      </div>
      {pathname === "/saved-movies" ? (
        <>
          <button
            className="movies-card__delete-button"
            onClick={onDelete}
          ></button>
        </>
      ) : (
        <>
          {saved ? (
            <button
              className="movies-card__saved-button"
              onClick={onCardClick}
            ></button>
          ) : (
            <button
              className={"movies-card__save-button"}
              onClick={onCardClick}
            >
              Сохранить
            </button>
          )}
        </>
      )}
    </li>
  );
}

export default MoviesCard;
