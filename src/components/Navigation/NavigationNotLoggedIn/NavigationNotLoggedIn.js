import React from "react";
import "./NavigationNotLoggedIn.css";
import { Link } from "react-router-dom";

const NavigationNotLoggedIn = () => {
  return (
    <nav className="not-logged-in">
      <ul className="not-logged-in__list">
        <li>
          <Link
            className="not-logged-in__link not-logged-in__link_type_register"
            to="/signup"
          >
            Регистрация
          </Link>
        </li>
        <li>
          <Link
            className="not-logged-in__link not-logged-in__link_type_login"
            to="/signup"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationNotLoggedIn;
