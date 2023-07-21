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
          <label>Names:</label>
          <br />
          <input type="text" placeholder="First Names" />
          <input type="text" placeholder="Surname" />
        </div>
        <br />
        <div className="g-address">
          <label>Address:</label>
          <br />
          <input className="mx-text" type="text" placeholder="" />
          <input className="mx-text" type="text" placeholder="" />
          <input className="md-text" type="text" placeholder="" />
          <input className="md-text" type="text" placeholder="" />
          <input type="text" placeholder="" />
        </div>
        <br />
        <div className="g-id">
          <select>
            <option value="1">South African ID</option>
            <option value="1">Passsport</option>
          </select>
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
              <select onChange={(e) => showGuests(e.target.value)}>
                <option value="-1">Number of guests</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">5</option>
                <option value="5">6</option>
              </select>
            )}
          </label>
        </div>
        <div className="extras-info">
          <select onChange={(e) => showGuests(e.target.value)}>
            <option value="-1">How did find out about us</option>
            <option value="1">Newspaper</option>
            <option value="2">Facebook</option>
            <option value="3">Twitter</option>
            <option value="4">Instagram</option>
          </select>
        </div>
        <br />
        <div className="">
          <button className="add-btn">Book</button>
        </div>
      </form>
    </div>
  );
}
