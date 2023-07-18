import { Route, Routes, useNavigate } from "react-router-dom";
import "../Stylesheets/home.css";
import HomePage from "./HomePage";
import AddGuest from "./AddGuest";

export default function Home() {
  const navigate = useNavigate();
  const Add = () => {
    navigate("/admin/Dashboard/add-guest");
  };
  return (
    <>
      <div className="c-head">
        <div className="clm-1">
          {/* <BiArrowBack style={{ marginRight: ".2em", color: "gray" }} onClick={goBack} /> */}
          <div className="in-clm1">
            <span className="sub-head">Home</span>
            <span className="heading">Add Something here</span>
          </div>
        </div>
        {/* <div className="clm-2"> */}
        <button className="booking-btn clm-2" onClick={Add}>
          Add Guest
        </button>
        {/* </div> */}
      </div>
      <div className="c-main">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="add-guest" element={<AddGuest />} />
        </Routes>
      </div>
    </>
  );
}
