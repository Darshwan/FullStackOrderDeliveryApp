// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";

export default function Hero() {

  return (
    <div className="hero-container flex flex-col items-center sm:items-start sm:px-16 justify-center  px-2">
      <h1>
        Crafting your <br /> Exceptional Dining
        <br /> <span> Reservations </span>
      </h1>
      <p>
        Reservation is a step into a world of gastronomic wonder. <br /> Reserve
        your table today and let us paint your culinary dreams into reality.
      </p>
      <div className="Hero-buttons flex flex-row items-center justify-center">
        <div className="hero-btn flexCenRow whitebg">
          <box-icon type="solid" name="truck" color="white"></box-icon>
          <span>Delivery</span>
        </div>
        <div className="hero-btn flexCenRow whitebg">
          <box-icon name="location-plus" color="white"></box-icon>
          <span>Pickup</span>
        </div>
        <div className="hero-btn flex flex-col lg:flex-row items-center justify-center ">
          <box-icon name="restaurant" color="white"></box-icon>
          <span>Restaurant</span>
        </div>
      </div>
    </div>
  );
}
