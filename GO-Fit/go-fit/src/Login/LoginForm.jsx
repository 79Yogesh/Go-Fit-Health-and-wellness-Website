
// // LoginForm.js
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../service/userservice";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './LoginForm.css';


export function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData);
            console.log(result);
            setFormData({  email: '', password:'' });
            localStorage.setItem("token", result.token);
            navigate(`/dashboard/${formData.email}`);
            
        } catch (error) {
            setLoginError(true);
            setTimeout(() => {
                alert('Email or Password is not valid.')
            }, 1000);
            console.log(error);
        }
    }
    return (
        
        <Container id="containerlogin" className="wrapper">
            <Row>
               
                <Col >
                    <Form onSubmit={handleSubmit} id="form">
                    <h3 className="mb-4"> Login</h3>
                        <Form.Group className="mb-4">
                           
                            <Form.Control type="text" placeholder="Enter email" name="email" onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                       
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} required/>
                        </Form.Group>

                        <Button variant="primary" type="submit" class="btn">
                            Login
                        </Button>
                    </Form>

                    <div className="register-link" >
                        <p >
                            You don't have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>

                    {/* { loginError? alert('Email or Password is not valid.'):null}  */}
                </Col>
            </Row>
        </Container>
    );
}
