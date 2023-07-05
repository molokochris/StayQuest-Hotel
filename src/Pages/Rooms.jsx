import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/rooms.css";
import "../assets/stylesheets/facilities.css";
import Modal from "../Components/Modal";

export default function Rooms() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <div className="inner-container">
        <div className="side-container">
          <div className="logo">StayQuest</div>
          <div className="features">
            <div className="feature-btn">2+ bed</div>
            <div className="feature-btn">4+ bed</div>
            <div className="feature-btn">Shwer</div>
            <div className="feature-btn">Bath</div>
          </div>
          <div className="rating">
            <img alt="" src="/rating-cropped.png" />
          </div>
          <div className="back-btn">
            <Link to="/">
              <img alt="" src="/nav-back.png" />
            </Link>
          </div>
        </div>
        <div className="outer-rooms-container">
          <div className="room">
            <div className="rm-type">
              <div className="clm-1">
                <h6>Standard room</h6>
                <div className="pricing">
                  <h5>R14, 923.00</h5>
                  <span>excl. VAT</span>
                </div>
              </div>
              <div className="clm-2">
                <p>
                  Our comfortable and well-appointed standard rooms provide a
                  cozy retreat after a day of adventure. Equipped with modern
                  amenities, these rooms offer a relaxing atmosphere and
                  everything you need for a pleasant stay.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img alt="" src="/standard.jpg" />
              <div className="book-btn">
                Reserve
              </div>
              <div className="avail-room">5</div>
            </div>
          </div>
          <div className="room">
            <div className="rm-type">
              <div className="clm-1">
                <h6>Deluxe room</h6>
                <div className="pricing">
                  <h5>R18, 943.00</h5>
                  <span>excl. VAT</span>
                </div>
              </div>
              <div className="clm-2">
                <p>
                  Indulge in the luxury of our deluxe suites, where elegance
                  meets comfort. These spacious suites feature enhanced
                  amenities, stylish decor, and additional living space,
                  providing you with a heightened level of comfort and
                  sophistication.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img alt="" src="/deluxe.jpg" />
              <div className="book-btn" onClick={() => setOpenModal(true)}>Reserve</div>
              <div className="avail-room">5</div>
            </div>
          </div>
          <div className="room">
            <div className="rm-type">
              <div className="clm-1">
                <h6>Executive room</h6>
                <div className="pricing">
                  <h5>R26, 923.00</h5>
                  <span>excl. VAT</span>
                </div>
              </div>
              <div className="clm-2">
                <p>
                  Elevate your experience with our exclusive executive floor
                  rooms. Located on a dedicated floor, these rooms offer
                  stunning views and access to additional privileges, such as a
                  private lounge, personalized services, and upgraded amenities,
                  ensuring a truly luxurious stay.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img alt="" src="/executive.jpg" />
              <div className="book-btn">Reserve</div>
              <div className="avail-room">5</div>
            </div>
          </div>
          <div className="room">
            <div className="rm-type">
              <div className="clm-1">
                <h6>Presidential room</h6>
                <div className="pricing">
                  <h5>R34, 953.00</h5>
                  <span>excl. VAT</span>
                </div>
              </div>
              <div className="clm-2">
                <p>
                  Experience the pinnacle of luxury in our magnificent
                  presidential suite. This opulent and expansive suite boasts
                  lavish furnishings, separate living and dining areas, a
                  private terrace or balcony, and unparalleled amenities. Enjoy
                  unrivaled comfort, privacy, and impeccable service, making
                  your stay truly unforgettable.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img alt="" src="/presidential.jpg" />
              <div className="book-btn">Reserve</div>
              <div className="avail-room">5</div>
            </div>
          </div>
        </div>
      </div>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}  />}
    </div>
  );
}