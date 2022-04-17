import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, images, price, desc } = service;
  const navigate = useNavigate();

  const handlecheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="service">
      <div>
        <div>
          <div className="service-img">
            <img src={images} className="img-fluid" alt="" />
            <p className="serv-price">
              <div className="d-block text-center">
                <p className="fs-5">From</p>
                <p className="fs-3">{price}</p>
              </div>
            </p>
            <div className="service-text">
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </div>

        <div>
          <button className="checkout-btn d-block w-100" onClick={handlecheckout}>
            Check Out
          </button>
        </div>
      </div>

      {/* <Col >
        <Card className="border-0">
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>{ name}</Card.Title>
            <Card.Text>
             {desc}
            </Card.Text>
            <Card.Text>
               price: {price}
            </Card.Text>
           
            <Link className="hero-btn text-decoration-none"  to="/checkout">Check Out</Link>
          </Card.Body>
        </Card>
      </Col> */}
    </div>
  );
};

export default Service;
