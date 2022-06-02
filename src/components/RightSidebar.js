import React from "react";
import "../style/rightsidebar.css";
import Sponsored from "../images/s.jpg";
import codedrill from "../images/codedrill.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { FaBullhorn, FaSearch } from "react-icons/fa";

export default function RightSidebar() {
  return (
    <div className="container3">
      <div className="yourSponsored">
        <p>Sponsored</p>
      </div>
      <div className="sponsoredImage">
        <img src={Sponsored} alt="Sponsored" className="Sponsored1" />
        <div className="sponsoredText">
          <p>Anime that All Love</p>
          <p className="text2">Cartton Network</p>
        </div>
      </div>
      <div className="sponsoredImage">
        <img src={Sponsored} alt="Sponsored" className="Sponsored1" />
        <div className="sponsoredText">
          <p className="text1">Anime that All Love</p>
          <p className="text2">Cartton Network</p>
        </div>
      </div>
      <hr className="line"></hr>
      <div className="pageInfo">
        <p className="pagetext">Your Page</p>
        <div className="companyLogo">
          <img src={codedrill} alt="codedrill" className="codedrill" />
          <p className="companyName">CodeDrill Info Tech</p>
        </div>
      </div>
      <div className="demo">
        <FontAwesomeIcon icon={faBell} className="bellicon" />
        <p className="belltext">3 Notifiaction</p>
      </div>
      <div className="demo">
        <FaBullhorn icon={faBell} className="bellicon" />
        <p className="belltext">Create Promotion</p>
      </div>
      <hr className="line"></hr>

      <div className="contacts">
        <p>Contacts</p>
        <div className="contact-icon">
          <BsCameraVideoFill className="live-icon"></BsCameraVideoFill>
          <FaSearch className="live-icon"></FaSearch>
          <BsThreeDots className="live-icon"></BsThreeDots>
        </div>
      </div>
    </div>
  );
}
