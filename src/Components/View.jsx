import React, { useEffect, useState } from "react";
import "../assets/stylesheets/roomView.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function View(props) {
  const [showPay, setShowPay] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [errors, setErrors] = useState({});
  const navigation = useNavigate();

  useEffect(() => {
    // Validate dates on every change
    validateDates();
  }, [startDate, endDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setEndDate(null); // Reset end date if start date changes
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const validateDates = () => {
    const today = new Date();
    const errors = {};

    if (startDate && startDate < today) {
      errors.startDate = "Check-in date cannot be in the past";
    }

    if (endDate && endDate <= startDate) {
      errors.endDate = "Check-out date must be after check-in date";
    }
    setErrors(errors);
  };

  const handleBooking = () => {
    if (!Object.keys(errors).length) {
      // Proceed with booking process using startDate and endDate
      navigation("/rooms/payment", { state: { startDate, endDate } });
      console.log("Booking with dates:", startDate, endDate);
    }
  };
  console.log("Selected dates:", startDate, endDate);

  const goBack = () => {
    navigation("/");
  };
  return (
    <div className="modal-container">
      <div className="head">StayQuest</div>
      <div className="s-head">
        <div className="rmm-type">Standard Room</div>
      </div>
      <div className="i-head"></div>
      <div
        style={{
          backgroundColor: "#d3d3d3",
          height: "100px",
          padding: "40px",
          fontWeight: "bold",
        }}
      >
        Book here
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            From:
            {Object.entries(errors).map(([field, message]) => (
              <p key={field} className="error">
                {message}
              </p>
            ))}
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Check-in"
            />
          </div>
          <div style={{ flexDirection: "column", display: "flex" }}>
            To:
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Check-out"
              disabled={!startDate} // Disable until start date is selected
            />
          </div>
        </div>
      </div>
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
          {/* <Link to={"/rooms/payment"}> */}
          <button
            className="rm-pay"
            onClick={handleBooking}
            disabled={Object.keys(errors).length > 0}
          >
            pay
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
