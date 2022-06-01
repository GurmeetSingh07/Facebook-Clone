import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faTv,
  faHouse,
  faUserGroup,
  faBell,
  faMessage,
  faCediSign,
} from "@fortawesome/free-solid-svg-icons";

import "../style/header.css";

import facebook from "../images/facebook.png";
import profile from "../images/profile.jpeg";

export default function logo() {
  return (
    <div className="container">
      <div className="search-bar">
        <img src={facebook} alt="facebook" className="fb" />
        <input
          type="text"
          className="searchInput"
          placeholder="Search Facebook"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </div>
      <div className="icons">
        <a href="/#">
          <FontAwesomeIcon icon={faHome} className="icon1" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={faTv} className="icon2" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={faHouse} className="icon3" />
          <span className="notify3">3</span>
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={faUserGroup} className="icon4" />
          <span className="notify4">3</span>
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={faHome} className="icon5" />
          <span className="notify5">9+</span>
        </a>
      </div>

      <div className="profile">
        <img src={profile} alt="profile" className="profileName"></img>
        <p className="username">Gurmeet</p>
        <a href="/#">
          <FontAwesomeIcon icon={faTv} className="leftIcons1 lefticon" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={faMessage} className="leftIcons2 lefticon" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={faBell} className="leftIcons3 lefticon" />
        </a>
        <a href="/#">
          <FontAwesomeIcon icon={faCediSign} className="leftIcons4 lefticon" />
        </a>
      </div>
    </div>
  );
}
