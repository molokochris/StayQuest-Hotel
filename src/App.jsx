import "./App.css";
import Home from "./Pages/Home";
import Facilities from "./Components/Facilities";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rooms from "./Pages/Rooms";
import OasisGrill from "./Pages/OasisGrill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/oasisgrill" element={<OasisGrill />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
