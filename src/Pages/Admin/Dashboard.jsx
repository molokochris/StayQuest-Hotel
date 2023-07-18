import { BiBed } from "@react-icons/all-files/bi/BiBed";
import { BiBriefcase } from "@react-icons/all-files/bi/BiBriefcase";
import { BiCalendar } from "@react-icons/all-files/bi/BiCalendar";
import { BiHome } from "@react-icons/all-files/bi/BiHome";
import { BiMessage } from "@react-icons/all-files/bi/BiMessage";
import { BiPowerOff } from "@react-icons/all-files/bi/BiPowerOff";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Messages from "./Components/Messages.jsx";
import Bookings from "./Components/Bookings";
import Guests from "./Components/Guests";
import AdminRooms from "./Components/AdminRooms";
import Home from "./Components/Home";

export default function Dashboard() {
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
              <Link to="/admin/Dashboard">
                <BiHome />
                <span>Home</span>
              </Link>
            </li>
            <li className="opt">
              <Link to="adminrooms">
                <BiBed />
                <span>Rooms</span>
              </Link>
            </li>
            <li className="opt">
              <Link to="Guests">
                <BiBriefcase />
                <span>Guest</span>
              </Link>
            </li>
            <li className="opt">
              <Link to="Bookings">
                <BiCalendar />
                <span>Bookings</span>
              </Link>
            </li>
            <li className="opt">
              <Link to="Messages">
                <BiMessage />
                <span>Message</span>
              </Link>
            </li>
          </ul>
          <div className="logout-btn">
            <BiPowerOff />
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
        <div className="main-menu">
          <Routes>
            <Route index path="/*" element={<Home />} />
            <Route path="adminrooms" element={<AdminRooms />} />
            <Route path="Bookings" element={<Bookings />} />
            <Route path="Guests" element={<Guests />} />
            <Route path="Messages" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
