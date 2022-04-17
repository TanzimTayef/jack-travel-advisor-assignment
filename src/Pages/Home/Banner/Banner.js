import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner" className="d-flex align-items-center">
      <Container>
        <h1 className="display-4 fw-bold">Explore The World!</h1>
        <p className="mt-2">
          You can create a Custom Trip.Search Our Lowest Fares to Your Favorite <br />
          Destinations.Find a better way to travel
              </p>
              <button class="hero-btn">Explore More</button>
      </Container>
    </div>
  );
};

export default Banner;
