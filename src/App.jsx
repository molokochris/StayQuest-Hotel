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
import SignIn from "./Pages/Admin/SignIn";
import SignUp from "./Pages/Admin/SignUp";
import Dash from "./Pages/Admin/Dash";

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
          <Route path="/admin/signup" element={<SignIn />} />
          <Route path="/admin/login" element={<SignUp />} />
          <Route path="/admin/Dash" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;