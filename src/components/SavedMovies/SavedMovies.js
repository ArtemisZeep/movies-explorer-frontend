import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import films from "../../data/filmsData";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList cards={films} isSavedFilms={true} />
      <Footer />
    </>
  );
};

export default SavedMovies;
