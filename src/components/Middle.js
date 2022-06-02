import React from "react";
import "../style/middle.css";
import profilepic from "../images/profile.jpeg";

import post from "../images/post.jpg";
import { BsCameraVideoFill, BsFillEmojiSmileFill } from "react-icons/bs";
export default function Middle() {
  return (
    <div className="maindiv">
      <div className="statusBar">
        <div className="message">
          <img src={profilepic} alt="profilePicture" className="profilepics" />
          <input
            type="text"
            placeholder="What's on your mind Gurmeet ?"
            className="statusInput"
          />
        </div>
        <div className="statusUpload">
          <div className="choosemode">
            <BsCameraVideoFill className="live-icon"></BsCameraVideoFill>
            <p>Live Video</p>
          </div>
          <div className="choosemode">
            <BsFillEmojiSmileFill className="photo-icon"></BsFillEmojiSmileFill>
            <p>Photo/Video</p>
          </div>
          <div className="choosemode">
            <BsFillEmojiSmileFill className="mode-icon"></BsFillEmojiSmileFill>
            <p>feeling/Activity</p>
          </div>
        </div>
      </div>
      <div className="createRoom">
        <div className="rooms">
          <BsCameraVideoFill className="room-icon"></BsCameraVideoFill>
          <p>Create Room</p>
        </div>
        <img src={profilepic} alt="profilePicture" className="profilepics" />
        <img src={profilepic} alt="profilePicture" className="profilepics" />
        <img src={profilepic} alt="profilePicture" className="profilepics" />
        <img src={profilepic} alt="profilePicture" className="profilepics" />
        <img src={profilepic} alt="profilePicture" className="profilepics" />
        <img src={profilepic} alt="profilePicture" className="profilepics" />
        <img src={profilepic} alt="profilePicture" className="profilepics" />
        <img src={profilepic} alt="profilePicture" className="profilepics" />
      </div>

      <div className="content">
        <div className="postDetails">
          <img src={profilepic} alt="profilePicture" className="profilepics" />
          <p>Voice Of India</p>
        </div>

        <div className="yourpost">
          <img src={post} alt="post" className="uploadPost" />
        </div>
      </div>
    </div>
  );
}
