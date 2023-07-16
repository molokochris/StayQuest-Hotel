import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rooms from "./Pages/Rooms";
import OasisGrill from "./Pages/OasisGrill";
import HotelOasis from "./Pages/HotelOasis";
import View from "./Components/View";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Admin from "./Pages/Admin/Admin";
import Dashboard from "./Pages/Admin/Dashboard";
import Bookings from "./Pages/Admin/Components/Bookings";
import Guests from "./Pages/Admin/Components/Guests";
import Messages from "./Pages/Admin/Components/Messages";
import AdminRooms from "./Pages/Admin/Components/AdminRooms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rooms/*" element={<Rooms />} />
          <Route path="/rooms/standard-room" element={<View />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/oasisgrill" element={<OasisGrill />} />
          <Route path="/hoteloasis" element={<HotelOasis />} />
          <Route path="/admin" element={<Admin />} />
          <Route exact path="admin/Dashboard/*">
            <Route index element={<Dashboard />} />
            <Route path="adminrooms" element={<AdminRooms />} />
            <Route path="Bookings" element={<Bookings />} />
            <Route path="Guests" element={<Guests />} />
            <Route path="Messages" element={<Messages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
