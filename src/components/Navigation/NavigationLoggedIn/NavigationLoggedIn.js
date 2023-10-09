import React from "react";
import "./NavigationLoggedIn.css";
import { NavLink } from "react-router-dom";

const NavigationLoggedIn = () => {
  return (
    <nav className="logged-in">
      <ul className="logged-in__list">
        <li className="logged-in__link-item">
          <NavLink
            className={({ isActive }) =>
              `logged-in__link logged-in__link_type_home logged-in__link_type_default ${
                isActive && "logged-in__link_type_active"
              }`
            }
            to="/"
          >
            Главная
          </NavLink>
        </li>

        <li className="logged-in__link-item">
          <NavLink
            className={({ isActive }) =>
              `logged-in__link logged-in__link_type_default ${
                isActive && "logged-in__link_type_active"
              }`
            }
            to="/movies"
          >
            Фильмы
          </NavLink>
        </li>

        <li className="logged-in__link-item">
          <NavLink
            className={({ isActive }) =>
              `logged-in__link logged-in__link_type_default ${
                isActive && "logged-in__link_type_active"
              }`
            }
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLoggedIn;
