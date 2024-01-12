import { BrowserRouter, Link } from "react-router-dom";
import React from "react";
import "../assets/stylesheets/home.css";
import carouselImage from "../assets/images/carousel/hotel1.jpg";
import carouselImage1 from "../assets/images/carousel/hotel5.jpg";
import carouselImage2 from "../assets/images/carousel/Sunset Cruises.jpg";
import Facilities from "../Components/Facilities";
import About from "../Components/About";
import Contact from "../Components/Contact";

export default function Home() {
  return (
    <>
      <div className="landingPage">
        <div className="land-banner-container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                background: "whitesmoke",
                borderRadius: 100,
              }}
            ></div>
            <div
              style={{
                width: 150,
                paddingBlock: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "rgb(61,98,20)",
              }}
            >
              welcome,
              <br />
              mang mang
            </div>
          </div>
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
          <div className="more" href="#more">
            more about us
          </div>
        </div>
      </div>
      <Facilities />
      <About />
      <Contact />
    </>
  );
}
