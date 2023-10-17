import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";

function MoviesCardList({
  cards,
  savedMovies,
  isLoading,
  isSavedFilms,
  isReqErr,
  isNotFound,
  handleLikeClick,
  onCardDelete,
}) {
  const [shownMovies, setShownMovies] = useState(0);
  const { pathname } = useLocation();

  function shownCount() {
    const display = window.innerWidth;
    if (display > 1136) {
      setShownMovies(12);
    } else if (display < 1137) {
      setShownMovies(8);
    } else if (display < 728) {
      setShownMovies(6);
    }
  }

  useEffect(() => {
    shownCount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", shownCount);
    }, 500);
  });

  function showMore() {
    const display = window.innerWidth;
    if (display > 1136) {
      setShownMovies(shownMovies + 3);
    } else if (display < 1137) {
      setShownMovies(shownMovies + 2);
    } else if (display < 728) {
      setShownMovies(shownMovies + 2);
    }
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  return (
    <section className="movies-card-list">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchError errorText={"Ничего не найдено"} />
      )}
      {isReqErr && !isLoading && (
        <SearchError
          errorText={
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          }
        />
      )}
      {!isLoading && !isReqErr && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="movies-card-list__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    card={card}
                    saved={getSavedMovieCard(savedMovies, card)}
                    isSavedFilms={isSavedFilms}
                    handleLikeClick={handleLikeClick}
                    onCardDelete={onCardDelete}
                    savedMovies={savedMovies}
                    pathname={"/saved-movies"}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="movies-card-list__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    card={card}
                    saved={getSavedMovieCard(savedMovies, card)}
                    isSavedFilms={isSavedFilms}
                    handleLikeClick={handleLikeClick}
                    onCardDelete={onCardDelete}
                    savedMovies={savedMovies}
                    pathname={"/movies"}
                  />
                ))}
              </ul>
            </>
          )}

          {cards.length > shownMovies ? (
            <button
              className="movies-card-list__button"
              id="list-button"
              onClick={showMore}
            >
              Ещё
            </button>
          ) : (
            ""
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
