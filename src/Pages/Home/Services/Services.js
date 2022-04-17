import React from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  return (
    <div className="my-5">
      <Container>
        <h2 className="text-center">My Service</h2>
        <Row xs={1} md={3} className="g-4">
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </Row>
      </Container>
    </div>
  );
};

export default Services;
