import { Row, Col, Table, Container } from 'react-bootstrap';
import React from 'react';
import "./Contactus.css";
import mappic from "../images/contactus.jpeg";
import { useState } from 'react';
import { saveContact } from '../../service/userservice';

export function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            // Implement the saveUser function in your service to send data to the server
            const result = await saveContact(formData);
            console.log('Data submitted:', result);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container>
            <h2 className="main-title text-center">CONTACT US</h2>
            <Table className='mt-4'>
                <Row>
                    <Col md={6}>
                        <div className="p-5 contactus" style={{ textAlign: "center" }} id="contactus">

                            <div className="contact-info mb-5">
                                <p>Address: <br /> <b>"Go-Fit"(ReactRebels), Health and Wellness Hub , Team-61 Colony, Online Batch sep 23, City: Zoom Meet,  Dist: CDAC , State: Kh/Jh <br />Zoom Meeting Id: 845627914562 password: 894675</b>  </p>
                                <p>Website: <b>www.Go-Fit.com</b></p>
                                <p>Email: <a href="https://mail.google.com/mail/u/0/"> team-61@gmail.com</a></p>
                                <p>Contact:+91 7420982613/8177838017 </p> <hr />
                                <h2>Send Us a Message</h2>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input type="text" name='name' value={formData.name} placeholder='Full Name' onChange={handleChange} style={{ marginBottom: "10px" }}></input>
                                    </div>
                                    <div>
                                        <input type="email" name='email' value={formData.email} placeholder='Email' onChange={handleChange} style={{ marginBottom: "10px" }}></input>
                                    </div>
                                    <div>
                                        <input type="text" name='subject' value={formData.subject} placeholder='Subject' onChange={handleChange} style={{ marginBottom: "10px" }}></input>
                                    </div>
                                    <div>
                                        <textarea name='message' value={formData.message} onChange={handleChange} style={{ marginBottom: "10px" }}></textarea>
                                    </div>
                                    <div style={{ textAlign: "center", }}>
                                        <input type="submit" value="Submit" style={{ width: "40%" }}></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <a href="https://www.google.com/maps/place/CENTRE+FOR+DEVELOPMENT+OF+ADVANCED+COMPUTING,+Panchawati+Rd,+Mansarovar,+Pashan,+Pune,+Maharashtra+411008/@18.5349721,73.8105031,19z/data=!4m5!3m4!1s0x3bc2bf0e5dca0f97:0xaed6c14da20b1d0f!8m2!3d18.5350147!4d73.8108441?shorturl=1" target="_blank" rel="noopener noreferrer">
                       <u>Reach us-- </u>  <img
                                src={mappic}
                                alt="Map"
                                marginTop={30}
                                style={{ width: "85%", height: "75%" }}
                            />
                        </a>
                       
                    </Col>
                </Row>
            </Table>
        </Container>
    );
}