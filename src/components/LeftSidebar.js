import React from "react";
import profile from "../images/profile.jpeg";
import "../style/leftsidebar.css";

import { FaUserFriends, FaHome, FaYoutubeSquare } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

import { IoMdStopwatch } from "react-icons/io";
export default function LeftSidebar() {
  return (
    <div className="container1">
      <div className="main2">
        <div className="leftbar photo1">
          <img src={profile} alt="profilePic" className="profilePic" />
          <p>Gurmeet Singh</p>
        </div>
        <div className="leftbar photo2">
          <FaUserFriends className="friends-icon"></FaUserFriends>
          <p>Friends</p>
        </div>
        <div className="leftbar photo3">
          <MdGroups className="friends-icon"></MdGroups>
          <p>Groups</p>
        </div>
        <div className="leftbar photo4">
          <FaHome className="friends-icon"></FaHome>
          <p>MarketPlace</p>
        </div>
        <div className="leftbar photo5">
          <FaYoutubeSquare className="friends-icon"></FaYoutubeSquare>
          <p>Watch Videos</p>
        </div>
        <div className="leftbar photo6">
          <IoMdStopwatch className="friends-icon"></IoMdStopwatch>
          <p>Meriores</p>
        </div>
      </div>
    </div>
  );
}
