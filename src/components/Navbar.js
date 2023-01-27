import React, { useState,useEffect,useContext } from 'react'
import {Navbar,Nav,Container,Modal,Button,Row,Col,Form} from 'react-bootstrap';
import '../style/index.css';
import {NavLink} from 'react-router-dom';

const NotAuthRoutes=[
  {name:"Home",url:'/'},
  {name:"Shop",url:'/shop'},
]

const navStyle={
   textDecoration:'none'
}

function NavbarComponent(props) {
 
  const [show, setshow] = useState(false);
  const [phoneNumber, setphoneNumber] = useState("");
  const [username, setusername] = useState("");


  const handleLogin=()=>{
    if(phoneNumber.length===10){
      let data={phoneNumber,username};
      localStorage.setItem("user",JSON.stringify(data));
      setshow(false);
      setphoneNumber('');
      setusername('');
      props.setuser({
        username:username,
        phoneNumber:phoneNumber
       });
    }else{
      alert("Mobile Number should be of 10 digits.");
    }
  }

  return (
      <>
        <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
          <Container className='my-2'>
            <NavLink to='/'  style={navStyle}>
               <Navbar.Brand href="#home" >Fashiop</Navbar.Brand>
            </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {
                NotAuthRoutes.map((item)=>(
                <NavLink style={navStyle} to={`${item.url}`}>
                  <Nav.Link href={`#${item.name}`}>{item.name}</Nav.Link>
                </NavLink>
                ))
              }
                <Button style={{borderRadius:'1.25rem'}}   onClick={()=>setshow(true)}
                >Register/Login</Button>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal show={show} onHide={()=>setshow(false)} centered>
          <div>
            <Row>
              <Col lg={5} xs={12} className='bg-primary text-white p-4'>
                <h4>Login</h4>
                <div style={{margin:'5rem 0rem'}}>
                    <p>Get access to your</p>
                    <p>Orders, Wishlist and </p>
                    <p>Recommendations</p>
                </div>
              </Col>
              <Col lg={7} xs={12}>
                 <Modal.Body>
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" value={phoneNumber} 
                      onChange={(e)=>setphoneNumber(e.target.value)}  placeholder='Enter Mobile Number'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="text" value={username} 
                      onChange={(e)=>setusername(e.target.value)}  placeholder='Enter User Name'/>
                    </Form.Group>
                    <p className='text-muted my-3'>By continuing, you agree to Fashiop's Terms of Use and Privacy Policy.</p>
                    <Button variant="primary" className='w-100' onClick={()=>handleLogin()}>
                      Login
                    </Button>
                  </div>
                  <hr/>
                  <div>
                    <Button variant="outline-warning" className='w-100' onClick={()=>setshow(false)}>
                      Close
                    </Button>
                  </div>
                 </Modal.Body>
              </Col>
            </Row>
          </div>
        </Modal>
      </>
  )
}

export default NavbarComponent;
