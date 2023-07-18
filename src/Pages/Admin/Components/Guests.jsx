import { BiArrowBack } from "@react-icons/all-files/bi/BiArrowBack";
import "../Stylesheets/home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Guests() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/admin/Dashboard");
  };
  return (
    <>
      <div className="c-head">
        <div className="clm-1">
          <BiArrowBack
            style={{ marginRight: ".2em", color: "gray" }}
            onClick={goBack}
          />
          <div className="in-clm1">
            <span className="sub-head">Guests</span>
            <span className="heading">Add Something here</span>
          </div>
        </div>
        {/* <div className="clm-2">
          <div className="booking-btn">Add Guest</div>
        </div> */}
      </div>
      <div className="c-main">more info</div>
    </>
  );
}
