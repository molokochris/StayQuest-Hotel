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
import { useState } from "react";
import Pay from "./Components/Pay";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isAdminUser, setIsAdminUser] = useState(false);

  return (
    <>
      <BrowserRouter>
        {isAdminUser ? <AdminApp /> : loggedIn ? <AppStack /> : <AuthStack />}
      </BrowserRouter>
    </>
  );
}

export default App;

function AuthStack() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}

function AppStack() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms/*" element={<Rooms />} />
      <Route path="/rooms/standard-room" element={<View />} />
      <Route path="/rooms/payment" element={<Pay />} />
      <Route path="/oasisgrill" element={<OasisGrill />} />
      <Route path="/hoteloasis" element={<HotelOasis />} />
    </Routes>
  );
}

function AdminApp() {
  return (
    <Routes>
      {/* <Route path="/" element={<Admin />} /> */}
      <Route index path="/*" element={<Dashboard />} />
    </Routes>
  );
}
