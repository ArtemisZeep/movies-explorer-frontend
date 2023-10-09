import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="search-form__input-container">
        <input className="search-form__input" placeholder="Фильм"></input>
        <button className="search-form__button_type_search"></button>
      </div>
      <div className="search-form__filter">
        <label className="search-form__switch">
          <input type="checkbox" className="search-form__checkbox"></input>
          <span className="search-form__slider search-form__round"></span>
        </label>

        <p className="search-form__input__filter">Короткометражки</p>
      </div>
      <div className="search-form__line"></div>
    </div>
  );
};

export default SearchForm;
