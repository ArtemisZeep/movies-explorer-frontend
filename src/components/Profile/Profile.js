import React from "react";
import { useState, useContext } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurentUserContext";

const Profile = ({ isLogged, signOut, loggedIn, handleUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const nameElement = document.getElementById("name");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailError, setEmailError] = useState("start");
  const [nameError, setNameError] = useState("start");
  const [disabledButton, setDisabledButton] = useState(true);

  const [isClicked, setIsClicked] = useState(false);
  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  const blurHandler = (event) => {
    console.log(event.target.value)
    switch (event.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  function handleEmailInput(evt) {
    blurHandler(evt);
    setEmail(evt.target.value);
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
      if(evt.target.value == currentUser.email){
      setEmailError("Email не изменен");}
      else {
      if (evt.target.value.length == 0) {
      setEmailError("Email не может быть пустым");
    } else {
      if (!reg.test(String(evt.target.value).toLowerCase())) {
        setEmailError("Некорректынй email");
      } else {
        setEmailError("");
      }
    }
  }}
  function handleNameInput(evt) {
    blurHandler(evt);
    setName(evt.target.value);
    if(evt.target.value == currentUser.name){
      setNameError("Name не изменен");}
      else {
    if (evt.target.value.length == 0) {
      setNameError("Имя не может быть пустым");
    } else {
      if (evt.target.value.length < 2) {
        setNameError("Имя не может быть меньше 2 символов");
      } else {
        if (evt.target.value.length > 29) {
          setNameError("Имя не может быть больше 30 символов");
        } else {
          setNameError("");
        }
      }
    }
  }}

  function handleDisableButton() {
    if (nameError == "" || emailError == "") {
      console.log(nameError);
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }

  React.useEffect(() => {
    handleDisableButton();
  }, [emailError]);

  React.useEffect(() => {
    handleDisableButton();
  }, [nameError]);

  const handleSubmit = (evt) => {
    const data = {
      email: email,
      name: name,
    };
    nameElement.value = data.name;
    evt.preventDefault();
    handleUpdateUser(data);
    handleClose();
    setDisabledButton(true);
  };

  React.useEffect(() => {
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [currentUser]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <form className="profile" onSubmit={handleSubmit}>
          <h2 className="profile__name">Привет, {currentUser.name}!</h2>
          <div className="profile__info-container">
            <h3 className="profile__info-name">Имя</h3>
            <input
              className="profile__info-value"
              type="text"
              id="name"
              name="name"
              placeholder={currentUser.name}
              value={name}
              required
              onChange={handleNameInput}
            ></input>

          </div>
          {nameDirty && nameError && (
              <span className="profile__input-error">{nameError}</span>
            )}
          <div className="profile__line"></div>
          <div className="profile__info-container">
            <h3 className="profile__info-name">E-mail</h3>
            <input
              className="profile__info-value"
              type="text"
              id="email"
              name="email"
              placeholder={currentUser.email}
              value={email}
              required
              onChange={handleEmailInput}
            ></input>
           
          </div>
          {emailDirty && emailError && (
              <span className="profile__input-error">{emailError}</span>
            )}
          {disabledButton == true ? (
            <button
              className="profile__edit profile__edit-disable"
              type="button"
            >
              Редактировать
            </button>
          ) : (
            <button className="profile__edit" type="button" onClick={handleOpen}>Редактировать</button>
          )}

          <button className="profile__signout" onClick={signOut}>
            Выйти из аккаунта
          </button>
          {isClicked ? (
          <div className="profile__popup">
            <div className="profile__popup-container">
              <p className="profile__popup-text">
                Вы уверены, что хотите изменить данные профиля ?
              </p>
              <button className="profile__popup-save" type="submit">
                Изменить
              </button>
              <button
                className="profile__popup-close"
                type="button"
                onClick={handleClose}
              ></button>
            </div>
          </div>
        ) : (
          ""
        )}
        </form>
        
      </main>
    </>
  );
};

export default Profile;
