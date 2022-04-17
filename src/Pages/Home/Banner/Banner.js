import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import banner from "../../../images/banner.png";

const Banner = () => {
  return (
    <div id="banner">
         <Container>
      <div 
        style={{ height: "80vh" }}
        className="d-md-flex align-items-center justify-content-between"
      >
        <div className="banner-left my-5 my-md-0">
          <h1 className="display-4 fw-bold">Explore The World!</h1>
          <p className="mt-2">
            You can create a Custom Trip.Search Our Lowest Fares to Your
            Favorite <br />
            Destinations.Find a better way to travel
          </p>
          <button class="hero-btn">Explore More</button>
        </div>
        <div className="banner-right d-flex my-5 my-md-0 justify-content-end">
          <div>
            <img src={banner} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Container>
   </div>
    
  );
};

export default Banner;
