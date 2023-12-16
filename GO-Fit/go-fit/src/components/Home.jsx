
import React from "react";
import { Card, CardGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import styles from "./Home.css";

import background from "./images/card14.jpg";
import Slider from "./slider";
import Programcards from "./Programcards";
import img1 from "./images/gif2.gif";
import img2 from "./images/gif5.gif";
import img3 from "./images/gif3.gif";
import img4 from "./images/gif4.gif";
import PricingTable from "./PricingTable";
import Col from 'react-bootstrap/Col';

export function Home() {
  let imageStyle = {
    height: "500px",
    width: "1000px",
    backgroundImage:
      'url("https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1701820800&semt=ais")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    color: "white",
  };
  return (
    <Container fluid>
      {/* <div style={{ backgroundImage: url(${background}) }}> */}

      <div>
        <Slider></Slider>
      </div><hr />
      <div>
        <Row>
          <h1 className="hero-title" style={{ color: 'black', fontWeight: 'bold', fontSize: '6rem', textAlign: 'center' }}>
            Fun, trainer led group classes
          </h1>
        </Row>
      </div>  

      <Programcards></Programcards>   
         <br /><br />  <br /> <br /> <br /> <br /> <br />  <br /><br /><br />   

            <PricingTable></PricingTable>

<div className="hero" id="about">
        <div className="hero-description">
          <div className="hero-text">
            <h1 className="hero-title" style={{ color: 'white', fontWeight: 'bold', fontSize: '6rem', textAlign: 'center' }}>
              One membership for all your fitness needs.
            </h1>
            <br />
            <br />
          </div>
        </div>
      </div>

       

      <Row >
        <Col lg={3} style={{ textAlign: "center" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img1} />
          </Card>
        </Col>
        <Col lg={3} style={{ textAlign: "center" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img2} />
          </Card>
        </Col>
      
        <Col lg={3} style={{ textAlign: "center" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img3} />
          </Card>
        </Col>
        <Col lg={3} style={{ textAlign: "center" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img4} />
          </Card>
        </Col>
      </Row>
    </Container>


  );
}