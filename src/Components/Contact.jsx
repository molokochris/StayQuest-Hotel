import React from "react";
import "../assets/stylesheets/contact.css";
import "../assets/stylesheets/facilities.css";
import image from "../assets/images/rating-cropped.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="header">
        <div className="header-container">
          <div className="header-logo">StayQuest</div>
          <div className="header-sub">Embark on a World-Class Adventure</div>
          <div className="header-rating">
            <img className="r-stars" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="image-container">
          CONTACT US
        </div>
        <div className="form-container">
          <div className="form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Surname" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Contact Numbers" />
            <textarea type="text" placeholder="Message" className="textfield" />
          </div>
          <button className="send-button">SEND</button>
        </div>
      </div>
    </div>
  );
}
