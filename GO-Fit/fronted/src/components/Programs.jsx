import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Button, Image, Alert } from "react-bootstrap"; // Import your Container component

import { Card, Col, Container } from "react-bootstrap";

import yogapic from "./images/pexels-yan-krukau-8436627(3).jpg";
import gympic from "./images/gympic.jpg";

export function Programs() {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transform: isHovered ? "translateY(-5px)" : "none",
  };

  return (
    <Container>
      <Alert
        variant="success"
        style={{
          textAlign: "center",
          backgroundColor: "#888888",
          color: "white",
        }}
      >
        <h1>Programs at GO-FIT</h1>
      </Alert>

      <div className="container services">
        <h2
          className="main-title text-center"
          style={{ color: "white", fontWeight: "bold" }}
        >
          SERVICES
        </h2>

        <div className="card-cover">
          <div className="col-md-12">
            <div className="row">
              <Row>
                <Col>
                  {" "}
                  {/* 1 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ffcccc, #ffb3b3)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/f5e214b7-243b-4fec-b821-8e6400d49213"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        Meditation
                      </Card.Title>
                      <Card.Text>
                        About Meditation: Meditation is one of the most
                        effective tools to manage stress. If you carefully
                        listen to the instructions of our instructor and do
                        exactly as he says, you will completely forget that you
                        were ever stressed out in the first place.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  {" "}
                  {/* 2 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ccffcc, #b3ffb3)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,c_fill/dpr_2/image/diy/54117647-b2c9-4800-9370-18fb650fe4ba"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        Yoga
                      </Card.Title>
                      <Card.Text>
                        Pranayam yoga is a science of breathing or "control of
                        breath". it is a breathing exercise that deals with
                        various types of breath control. It can also be called
                        yoga for relaxation of the mind, body, and soul. In
                        Sanskrit, the word "Prana" means "breath", and "yama"
                        means "control"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  {/* 3 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ccccff, #b3b3ff)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://lh4.googleusercontent.com/BxqM86UPr61cND6KSgq2fwFq1Pqfwh_RBCC-8ioX0WFlniuQuPD0K5H4IjxbY2sTt_I8iQqcy9PueRWswAHFUPZZGvObVrCE4viS2Vs8ZF-X83JEGvdOcm63NeykhTbC3o5vqvprSIJN_x9YOkM"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        Workout
                      </Card.Title>
                      <Card.Text>
                        The physical and mental health benefits of exercise are
                        often enough to encourage people to pay for membership.
                        According to the NHS, exercise is a 'miracle cure'.
                        Improved physical health, enhanced mental health, social
                        interaction, increased energy and productivity, and
                        personal achievement
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  {/* 4 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ffffcc, #ffcc99)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://media.istockphoto.com/id/1452669734/photo/happy-indian-woman-outdoor-freedom-and-arms-out-ocean-wind-and-breathe-fresh-air-with-purpose.webp?b=1&s=170667a&w=0&k=20&c=-MM6iiQ5YH8k_eg3-w52DdnbH7wUd3lK76LRqnQUSnc="
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        Mental Health
                      </Card.Title>
                      <Card.Text>
                        Mental health is a state of mental well-being that
                        enables people to cope with the stresses of life,
                        realize their abilities, learn well and work well, and
                        contribute to their community. It is an integral
                        component of health and well-being that underpins our
                        individual and collective abilities to make decisions,
                        build relationships.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col>
                  {" "}
                  {/* 5 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ffffcc, #ffcc99)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1524901548305-08eeddc35080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsZiUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        CARE
                      </Card.Title>
                      <Card.Text>
                        About care: Managing selfcare is one of the most
                        effective tools to manage stress. If you carefully
                        listen to the instructions of our instructor and do
                        exactly as he says, you will completely forget that you
                        were ever stressed out in the first place.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  {" "}
                  {/* 6 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ffcccc, #ffb3b3)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        FITNESS
                      </Card.Title>
                      <Card.Text>
                        Exercise is key to living an Anticancer lifestyle. By
                        reducing inflammation and strengthening the immune
                        system, physical activity can lower your risk of cancer,
                        cancer recurrence, and chronic illness.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  {/* 7 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ccffcc, #b3ffb3)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzfGVufDB8fDB8fHww"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        SPORTS
                      </Card.Title>
                      <Card.Text>
                        The physical and mental health benefits of exercise are
                        often enough to encourage people to pay for membership.
                        According to the NHS, exercise is a 'miracle cure'.
                        Improved physical heaalth, enhanced mental health, social
                        interaction, increased energy and productivity, and
                        personal achievement
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  {/* 8 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ffffcc, #ffcc99)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://media.istockphoto.com/id/1210226489/photo/puzzle-jigsaw-heart-on-brain-mental-health-concept-world-autism-awareness-day.webp?b=1&s=170667a&w=0&k=20&c=vVA1qrpWQr6Ck5yotswNLQz-eSqWU8MmI8x3YD4N8OA="
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        MIND
                      </Card.Title>
                      <Card.Text>
                        About Meditation: Meditation is one of the most
                        effective tools to manage stress. If you carefully
                        listen to the instructions of our instructor and do
                        exactly as he says, you will completely forget that you
                        were ever stressed out in the first place.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col>
                  {" "}
                  {/* 9 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ccccff, #b3b3ff)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://media.istockphoto.com/id/1421306068/photo/woman-measuring-waist-with-tape-on-grey-background-closeup.webp?b=1&s=170667a&w=0&k=20&c=_08qgVw4iERahUH0a9xfD2ohqP2xqMhDdKvvYLDIkZk="
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        WEIGHT CONTROL
                      </Card.Title>
                      <Card.Text>
                        About Meditation: Meditation is one of the most
                        effective tools to manage stress. If you carefully
                        listen to the instructions of our instructor and do
                        exactly as he says, you will completely forget that you
                        were ever stressed out in the first place.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  {" "}
                  {/* 10 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ffcccc, #ffb3b3)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://media.istockphoto.com/id/491965869/photo/woman-doing-blood-sugar-test.webp?b=1&s=170667a&w=0&k=20&c=Dw753NELxDngarz4sXlN2Su53H1IFrlhiEKzHAEjt3k="
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        SUGAR FIT
                      </Card.Title>
                      <Card.Text>
                        Pranayam yoga is a science of breathing or "control of
                        breath". it is a breathing exercise that deals with
                        various types of breath control. It can also be called
                        yoga for relaxation of the mind, body, and soul. In
                        Sanskrit, the word "Prana" means "breath", and "yama"
                        means "control"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  {/*11 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ffffcc, #ffcc99)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://media.istockphoto.com/id/1129700365/photo/spinach-salad-with-fresh-cucumbers-tomato-onion-pomegranate-sesame-seeds-and-cashew-nuts-on.webp?b=1&s=170667a&w=0&k=20&c=ll3ZqMmfojoIeoSfymc_uKfCit-LDg845csG5fglFrM="
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        GOOD FOOD
                      </Card.Title>
                      <Card.Text>
                        The physical and mental health benefits of exercise are
                        often enough to encourage people to pay for membership.
                        According to the NHS, exercise is a 'miracle cure'.
                        Improved physical health, enhanced mental health, social
                        interaction, increased energy and productivity, and
                        personal achievement
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  {" "}
                  {/* 12 */}
                  <Card
                    className="custom-card"
                    style={{
                      background: "linear-gradient(to right, #ccccff, #b3b3ff)",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://media.istockphoto.com/id/628986912/photo/cucumber-parsley-and-lime-juice.jpg?s=1024x1024&w=is&k=20&c=knfsRnNgB_wiAz4vsM4vDTTnrs63xnfEAbt-mJ7ZfYg="
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        HEALTHY DRINKS
                      </Card.Title>

                      <Card.Text>
                        About Meditation: Meditation is one of the most
                        effective tools to manage stress. If you carefully
                        listen to the instructions of our instructor and do
                        exactly as he says, you will completely forget that you
                        were ever stressed out in the first place.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}