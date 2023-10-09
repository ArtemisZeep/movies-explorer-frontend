import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="login">
        <div className="login__logo" onClick={() => navigate("/")}></div>
        <h2 className="login__title">Рады видеть!</h2>
        <div className="login__input-container">
          <p className="login__input-name">E-mail</p>
          <input className="login__input" type="text"></input>
          <span className="login__input-error">Что-то пошло не так...</span>
        </div>
        <div className="login__input-container">
          <p className="login__input-name">Пароль</p>
          <input className="login__input" type="password"></input>
          <span className="login__input-error">Что-то пошло не так...</span>
        </div>
        <button className="login__button">Войти</button>
        <div className="login__already-container">
          <p className="login__already-text">Ещё не зарегистрированы?</p>
          <a className="login__already-link" href="/signup">
            Регистрация
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
