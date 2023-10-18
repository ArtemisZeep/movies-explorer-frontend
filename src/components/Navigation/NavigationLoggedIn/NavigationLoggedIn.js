import React from "react";
import "./NavigationLoggedIn.css";
import { NavLink, useLocation } from "react-router-dom";

const NavigationLoggedIn = () => {
  const { pathname } = useLocation();
  console.log(pathname);

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
          {pathname === "/" ? (
            <div className="logged-in__active-line"></div>
          ) : (
            ""
          )}
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
          {pathname === "/movies" ? (
            <div className="logged-in__active-line"></div>
          ) : (
            ""
          )}
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
          {pathname === "/saved-movies" ? (
            <div className="logged-in__active-line"></div>
          ) : (
            ""
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLoggedIn;
