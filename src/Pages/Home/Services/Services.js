import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();

  return (
    <div className="my-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold">My Service</h2>
        <Row xs={1} md={3} className="g-4">
          {
            services.map(service => <Service key={service.id} service={service} />)
         }
        </Row>
      </Container>
    </div>
  );
};

export default Services;
