import React from "react";
import Header from "../Header/Header";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <Header />
      <main>
      <section className="profile">
        <h2 className="profile__name">Привет, Виталий!</h2>
        <div className="profile__info-container">
          <h3 className="profile__info-name">Имя</h3>
          <input
            className="profile__info-value"
            type="text"
            placeholder="Имя"
            required
          ></input>
        </div>
        <div className="profile__line"></div>
        <div className="profile__info-container">
          <h3 className="profile__info-name">E-mail</h3>
          <input
            className="profile__info-value"
            type="text"
            placeholder="E-mail"
            required
          ></input>
        </div>
        <button className="profile__edit">Редактировать</button>
        <button className="profile__signout">Выйти из аккаунта</button>
      </section>
    </main>
    </>
  );
};

export default Profile;
