import React from "react";
import "../style/Story.css";
import story1 from "../images/story1.jpeg";
import story2 from "../images/story2.jpg";
import story3 from "../images/story3.jpg";
import story4 from "../images/story4.jpg";
import story5 from "../images/story4.jpeg";
import story6 from "../images/story5.jpeg";
import profilepic from "../images/profile.jpeg";
import { BsFillPatchPlusFill } from "react-icons/bs";
import post from "../images/post.jpg";
import { BsCameraVideoFill, BsFillEmojiSmileFill } from "react-icons/bs";

export default function Story() {
  return (
    <div className="container2">
      <div className="StoryContainer">
        <div className="story1">
          <img src={story1} alt="story1" className="yourStory" />
          <div className="createStory">
            <p>Create Story</p>
            <BsFillPatchPlusFill className="story-icon"></BsFillPatchPlusFill>
          </div>
        </div>
        <div className="story2">
          <img src={story2} alt="story2" className="story" />
          <p className="name"> Gurmeet</p>
          <div className="stories">
            <img src={story2} alt="story2" className="yourProfile" />
          </div>
        </div>
        <div className="story3">
          <img src={story3} alt="story3" className="story" />
          <p className="name"> Gurmeet</p>
          <div className="stories">
            <img src={story2} alt="story2" className="yourProfile" />
          </div>
        </div>
        <div className="story4">
          <img src={story2} alt="story4" className="story" />
          <p className="name"> Gurmeet</p>
          <div className="stories">
            <img src={story2} alt="story2" className="yourProfile" />
          </div>
        </div>

        <div className="story5">
          <img src={story5} alt="story5" className="story" />
          <p className="name"> Gurmeet</p>
          <div className="stories">
            <img src={story2} alt="story2" className="yourProfile" />
          </div>
        </div>
        {/* <div className="story6">
        <img src={story6} alt="story6" className="story" />
      </div> */}
      </div>
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
