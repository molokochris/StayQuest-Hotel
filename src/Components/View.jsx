import React, { useState } from "react";
import "../assets/stylesheets/modal.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";

export default function View() {
  const [showPay, setShowPay] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  const navigation = useNavigate();

  const goBack = () => {
    navigation("/");
  };
  return (
    <div className="modal-container">
      <div className="head">StayQuest</div>
      <div className="s-head">Standard Room</div>
      <div className="i-head"></div>
      <div className="z-section">
        <div className="rm-facilities">
          <div className="title">Facilities</div>
          <p className="inner-text">
            <span>Cozy Bedding:</span>
            <br />
            Enjoy a restful night's sleep on a comfortable bed with soft pillows
            and high-quality linens, ensuring a rejuvenating experience.
            <br />
            <br />
            <span>Ensuite Bathroom:</span>
            <br /> Each standard room is equipped with a private ensuite
            bathroom, complete with a shower, complimentary toiletries, and
            fresh towels for your convenience.
            <br />
            <br /> <span>Flat-screen TV:</span>
            <br />
            Sit back and enjoy your favorite shows or movies on a flat-screen
            television, providing entertainment during your downtime.
            <br />
            <br />
            <span>Complimentary Wi-Fi:</span>
            <br /> Stay connected with complimentary high-speed Wi-Fi, allowing
            you to browse the internet, stay in touch with loved ones, or catch
            up on work if needed.
            <br />
            <br />
            <span>Air Conditioning:</span>
            <br /> Maintain a comfortable temperature with individually
            controlled air conditioning in each standard room, ensuring a
            pleasant environment regardless of the weather outside.
            <br />
            <br />
            <span>Mini Fridge:</span>
            <br />
            Keep your snacks and beverages chilled in the mini fridge provided
            in the standard room, allowing for convenience and easy access to
            refreshments.
            <br />
            <br />
            <span>Work Desk and Chair:</span>
            <br /> If you need to attend to work-related tasks, a dedicated work
            desk and chair are available in the standard room, providing a
            comfortable space to stay productive.
            <br />
            <br />
            <span>In-room Safe:</span>
            <br /> Store your valuable belongings securely in the in-room safe,
            offering peace of mind throughout your stay.
          </p>
        </div>
        <div className="rm-description">info</div>
        <div className="rm-price">
          <div className="rm-price-brk">
            <div className="title">Pricing</div>
            <p className="inner-text price-sec">
              <span className="">
                R 14 923.00
                <br />
                +
                <br />
                R 2 238.45
                <br />
                (15% VAT)
                <br />
                <br />= R 17 161.45
              </span>
            </p>
          </div>
          <div className="rm-pay" onClick={() => setOpenModal(true)}>
            pay
          </div>
        </div>
      </div>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
}
