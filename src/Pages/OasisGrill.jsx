import React from "react";
import image from "../assets/images/rating-cropped.png";
import "../assets/stylesheets/oasisgrill.css";
import { Link } from "react-router-dom";

export default function OasisGrill() {
  return (
    <div className="oasisgrill-container">
      <div className="header">
        <div className="header-container">
          <div className="header-logo">Oasis Grill & Bar</div>
          <div className="header-sub">Indulge in Culinary Oasis</div>
        </div>
      </div>
      <div className="content">
        <div className="o-block" style={{ borderRadius: "10px 0 0 10px" }}>
          <span className="inner-text">
            Step into a world of culinary delight at Oasis Grill & Bar, where
            every dish is a masterpiece and every sip is pure bliss.<br />Our
            talented chefs take pride in sourcing the finest ingredients,
            locally and globally, to create a menu that caters to diverse
            palates.<br /><br />From succulent grilled meats and fresh seafood delicacies
            to vibrant vegetarian options, each plate is a work of art that
            combines flavors, textures, and presentation in perfect harmony.<br />
            Whether you're enjoying a romantic dinner under the stars or
            gathering with friends for a casual meal, our friendly and attentive
            staff will guide you through a gastronomic experience like no other.
          </span>
        </div>
        <div className="a-block">
          <div className="back-btn">
            <Link to="/">
              <img alt="" src="/nav-back.png" />
            </Link>
          </div>
        </div>
        <div className="o-block" style={{ borderRadius: "0 10px 10px 0" }}>
          <span className="inner-text">
            At Oasis Grill & Bar, we believe that a memorable dining experience
            is about more than just great food. It's about creating an ambiance
            that transports you to a tranquil oasis, where worries melt away and
            relaxation takes center stage.<br /><br />Immerse yourself in the soothing
            sounds of nature, breathe in the salty ocean air, and let the warm
            glow of our cozy yet sophisticated decor envelop you. With stunning
            panoramic views of the island's pristine beaches and sparkling
            waters, our restaurant provides a picturesque backdrop for cherished
            moments.<br />Whether you're savoring a romantic candlelit dinner,
            celebrating a special occasion, or simply unwinding after a day of
            island exploration, Oasis Grill & Bar offers an enchanting setting
            that enhances the flavors and elevates the entire dining experience.
          </span>
        </div>
      </div>
    </div>
  );
}
