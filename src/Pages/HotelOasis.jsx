import React, { useState } from "react";
import "../assets/stylesheets/facilities.css";
import "../assets/stylesheets/hoteloasis.css";
import image from "../assets/images/rating-cropped.png";
import Modal from 'react-modal';

Modal.setAppElement();

export default function HotelOasis() {
  
  const [isModalOpen, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  }
  const closeModal = () => {
    setModalState(false);
  }

  return (
    <div className="hotelOasis">
      <div className="header">
        <div className="header-container">
          <div className="header-logo">StayQuest</div>
          <div className="header-sub">Embark on a World-Class Adventure</div>
          <div className="header-rating">
            <img className="r-stars" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="ex-container">
        <div className="card cd-1">
          <div className="cd-title">Beachside Bliss</div>
          <div className="cd-text">
            Unwind on pristine sandy beaches, bask in the sun, and take
            refreshing dips in crystal-clear waters. Our hotel offers exclusive
            beach access, where guests can lounge in comfortable beach chairs,
            enjoy beachside service, and soak up the tropical ambiance.
          </div>
        </div>
        <div className="card">
          <div className="cd-title">Beachside Bliss</div>
          <div className="cd-text">
            Unwind on pristine sandy beaches, bask in the sun, and take
            refreshing dips in crystal-clear waters. Our hotel offers exclusive
            beach access, where guests can lounge in comfortable beach chairs,
            enjoy beachside service, and soak up the tropical ambiance.
          </div>
        </div>
        <div className="card">
          <div className="cd-title">Beachside Bliss</div>
          <div className="cd-text">
            Unwind on pristine sandy beaches, bask in the sun, and take
            refreshing dips in crystal-clear waters. Our hotel offers exclusive
            beach access, where guests can lounge in comfortable beach chairs,
            enjoy beachside service, and soak up the tropical ambiance.
          </div>
        </div>
        <div className="card">
          <div className="cd-title">Beachside Bliss</div>
          <div className="cd-text">
            Unwind on pristine sandy beaches, bask in the sun, and take
            refreshing dips in crystal-clear waters. Our hotel offers exclusive
            beach access, where guests can lounge in comfortable beach chairs,
            enjoy beachside service, and soak up the tropical ambiance.
          </div>
        </div>
        <div className="card">
          <div className="cd-title">Beachside Bliss</div>
          <div className="cd-text">
            Unwind on pristine sandy beaches, bask in the sun, and take
            refreshing dips in crystal-clear waters. Our hotel offers exclusive
            beach access, where guests can lounge in comfortable beach chairs,
            enjoy beachside service, and soak up the tropical ambiance.
          </div>
        </div>
        <div className="card">
          <div className="cd-title">Beachside Bliss</div>
          <div className="cd-text">
            Unwind on pristine sandy beaches, bask in the sun, and take
            refreshing dips in crystal-clear waters. Our hotel offers exclusive
            beach access, where guests can lounge in comfortable beach chairs,
            enjoy beachside service, and soak up the tropical ambiance.
          </div>
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
  );
}
