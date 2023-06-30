import React from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/rooms.css";
import "../assets/stylesheets/facilities.css";

export default function Rooms() {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="side-container">
          <div className="logo">StayQuest</div>
          <div className="features">
            <div className="feature-btn">2+ bed</div>
            <div className="feature-btn">4+ bed</div>
            <div className="feature-btn">Shwer</div>
            <div className="feature-btn">Bath</div>
          </div>
          <div className="">stars</div>
          <div className="back-btn">
            <Link to="/">B</Link>
          </div>
        </div>
        <div className="outer-rooms-container">
          <div className="room">Standard room</div>
          <div className="room">Deluxe room</div>
          <div className="room">Executive room</div>
          <div className="room">Presidential room</div>
        </div>
      </div>
    </div>
  );
}
