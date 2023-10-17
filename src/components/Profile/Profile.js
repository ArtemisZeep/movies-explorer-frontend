import React from "react";
import {useState, useContext} from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurentUserContext";


const Profile = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const nameElement = document.getElementById("name")

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handleNameInput(event) {
    setName(event.target.value);
  }

  const handleSubmit = (evt) => {
    const data = {
      email: email,
      name: name
    }
    nameElement.value = data.name
    evt.preventDefault();
    props.handleUpdateUser(data);
  };

  React.useEffect(() => {
      setEmail(currentUser.email);
      setName(currentUser.name);

  }, [currentUser]);


  return (
    <>
      <Header loggedIn={props.loggedIn}  />
      <main>
      <form className="profile" onSubmit={handleSubmit}>
        <h2 className="profile__name">Привет, {currentUser.name}!</h2>
        <div className="profile__info-container">
          <h3 className="profile__info-name">Имя</h3>
          <input
            className="profile__info-value"
            type="text"
            id="name"
            placeholder={currentUser.name}
            value={name} 
            required
            onChange={handleNameInput}
          ></input>
        </div>
        <div className="profile__line"></div>
        <div className="profile__info-container">
          <h3 className="profile__info-name">E-mail</h3>
          <input
            className="profile__info-value"
            type="text"
            id="email"
            placeholder={currentUser.email}
            value={email} 
            required
            onChange={handleEmailInput}
          ></input>
        </div>
        <button className="profile__edit" type="submit" >Редактировать</button>
        <button className="profile__signout" onClick={props.signOut}>Выйти из аккаунта</button>
      </form>
    </main>
    </>
  );
};

export default Profile;
