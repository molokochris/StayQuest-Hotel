import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rooms from "./Pages/Rooms";
import OasisGrill from "./Pages/OasisGrill";
import HotelOasis from "./Pages/HotelOasis";
import View from "./Components/View";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;