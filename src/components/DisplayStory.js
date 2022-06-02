import Story from "./Story.js";
import React, { useState, useEffect } from "react";
import story1 from "../images/story1.jpeg";
import story2 from "../images/story2.jpg";
import story3 from "../images/story3.jpg";
import story4 from "../images/story4.jpg";
import story5 from "../images/story4.jpeg";
import story6 from "../images/story5.jpeg";
import backButton from "../images/left-arrow.png";
import right from "../images/right.png";
import "../style/displayStory.css";
import Middle from "./Middle.js";
import { BsFillPatchPlusFill } from "react-icons/bs";
const images = [
  {
    src: story1,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story2,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story3,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story4,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story5,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story6,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story2,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story3,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story5,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story1,
    text: "Gurmeet",
    profile_pic: story2,
  },

  {
    src: story4,
    text: "Gurmeet",
    profile_pic: story2,
  },
];

export default function DisplayStory() {
  var [counter, setCounter] = useState(0);

  var i = counter;
  useEffect(() => {
    if (counter >= 1) {
      document.getElementById("leftarrow").style.display = "block";
    }

    if (counter === 1) {
      document.getElementById("rightarrow").style.display = "block";
    }

    if (counter === images.length - 5) {
      console.log("hiding right arrow");
      document.getElementById("rightarrow").style.display = "none";
    }

    if (counter == 0) {
      if (document.getElementById("leftarrow")) {
        document.getElementById("leftarrow").style.display = "none";
      }
    }
  });
  return (
    <>
      <div className="container4">
        <div className="container4topdiv">
          <div className="createStory2">
            <img
              src={story1}
              alt="story1"
              width="100%"
              height="65%"
              className="ownerStory"
            />
            <div className="text">Create story</div>
            {/* <BsFillPatchPlusFill className="plus"></BsFillPatchPlusFill> */}
          </div>
          {/* <Story props={images[1]} classname="ownerStory" /> */}

          <img
            src={backButton}
            alt="arrowleft"
            width="30px"
            className="arrows"
            id="leftarrow"
            onClick={() => setCounter(counter - 1)}
          />
          <Story props={images[i]} />
          <Story props={images[++i]} />
          <Story props={images[++i]} />
          <Story props={images[++i]} />
          <img
            src={right}
            alt="arrowright"
            width="30px"
            className="arrows"
            id="rightarrow"
            onClick={() => setCounter(counter + 1)}
          />
        </div>
        <div className="demo">
          <Middle />
        </div>
      </div>
    </>
  );
}
