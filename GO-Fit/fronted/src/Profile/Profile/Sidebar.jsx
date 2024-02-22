

import React, { useState } from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Profile } from './Profile';
import { Edit } from './Edit';
import Delete from './Delete';
import { BMI } from './BMI';
import { Programs } from '../../components/Programs';
import "./sidebar.css"
import { Link, useNavigate } from 'react-router-dom';

import profilepic from '../../components/images/profile.png';
import { logout } from '../../utils/TokenUtils';

export function Sidebar() {
  const [currentPage, setCurrentPage] = useState(null);
  const sidebarWidth = 200; // Set your desired sidebar width


  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };


  const handleButtonClick = (page) => {
    setCurrentPage(page || 'edit');
  };


  return (
    <Container fluid >
      <Row>
      <Col xs={3} className="sidebar sticky-top " style={{ width: `${sidebarWidth}px` }}>
          <Image src={profilepic} roundedCircle fluid />
          <div class="btn-class"> 
          
            <Button  variant="outline-secondary" onClick={() => handleButtonClick('profile')}>
              Profile
            </Button>  <hr />    
             <Button   variant="outline-secondary" onClick={() => handleButtonClick('edit')}>
              Edit
            </Button><hr />
            <Button   variant="outline-secondary" onClick={() => handleButtonClick('programs')}>
              Programs
            </Button><hr />
            <Button   variant="outline-secondary" onClick={() => handleButtonClick('CalculateBmi')}>
              Calculate Your BMI
            </Button><hr />
            <Button   variant="outline-secondary"  onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Col>
        <Col xs={9} className="content overflow-auto">
          
          {currentPage === 'profile' && <Profile />}
          {currentPage === 'edit' && <Edit />}
          {currentPage === 'programs' && <Programs/>}
          {currentPage === 'CalculateBmi' && <BMI />}



        </Col>
      </Row>
    </Container>
  );
}  
  
 