import React from "react";
import "../assets/stylesheets/facilities.css";
import image from "../assets/images/rating-cropped.png";

export default function Facilities() {
  return (
    <div className="facilities">
      <div className="header">
        <div className="header-container">
          <div className="header-logo">StayQuest</div>
          <div className="header-sub">Embark on a World-Class Adventure</div>
          <div className="header-rating">
            <img className="r-stars" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="fac-content">
        <div className="rooms-container">
          <div className="fac-buttons">CHECK<br />ROOMS</div>
        </div>
        <div className="dining-container">
          <div className="fac-buttons">Oasis Grill &<br />Bar</div>
        </div>
        <div className="hotel-oasis-container">
            <div className="fac-buttons">HOTEL<br />OASIS</div>
        </div>
      </div>
    </div>
  );
}
