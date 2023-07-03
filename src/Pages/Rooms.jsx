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
          <div className="rating">
            <img alt="" src="/rating-cropped.png" />
          </div>
          <div className="back-btn">
            <Link to="/">
              <img alt="" src="/nav-back.png" />
            </Link>
          </div>
        </div>
        <div className="outer-rooms-container">
          <div className="room">
            <div className="rm-type">
              <div className="clm-1">
                <h6>Standard room</h6>
                <div className="pricing">
                  <h5>R00 000.00</h5>
                  <span>excl. VAT</span>
                </div>
              </div>
              <div className="clm-2">
                <p>Room Description</p>
              </div>
            </div>
            <div className="img-container">
              <img alt="" src="/standard.jpg" />
            </div>
          </div>
          <div className="room">
            <div className="rm-type">
              <div className="clm-1">
                <h6>Deluxe room</h6>
                <div className="pricing">
                  <h5>R00 000.00</h5>
                  <span>excl. VAT</span>
                </div>
              </div>
              <div className="clm-2">
                <p>Room Description</p>
              </div>
            </div>
            <div className="img-container">
              <img alt="" src="/deluxe.jpg" />
            </div>
          </div>
          <div className="room">
            <div className="rm-type">
              <div className="clm-1">
                <h6>Executive room</h6>
                <div className="pricing">
                  <h5>R00 000.00</h5>
                  <span>excl. VAT</span>
                </div>
              </div>
              <div className="clm-2">
                <p>Room Description</p>
              </div>
            </div>
            <div className="img-container">
              <img alt="" src="/executive.jpg" />
            </div>
          </div>
          <div className="room">
            <div className="rm-type">
              <div className="clm-1">
                <h6>Presidential room</h6>
                <div className="pricing">
                  <h5>R00 000.00</h5>
                  <span>excl. VAT</span>
                </div>
              </div>
              <div className="clm-2">
                <p>Room Description</p>
              </div>
            </div>
            <div className="img-container">
              <img alt="" src="/presidential.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
