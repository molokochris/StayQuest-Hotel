import React from "react";
import "../../assets/stylesheets/admin.css";
import { FaHome } from "@react-icons/all-files/fa/FaHome";

export default function Dash() {
  return (
    <div className="dash-container">
      <nav>
        <div className="admin-logo">
          <span className="logo-text">StayQuest</span>
          <span className="sub-text">Embark on a world class adventure</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="profile">
          <span className="admin-name">Moloko Chris Poopedi</span>
          <div className="admin-image">
            <img alt="" src="" />
          </div>
        </div>
      </nav>
      <div className="main">
        <div className="side-menu">
          <ul className="menu-list">
            <li className="opt">
              <FaHome />
              Home
            </li>
            <li className="opt">Rooms</li>
            <li className="opt">Guest</li>
            <li className="opt">Booking</li>
            <li className="opt">Message</li>
          </ul>
          <div className="logout-btn">
            <span>LOGOUT</span>
          </div>
          <div className="admin-foot">
            <span
              style={{
                color: "rgb(60, 90, 30)",
                fontWeight: "bold",
                fontSize: "small",
              }}
            >
              StayQuest Hotel Admin
            </span>
            <span style={{ color: "gray", fontSize: "smaller" }}>
              &copy;2023 ZA Limpopo, Polokwane
            </span>
          </div>
        </div>
        <div className="main-menu">2</div>
      </div>
    </div>
  );
}
