import React from "react";
import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordInput(evt) {
    setPassword(evt.target.value);
  }

  function handleNameInput(evt) {
    setName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleRegister(email, password, name);
  }

  return (
    <main>
      <form className="register" onSubmit={handleSubmit}>
        <div className="register__logo" onClick={() => navigate("/")}></div>
        <h2 className="register__title">Добро пожаловать!</h2>
        <div className="register__input-container">
          <p className="register__input-name">Имя</p>
          <input
            className="register__input"
            type="text"
            required
            placeholder="Имя"
            value={name}
            onChange={handleNameInput}
          ></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-name">E-mail</p>
          <input
            className="register__input"
            type="text"
            required
            placeholder="E-mail"
            value={email}
            onChange={handleEmailInput}
          ></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-name">Пароль</p>
          <input
            className="register__input"
            type="password"
            required
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordInput}
          ></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </div>
        <button className="register__button" type="submit">
          Зарегестрироваться
        </button>
        <div className="register__already-container">
          <p className="register__already-text">Уже зарегистрированы?</p>
          <a className="register__already-link" href="/signin">
            Войти
          </a>
        </div>
      </form>
    </main>
  );
}

export default Register;
