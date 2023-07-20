import React, { useState } from "react";
import { BiArrowBack } from "@react-icons/all-files/bi/BiArrowBack";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import "../Stylesheets/AddGuest.css";

export default function AddGuest() {
  // const path = useRoutes();
  // console.log(path);
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/admin/Dashboard");
  };
  const [isShowGuests, setIsShowGuests] = useState(false);
  const showGuests = (e) => {
    // e.preventDefault();
    setIsShowGuests(true);
    console.log("selectted: ", e);
  };
  return (
    <div className="add-guests">
      <div className=""></div>
      <form className="add-form">
        <div className="g-names">
          <input type="text" placeholder="First Names" />
          <input type="text" placeholder="Surname" />
        </div>
        <br />
        <div className="g-id">
          <input type="number" placeholder="ID number" />
        </div>
        <br />
        <div className="g-contacts">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Contact Numbers" />
        </div>
        <div className="g-room" onChange={(e) => showGuests(e.target.value)}>
          <label>
            <select>
              <option value="-1">Room Type</option>
              <option value="1">Standard Room</option>
              <option value="2">Deluxe Room</option>
              <option value="3">Executive Room</option>
              <option value="4">Presidential Room</option>
            </select>
            {isShowGuests && (
              <select>
                <option value="-1">Number of guests</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
              </select>
            )}
          </label>
        </div>
        <br />
        <div className="">
          <button className="add-btn">Book</button>
        </div>
      </form>
    </div>
  );
}
