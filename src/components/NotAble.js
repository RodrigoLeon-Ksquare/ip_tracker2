import React from "react";
import "../styles/NotAble.css";
import sadFace from "../assets/sad-face.png";
function NotAble() {
  return (
    <div className="mainContainer">
      <div>
        <img src={sadFace} alt="sad face"></img>
      </div>
      <h1>Not Available at the moment</h1>
      <h2>At moment we aren´t available at your city</h2>
    </div>
  );
}

export default NotAble;
