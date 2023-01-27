import React, { useState,useEffect ,useContext} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style/index.css';
import ModalComponent from '../components/ModalComponent';
import AuthContext from "../customHooks/auth-context";

function ProfileComponent() {

  const {user} = useContext(AuthContext);

  const [showModal, setshowModal] = useState(false);

  const [formData, setformData] = useState({
      fullname:'',
      username:'',
      mobileno:'',
      email:'',
      city:'',
      country:''
  });

  const {fullname,username,mobileno,email,city,country}=formData;

  useEffect(() => {
      setformData({
        username:user?.username,
        mobileno:user?.phoneNumber,
      })
  }, []);

  const onChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setshowModal(true);
  }

  return (
    <div className='py-4'>
      <ModalComponent showModal={showModal}     hideModal={setshowModal}>
        <div>
          <h4>Profile Information</h4>
          <hr/>
          <div>
            <p><strong>Full Name :</strong> {fullname}</p>
            <p><strong>Username :</strong> {username}</p>
            <p><strong>Mobile Number :</strong> {mobileno}</p>
            <p><strong>Email :</strong> {email}</p>
            <p><strong>City :</strong> {city}</p>
            <p><strong>Country :</strong>{country}</p>
          </div>
        </div>
      </ModalComponent>
      
      <Container className='my-4'>
        <h3 className='text-center'>Profile</h3>
        <div className='my-4'>
          <Row>
            <Col lg={2} xs={12}></Col>
            <Col lg={8} xs={12}>
              <Form onSubmit={(e)=>handleSubmit(e)}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" value={fullname} name="fullname" placeholder="Enter Name" 
                        onChange={(e)=>onChange(e)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext"
                      onChange={(e)=>onChange(e)} >
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" value={username} name="username" placeholder="Enter Username" 
                      onChange={(e)=>onChange(e)}  required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" value={mobileno} name="mobileno" placeholder="Enter Mobile Number" 
                      onChange={(e)=>onChange(e)}  required/>
                    </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value={email} name="email" placeholder="Enter email" 
                      onChange={(e)=>onChange(e)}  required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" value={city} name="city" placeholder="Enter City" 
                      onChange={(e)=>onChange(e)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" value={country} name="country" placeholder="Enter Country" 
                      onChange={(e)=>onChange(e)} required/>
                    </Form.Group>
                  </Col>
                </Row>
                <hr/>
                <Button type="submit" style={{float:'right'}} className='product-btn'>Save</Button>
              </Form>
            </Col>
            <Col lg={2} xs={12}></Col>
          </Row>
        </div>

      </Container>
    </div>
  )
}

export default ProfileComponent;