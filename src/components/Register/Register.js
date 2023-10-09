import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="register">
        <div className="register__logo" onClick={() => navigate("/")}></div>
        <h2 className="register__title">Добро пожаловать!</h2>
        <div className="register__input-container">
          <p className="register__input-name">Имя</p>
          <input className="register__input" type="text" required placeholder="Имя"></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-name">E-mail</p>
          <input className="register__input" type="text" required placeholder="E-mail"></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-name">Пароль</p>
          <input className="register__input" type="password" required placeholder="Пароль"></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <button className="register__button">Зарегестрироваться</button>
        <div className="register__already-container">
          <p className="register__already-text">Уже зарегистрированы?</p>
          <a className="register__already-link" href="/signin">
            Войти
          </a>
        </div>
      </section>
    </main>
  );
}

export default Register;
