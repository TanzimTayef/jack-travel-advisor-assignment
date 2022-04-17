import React from "react";
import {Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, images, price, desc } = service;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>{ name}</Card.Title>
            <Card.Text>
             {desc}
            </Card.Text>
            <p>Price :{price}</p>
          </Card.Body>
          <Link  to="/checkout">Check Out</Link>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
