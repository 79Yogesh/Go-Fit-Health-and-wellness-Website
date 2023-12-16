import React from 'react';
import './PricingTable.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const PricingTable = () => {
  return (
    <Container>
      <section className="pricing-table">
        <div className="card" style={{ background: "linear-gradient(to right, #8b78b5, #c3a1e1)", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
          <h3 className="type">Basic</h3>
          <div className="price"><span>$</span>0</div>
          <h5 className="plan">Plan</h5>
          <ul className="details">
            <li>FREE Stickers</li>
            <li>FREE Training</li>
            <li>24/7 support</li>
          </ul>
          <div className="buy-button">
            <h2 className="btn">SUBSCRIBE</h2>
          </div>
        </div>

        <div className="card" style={{ background: "linear-gradient(to right, #3fbb8f, #6ac5b3)", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
          <h3 className="type">Awesome</h3>
          <div className="price"><span>$</span>0</div>
          <h5 className="plan">Plan</h5>
          <ul className="details">
            <li>FREE Stickers</li>
            <li>FREE Training</li>
            <li>24/7 support</li>
          </ul>
          <div className="buy-button">
            <h2 className="btn">SUBSCRIBE</h2>
          </div>
        </div>

        <div className="card" style={{ background: "linear-gradient(to right, #f4d03f, #f9e79f)", color: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
          <h3 className="type">Premium</h3>
          <div className="price"><span>$</span>0</div>
          <h5 className="plan">Plan</h5>
          <ul className="details">
            <li>FREE Stickers</li>
            <li>FREE Training</li>
            <li>24/7 support</li>
          </ul>
          <div className="buy-button">
            <h2 className="btn">SUBSCRIBE</h2>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PricingTable;