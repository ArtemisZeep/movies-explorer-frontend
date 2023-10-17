import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect, useState, useCallback } from "react";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import {
  registerUser,
  loginUser,
  getToken,
  signout,
  getUserData,
  sendUserData,
  getCards,
  postCard,
  deleteCard
} from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState();
  const [emailName, setEmailName] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [currentLink, setCurrentlink] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  

  const tokenCheck = useCallback(() => {
    const authorized = localStorage.getItem("authorized");
    if (authorized) {
      getToken()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setEmailName(res.email);
            setCurrentlink(window.location.pathname)
            
            if (currentLink !== "/signin") {
              navigate(currentLink);
            } else {
              navigate("/movies");
            }
          }
        })
        .catch((err) => {
          console.log(`Возникла ошибка, ${err}`);
        });
    }
  }, [navigate]);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getUserData()
      .then((profileInfo) => {
        setCurrentUser(profileInfo);
      })
      .catch((err) => {
        console.log(`Возникла глобальная ошибка, ${err}`);
      });

      getCards()
      .then((moviesSavedList) => {
        setSavedMovies(moviesSavedList.reverse());
      })
      .catch((err) => {
        console.log(`Возникла глобальная ошибка, ${err}`);
      });




    }
  }, [loggedIn]);

  const handleRegister = (email, password, name) => {
    return registerUser(email, password, name)
      .then(() => {
        navigate("/signin");
      })
      .catch(() => {});
  };

  const handleLogin = (email, password) => {
    if (!email || !password) {
      return;
    }
    loginUser(email, password)
      .then((res) => {
        localStorage.setItem("authorized", "true");
        setLoggedIn(true);
        setEmailName(email);
        navigate("/movies");
      })
      .catch(() => {})
      .finally(() => {
        setTimeout(() => {}, 1500);
      });
  };
  function signOut() {
    signout()
      .then(() => {
        localStorage.removeItem("authorized");
        setLoggedIn(false);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(`Возникла ошибка, ${err}`);
      });
  }

  function handleUpdateUser(data) {
    sendUserData(data)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Возникла ошибка, ${err}`);
      });
  }

  function handleCardLike(card) {
    postCard(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(`Возникла ошибка, ${err}`);
      });
  }

  function handleCardDelete(card) {
    deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== card._id));
      })
      .catch((err) => {
        console.log(`Возникла ошибка, ${err}`);
      });
  }




  return (
    <CurrentUserContext.Provider value={currentUser}>
       <div className="page">
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              component={Movies}
              loggedIn={loggedIn}
              isLogged={loggedIn}
              savedMovies={savedMovies}
              onCardDelete={handleCardDelete}
              handleLikeClick={handleCardLike}
            ></ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              component={SavedMovies}
              loggedIn={loggedIn}
              isLogged={loggedIn}
              savedMovies={savedMovies}
              onCardDelete={handleCardDelete}
            ></ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <Register handleRegister={handleRegister} loggedIn={loggedIn} />
          }
        />
        <Route
          path="/signin"
          element={<Login handleLogin={handleLogin} loggedIn={loggedIn} />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              component={Profile}
              isLogged={loggedIn}
              signOut={signOut}
              loggedIn={loggedIn}
              handleUpdateUser={handleUpdateUser}
            ></ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
