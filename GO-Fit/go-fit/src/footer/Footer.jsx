import styles from "./footer.module.css";
import logoIcon from "./images/logo.jpg"
import { Col, Container, Row } from "react-bootstrap";

import logoicon1 from './images/facebook.png';
import logoicon2 from './images/insta.jpeg';
import logoicon3 from './images/twitter.png';
import logoicon4 from './images/whatsapp.jpeg';
import pic1 from './images/phone.jpg';
import pic2 from './images/email.jpg';
import pic3 from './images/appstore.png';
import pic4 from './images/playstore.png';


const Footer = () => {
  return (

    <Container className={`p-3 ${styles.greyBackground}`} fluid >
      <Row>
        <Col>
          <div className={styles.info}>
            <br /><br />
            <p><img
              src={pic1}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Go-Fit Logo"
              rounded
            />
              &emsp;<i>Call : +91 7420982613/2589</i> </p><hr />
            <p> <img
              src={pic2}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Go-Fit Logo"
              rounded
            />
              &emsp; <i>Email : Team_61_ReactRebels@gmail.com</i> </p><hr />
            <h3>Follow us on Social Media </h3>

            <div className="social-media" id="social" style={{ textAlign: "center" }}>
              <img width="30px" height="30px" src={logoicon1} alt="Social Media 1" />&emsp;&emsp;
              <img width="30px" height="30px" src={logoicon2} alt="Social Media 2" />&emsp;&emsp;
              <img width="30px" height="30px" src={logoicon3} alt="Social Media 3" />&emsp;&emsp;
              <img width="30px" height="30px" src={logoicon4} alt="Social Media 4" />&emsp;&emsp;
            </div>

          </div>
        </Col>
        <Col>
          <div className="footer-content" style={{ textAlign: "center" }}>
            <br /><br />
            <p style={{ textAlign: "center" }}>
              <a href="#">Help</a> | <a href="#">Website Policies</a> | <a href="#">Terms & Conditions</a> | <a href="#">Reach Us</a> <hr />

              Owned & Maintained by: <br /><b>WPT Project Team 61 (ReactRebels), PG-DAC, CDAC Mumbai (sep-23) . </b>
              <hr />
              <b>© 2023 Go-Fit, C-DAC. All rights reserved,</b> <br /> Last Updated: Monday, Dec 11, 2023
            </p><hr />

          </div>
        </Col>
        <Col>
          <div className="p-0" style={{ textAlign: "center" }}> <br />
            <h3>Get Updates</h3>
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
            <div className={styles.footer_icons}>
            <img
              src={pic3}
              width="120"
              height="60"
              className="d-inline-block align-top"
              alt="Go-Fit Logo"
              rounded
            /><hr />
            <img
              src={pic4}
              width="120"
              height="60"
              className="d-inline-block align-top"
              alt="Go-Fit Logo"
              rounded
            />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;

