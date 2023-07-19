import { BiBed } from "@react-icons/all-files/bi/BiBed";
import { BiBriefcase } from "@react-icons/all-files/bi/BiBriefcase";
import { BiCalendar } from "@react-icons/all-files/bi/BiCalendar";
import { BiHome } from "@react-icons/all-files/bi/BiHome";
import { BiMessage } from "@react-icons/all-files/bi/BiMessage";
import { BiPowerOff } from "@react-icons/all-files/bi/BiPowerOff";
import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Messages from "./Components/Messages.jsx";
import Bookings from "./Components/Bookings";
import Guests from "./Components/Guests";
import AdminRooms from "./Components/AdminRooms";
import Home from "./Components/Home";

export default function Dashboard() {
  const path = useLocation().pathname;
  console.log(path);

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
            <li
              className="opt"
              style={
                (path === "/admin/Dashboard/")
                  ? { backgroundColor: "green" }
                  : null
              }
            >
              <Link
                style={(path === "/admin/Dashboard/") ? { color: "white" } : null}
                to="/admin/Dashboard/"
              >
                <BiHome />
                <span>Home</span>
              </Link>
            </li>
            <li
              className="opt"
              style={
                path === "/admin/Dashboard/adminrooms"
                  ? { backgroundColor: "green" }
                  : null
              }
            >
              <Link
                style={
                  path === "/admin/Dashboard/adminrooms"
                    ? { color: "white" }
                    : null
                }
                to="adminrooms"
              >
                <BiBed />
                <span>Rooms</span>
              </Link>
            </li>
            <li
              className="opt"
              style={
                path === "/admin/Dashboard/Guests"
                  ? { backgroundColor: "green" }
                  : null
              }
            >
              <Link
                style={
                  path === "/admin/Dashboard/Guests" ? { color: "white" } : null
                }
                to="Guests"
              >
                <BiBriefcase />
                <span>Guest</span>
              </Link>
            </li>
            <li
              className="opt"
              style={
                path === "/admin/Dashboard/Bookings"
                  ? { backgroundColor: "green" }
                  : null
              }
            >
              <Link
                style={
                  path === "/admin/Dashboard/Bookings"
                    ? { color: "white" }
                    : null
                }
                to="Bookings"
              >
                <BiCalendar />
                <span>Bookings</span>
              </Link>
            </li>
            <li
              className="opt"
              style={
                path === "/admin/Dashboard/Messages"
                  ? { backgroundColor: "green" }
                  : null
              }
            >
              <Link
                style={
                  path === "/admin/Dashboard/Messages"
                    ? { color: "white" }
                    : null
                }
                to="Messages"
              >
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
