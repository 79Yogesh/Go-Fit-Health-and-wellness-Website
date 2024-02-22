import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchuserByEmail, updateuser, deleteuser } from "../../service/userservice";
import { useNavigate } from "react-router-dom";


export function Edit() {
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState({ email: "", username: "", phone: "", age: "", bloodgroup: "", weight: "", height: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentuser, setCurrentuser] = useState("");
  const [showDialog, setShowDialog] = useState(false); // Define showDialog state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {                 
      const result = await updateuser(formData, params.email);
      console.log(params.email);
      setIsSubmitted(true);
      setTimeout(() => {
        alert('User Updated')
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStudentDelete = async () => {
    try {
      await deleteuser(params.email); // Use params.email instead of useremail
      populateuserState();         // Assuming populateStudentState is defined
      closeModalDialog();
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  }

  const populateuserState = async () => {
    try {
      const result = await fetchuserByEmail(params.email);
      setFormData(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    populateuserState();
  }, [params.email]);

  const openModalDialog = () => {
    setShowDialog(true);
  }

  const closeModalDialog = () => {
    setShowDialog(false);
  }

  const containerStyle = {

    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    width: '70%',
    marginTop: '-20px'
  };

  return (
    <>
      <div>
        {formData ? (
          <Container style={containerStyle}>
            <Form onSubmit={handleSubmit}>
              <Alert className="text-center" variant="primary"> Update Yout Additional Information</Alert>

              
             
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.email}
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                      style={{width:"400px"}}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.username}
                      placeholder="Enter name"
                      name="username"
                      onChange={handleChange}
                      style={{width:"400px"}}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.phone}
                      placeholder="Enter Mobile No"
                      name="phone"
                      onChange={handleChange}
                      style={{width:"400px"}}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.age}
                      placeholder="Enter Age"
                      name="age"
                      onChange={handleChange}
                      style={{width:"400px"}}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.bloodgroup}
                      placeholder="Enter Blood Group"
                      name="bloodgroup"
                      onChange={handleChange}
                      style={{width:"400px"}}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      type="Number"
                      value={formData.weight}
                      placeholder="Enter Weight"
                      name="weight"
                      onChange={handleChange}
                      style={{width:"400px"}}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <table cellPadding={40}>
                <tr>
                  <td><Form.Group className="mb-3">
                    <Form.Label>Height</Form.Label>
                    <Form.Control
                      type="Number"
                      value={formData.height}
                      placeholder="Enter height"
                      name="height"
                      onChange={handleChange}
                      style={{width:"400px"}}
                    />
                  </Form.Group></td>   
                  <td>   Gender:
                            <Form.Group className="mb-3" style={{ justifyContent:'center' }}>
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    value="male"
                                    onChange={handleChange}
                                    checked={formData.gender === "male" ? true : false}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    value="female"
                                    onChange={handleChange}
                                    checked={formData.gender === "female" ? true : false}
                                />
                            </Form.Group></td>
                </tr>
              </table>

              <Row style={{ textAlign: 'center' }}>

                <Col >
                  <Button variant="success" type="submit" style={{ width: '40%' }}>
                    Update Details
                  </Button>


                </Col>
              </Row>
            </Form>
          </Container>


        ) : (<p>No data found for the given email.</p>)}
        <Row style={{ justifyContent: 'center' }}>
          <Button
            variant="danger"
            style={{ width: '34%' }}
            type="submit"
            onClick={() => {
              openModalDialog();
              setCurrentuser(formData.email);
            }}
          >
           Delete Yout Account
          </Button>
        </Row>

        <Modal show={showDialog} onHide={closeModalDialog}>
          <Modal.Header closeButton> <Modal.Title>Confirmation</Modal.Title>           </Modal.Header>
          <Modal.Body>Do you really want to delete with e-mail {currentuser}?</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => {
              handleStudentDelete();
            }}>
              Yes
            </Button>
            <Button variant="danger" onClick={closeModalDialog}>
              No
            </Button>
          </Modal.Footer>

        </Modal>
      </div>
    </>
  );
}