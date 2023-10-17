import React from "react";
import {useState} from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleLogin(email, password);
  };

  const navigate = useNavigate();
  return (
    <main>
      <form className="login" onSubmit={handleSubmit}>
        <div className="login__logo" onClick={() => navigate("/")}></div>
        <h2 className="login__title">Рады видеть!</h2>
        <div className="login__input-container">
          <p className="login__input-name">E-mail</p>
          <input className="login__input" type="text" required placeholder="E-mail"  value={email} onChange={handleEmailInput}></input>
          <span className="login__input-error">Что-то пошло не так...</span>
        </div>
        <div className="login__input-container">
          <p className="login__input-name">Пароль</p>
          <input className="login__input" type="password" required placeholder="Пароль" value={password} autoComplete="on" onChange={handlePasswordInput}></input>
          <span className="login__input-error">Что-то пошло не так...</span>
        </div>
        <button className="login__button" type="submit">Войти</button>
        <div className="login__already-container">
          <p className="login__already-text">Ещё не зарегистрированы?</p>
          <a className="login__already-link" href="/signup">
            Регистрация
          </a>
        </div>
      </form>
    </main>
  );
}

export default Login;
