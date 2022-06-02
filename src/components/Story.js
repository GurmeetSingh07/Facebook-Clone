import React from "react";
import "../style/Story.css";

export default function Story({ props }) {
  return (
    <div className="container2">
      <div className="StoryContainer">
        <img src={props.src} alt="story2" className="story" />
        <p className="name"> {props.text}</p>
        <div className="stories">
          <img src={props.profile_pic} alt="story2" className="yourProfile" />
        </div>
      </div>
    </div>
  );
}
