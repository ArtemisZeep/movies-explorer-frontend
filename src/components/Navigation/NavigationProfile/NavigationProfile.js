import React from "react";
import "./NavigationProfile.css";
import { NavLink } from "react-router-dom";

const NavigationProfile = () => {
  return (
    <div className="profile__link-item">
      <NavLink
        className={({ isActive }) =>
          `profile__link profile__link_type_profile ${
            isActive && "profile__link_type_active"
          }`
        }
        to="/profile"
      >
        Аккаунт
      </NavLink>
    </div>
  );
};

export default NavigationProfile;
