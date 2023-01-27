import React  ,{useContext} from 'react'
import { Navbar, Nav, Container, Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import AuthContext from "../customHooks/auth-context";


const navStyle = {
    textDecoration: 'none'
}


const AuthNavBar = (props) => {

    const {cartProduct,wishProduct} = useContext(AuthContext);


    const handleLogout = () => {
        localStorage.removeItem("user");
        props.setuser(null);
    }

    
    const AuthRoutes = [
        { name: "Home", url: '/' },
        { name: "Shop", url: '/shop' },
        { name: `Cart (${cartProduct.length})`, url: '/cart' },
        { name: `Wish List (${wishProduct.length})`, url: '/wish-list' },
        { name: "Profile", url: '/profile' },
    ]

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='my-2'>
                    <NavLink to='/' style={navStyle}>
                        <Navbar.Brand href="#home" >Fashiop</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {
                                AuthRoutes.map((item) => (
                                    <NavLink style={navStyle} to={`${item.url}`}>
                                        <Nav.Link href={`#${item.name}`}>{item.name}</Nav.Link>
                                    </NavLink>
                                ))
                            }
                            <Button style={{ borderRadius: '1.25rem' }} onClick={() => handleLogout()}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AuthNavBar;