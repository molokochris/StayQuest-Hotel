import { BrowserRouter } from "react-router-dom";
import React from "react";
import "../assets/stylesheets/home.css";
import carouselImage from "../assets/images/carousel/hotel1.jpg";
import carouselImage1 from "../assets/images/carousel/hotel5.jpg";
import carouselImage2 from "../assets/images/carousel/Sunset Cruises.jpg";

export default function Home() {
  return (
    <>
        <div className="landingPage">
          <div className="land-banner-container">
            <div className="logo-container">
              <span>StayQuest</span>
            </div>
            <span className="banner-title">
              Find your next holiday destination with our help
            </span>
          </div>
          <div className="imageCarousel_container">
            {/* <div className="imageCarousel"> */}
            <img src={carouselImage} alt="" />
            <img src={carouselImage1} alt="" />
            <img src={carouselImage2} alt="" />
            {/* </div> */}
            <div className="more" href="#">more about us</div>
          </div>
        </div>
    </>
  );
}
