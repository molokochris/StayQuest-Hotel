import React from "react";
import "../assets/stylesheets/facilities.css";
import image from "../assets/images/rating-cropped.png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Rooms from "../Pages/Rooms";
import HotelOasis from "../Pages/HotelOasis";
import OasisGrill from "../Pages/OasisGrill";

export default function Facilities() {
  return (
    <div className="facilities" id="more">
      <BrowserRouter>
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
            <Link to='/rooms'>
              <div className="fac-buttons">
                CHECK
                <br />
                ROOMS
              </div>
            </Link>
          </div>
          <div className="dining-container">
            <Link to='/oasisgrill'>
              <div className="fac-buttons">
                Oasis Grill &<br />
                Bar
              </div>
            </Link>
          </div>
          <div className="hotel-oasis-container">
            <Link to='/hoteloasis'>
              <div className="fac-buttons">
                HOTEL
                <br />
                OASIS
              </div>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/oasisgrill" element={<OasisGrill />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/hoteloasis" element={<HotelOasis />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
