import React from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import Dipak from "./images/dipak.jpg";
import Anuja from "./images/anuja.jpeg";
import Yogesh from "./images/yogesh.jpeg";

export function AboutUs() {
    return (
        <Container fluid>
            <Alert
                variant="success"
                style={{
                    textAlign: "center",
                    backgroundColor: "#888888",
                    color: "white",
                }}
            >
                <h1>About Us</h1>
            </Alert>
            <Row>
                <Col lg={4}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Vision</h3>

                    <p style={{ color: 'black', fontStyle: 'italic' }}>
                        Go-Fit is a health and fitness company offering digital and offline experiences across fitness, nutrition, and mental well-being.

                        With the aim to make fitness fun and easy, and medical and lifestyle care hassle-free.
                    </p>
                </Col>
                <Col lg={4}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Mission</h3>
                    <p style={{ color: 'black', fontStyle: 'italic' }}>Go-fit's mission is to “make health easy”.

                        Through our products and services, we want to enable people to significantly improve their overall health, reduce the risk of lifestyle diseases and enable a long, disease free life.</p>
                </Col>
                <Col lg={4}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Our History</h3>
                    <p style={{ color: 'black', fontStyle: 'italic' }}>Co-founded by Anuja Gupta, Yogesh patel and Dipak Wani in CDAC -Mumbai 2023, the company is headquartered in Kharghar, Mumbai.</p>
                </Col>
            </Row>


            <Alert
                variant="danger"
                style={{
                    textAlign: "center",
                    color: "dark blue",
                }}
            > <h1>Meet Our Team </h1>
            </Alert>

            <Row >
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={Dipak} />
                        <Card.Body>
                            <Card.Title>Dipak Wani</Card.Title>
                            <Card.Text>
                            PRN : 230940520019 <br />
                                PG-DAC Student, Sep-23 batch <br />
                                CDAC Mumbai JH 
                            </Card.Text>
                            <Button variant="primary"><a href="https://www.linkedin.com/in/dipak-wani-726b2521a/">LinkedIn</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>

                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={Anuja} />
                        <Card.Body>
                            <Card.Title>Anuja Gupta</Card.Title>
                            <Card.Text>
                                PRN : 230940320022 <br />
                                PG-DAC Student, Sep-23 batch <br />
                                CDAC Mumbai KH 
                            </Card.Text>
                            <Button variant="primary"><a href="https://www.linkedin.com/in/anuja-gupta-7b89ba148/">LinkedIn</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={Yogesh} />
                        <Card.Body>
                            <Card.Title>Yogesh Patel</Card.Title>
                            <Card.Text>
                            PRN : 230940320132 <br />
                                PG-DAC Student, Sep-23 batch <br />
                                CDAC Mumbai KH 
                            </Card.Text>
                            <Button variant="primary"><a href="https://www.linkedin.com/in/yogesh-patel-8b426b229/">LinkedIn</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row>
                <Col>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-5 ">
                                <p>
                                    "Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives."
                                </p>
                                <footer className="blockquote-footer">
                                    Andrew Carnegie<cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-5 ">
                                <p>
                                Teamwork is the secret that makes common people achieve uncommon results. - Ifeanyi Enoch Onuoha
                                </p>
                                <footer className="blockquote-footer">
                                Helen Keller <cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-5 ">
                                <p>
                                Teamwork is the secret that makes common people achieve uncommon results. 
                                </p>
                                <footer className="blockquote-footer">
                                - Ifeanyi Enoch Onuoha<cite title="Source Title"> </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


                    
      
        </Container>
    );
}