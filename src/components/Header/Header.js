import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import NavigationLoggedIn from "../Navigation/NavigationLoggedIn/NavigationLoggedIn";
import NavigationNotLoggedIn from "../Navigation/NavigationNotLoggedIn/NavigationNotLoggedIn";
import NavigationProfile from "../Navigation/NavigationProfile/NavigationProfile";



const Header = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  function handleOpen() {
    setIsClicked(true);
  }
  const loggedIn = props.loggedIn

  function handleClose() {
    setIsClicked(false);
  }

  const [width, setWidth] = useState(0);

  function getWidth() {
    const display = window.innerWidth;
    setWidth(display);

  }
  useEffect(() => {
    getWidth();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", getWidth);
    }, 500);
  });

  const navigate = useNavigate();
  return (
    <>
      {!loggedIn ? (
        <header className="header">
          <div className="header__logo" onClick={() => navigate("/")}></div>
          {width < 769 ? (
            <div className="header__burger">
              <button
                className="header__burger-button"
                onClick={handleOpen}
              ></button>

              {isClicked ? (
                <div className="header__popup">
                  <div className="header__burger-container">
                    <button
                      className="header__burger-close"
                      onClick={handleClose}
                    ></button>
                    <NavigationNotLoggedIn />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <>
              <NavigationNotLoggedIn />
            </>
          )}
        </header>
      ) : (
        <header className="header">
          <div className="header__logo" onClick={() => navigate("/")}></div>
          {width < 769 ? (
            <div className="header__burger">
              <button
                className="header__burger-button"
                onClick={handleOpen}
              ></button>

              {isClicked ? (
                <div className="header__popup">
                  <div className="header__burger-container">
                    <button
                      className="header__burger-close"
                      onClick={handleClose}
                    ></button>
                    <NavigationLoggedIn />
                    <NavigationProfile />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <>
              <NavigationLoggedIn />
              <NavigationProfile />
            </>
          )}
        </header>
      )}
    </>
  );
};

export default Header;