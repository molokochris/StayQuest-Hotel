import React from "react";
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
  return (
    <div className="add-guests">
      <form className="add-form">
        <div className="g-names">
          <input type="text" placeholder="First Names" />
          <input type="text" placeholder="Surname" />
        </div>
        <div className="g-contacts">
          <input type="number" placeholder="ID number" />
          <input type="text" placeholder="Email" />
          <br />
          <input type="text" placeholder="Contact Numbers" />
        </div>
        <br />
        <div className="">
          <button className="add-btn">Book</button>
        </div>
      </form>
    </div>
  );
}
