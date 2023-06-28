import React from "react";
import "../assets/stylesheets/about.css";
import image from "../assets/images/rating-cropped.png";
import "../assets/stylesheets/facilities.css";

export default function About() {
  return (
    <div className="about">
      <div className="header">
        <div className="header-container">
          <div className="header-logo">StayQuest</div>
          <div className="header-sub">Embark on a World-Class Adventure</div>
          <div className="header-rating">
            <img className="r-stars" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="o-block" style={{ borderRadius: "10px 0 0 10px" }}>
          <span className="inner-text">
            StayQuest is a premier destination located in the captivating and
            historically rich Limpopo Province, offering an exceptional retreat
            for travelers seeking a memorable getaway. Situated amidst the
            natural beauty and storied past of this enchanting province, our
            hotel combines comfort, adventure, and unparalleled experiences.
            <br />
            <br /> At StayQuest, our commitment is to provide exceptional
            service and create a welcoming atmosphere that feels like a home
            away from home. Our dedicated team is devoted to ensuring that every
            aspect of your stay is impeccable, from personalized assistance to
            attention to detail that exceeds expectations.
            <br />
            <br /> Indulge in the ultimate relaxation and tranquility within our
            thoughtfully designed accommodations. From our inviting rooms to our
            luxurious suites, each space is meticulously curated to provide a
            haven of comfort, featuring modern amenities and breathtaking views
            of Limpopo Province's natural beauty.
          </span>
        </div>
        <div className="z-block">ABOUT US</div>
        <div className="o-block" style={{ borderRadius: "0 10px 10px 0" }}>
          <span className="inner-text">
            Savor a culinary journey through our diverse dining options at
            StayQuest. Our talented chefs skillfully blend local ingredients
            with global flavors, presenting a delightful array of dishes that
            cater to every palate, creating a memorable dining experience.<br /><br />
            Embrace the endless adventures that await you at StayQuest. Whether
            you crave exhilarating outdoor pursuits or serene moments of
            relaxation, our hotel offers a range of activities designed to cater
            to your preferences. Explore the natural wonders of Limpopo
            Province, unwind by the poolside, embark on cultural excursions, and
            delve into the rich history that surrounds our hotel, allowing you
            to discover the unique heritage of this captivating region. <br /><br />Immerse
            yourself in the essence of hospitality at StayQuest. Let us be your
            gateway to an extraordinary journey, where comfort, adventure, warm
            hospitality, and a captivating history converge to create an
            unforgettable stay in the mesmerizing Limpopo Province.
          </span>
        </div>
      </div>
    </div>
  );
}
