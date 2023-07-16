import React from "react";
import { Route, Routes } from "react-router-dom";
import Rooms from "./Components/AdminRooms";
import Bookings from "./Components/Bookings";
import Guests from "./Components/Guests";
import Messages from "./Components/Messages";
import Home from "./Components/Home";
import Dashboard from "./Dashboard";
import AdminRooms from "./Components/AdminRooms";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="admin/Dashboard/*">
          <Route index element={<Dashboard />} />
          <Route path="adminrooms" element={<AdminRooms />} />
          <Route path="Bookings" element={<Bookings />} />
          <Route path="Guests" element={<Guests />} />
          <Route path="Messages" element={<Messages />} />
        </Route>
      </Routes>
    </>
  );
}
