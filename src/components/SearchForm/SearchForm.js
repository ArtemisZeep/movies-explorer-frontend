import React from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = ({ onSearchMovies, onFilter, isShortMovies, setSearchClick }) => {
  const [isQueryError, setIsQueryError] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const location = useLocation();

  

  function handleChangeQuery(evt) {
    setQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
      
    } else {
      setIsQueryError(false);
      onSearchMovies(query);
      setSearchClick(true)
    }
  }

  React.useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const localQuery = localStorage.getItem("movieSearch");
      setQuery(localQuery);
    }
  }, [location]);

  return (
    <form className="search-form" id="form" name="form" onSubmit={handleSubmit}>
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          placeholder="Фильм"
          name="query"
          id="search-input"
          type="text"
          onChange={handleChangeQuery}
          value={query || ""}
        ></input>
        <button 
        className="search-form__button_type_search"
        type="submit"
        ></button>
      </div>
      <div className="search-form__filter">
        <label className="search-form__switch">
          <input
            type="checkbox"
            name="checkboxName"
            className="search-form__checkbox"
            onChange={onFilter} 
            checked={isShortMovies}
          ></input>
          <span className="search-form__slider search-form__round"></span>
        </label>

        <p className="search-form__input__filter">Короткометражки</p>
      </div>
      <div className="search-form__line"></div>
    </form>
  );
};

export default SearchForm;