import React from 'react';
import './NavigationBar.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import indexImg from '../../../assets/index 1.png'

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='mb-5'>
                <Container>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                           <Link to="/category/0" className='anchor'>Home</Link>
                           <Link to="/about" className='anchor'>About</Link>
                           <Link to="/career" className='anchor'>Career</Link>
                        </Nav>

                        <Nav className="ms-auto">
                           <Link href=""> <img src={indexImg} alt="" className='img-logo' /></Link>
                           <Link to="/login"><Button variant="secondary">Login</Button></Link>
                        </Nav>
                      </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;