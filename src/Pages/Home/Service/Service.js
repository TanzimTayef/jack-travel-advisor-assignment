import React from "react";
import { useNavigate } from "react-router-dom";
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
              <p>{desc.slice(0, 80)}...</p>
            </div>
          </div>
        </div>

        <div>
          <button className="checkout-btn d-block w-100" onClick={handlecheckout}>
            Check Out
          </button>
        </div>
      </div>
  );
};

export default Service;
