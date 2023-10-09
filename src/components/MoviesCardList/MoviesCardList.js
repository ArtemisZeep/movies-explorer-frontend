import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ cards, saved, isLoading }) {
  const [shownMovies, setShownMovies] = useState(0);

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
      setShownMovies(shownMovies + 1);
    }
  }

  return (
    <section className="movies-card-list">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ul className="movies-card-list__list">
            {cards.slice(0, shownMovies).map((card) => (
              <MoviesCard key={card._id} card={card} saved={card.saved} />
            ))}
          </ul>

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
