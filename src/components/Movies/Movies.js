import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import films from "../../data/filmsData";

const Movies = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList cards={films} saved={false} isLoading={isLoading} />
      <Footer />
    </>
  );
};

export default Movies;
