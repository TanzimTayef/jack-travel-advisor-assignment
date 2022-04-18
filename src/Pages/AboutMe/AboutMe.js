import React from "react";
import { Container } from "react-bootstrap";
import img from "../../images/tayef.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <Container>
      <div className="d-md-flex justify-content-between align-items-center py-5">
        <div className="my-desc mb-5 pe-5">
          <h1 className="display-3 fw-bold">Tanzim Tayef</h1>
          <p>
            I want to be a full stack web developer. This is my goal. I want to
            achieve it this year. I have enough confidence. I've already joined
            this course to fulfill my goal. I'm already facing a very terrible
            situation. After achieving web development skills, I want to join a
            company. I want to get a job.
          </p>
        </div>

        <div className="my-desc mx-auto">
          <div className="image">
            <img src={img} className="img-fluid" alt="img" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
