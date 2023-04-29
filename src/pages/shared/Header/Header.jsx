import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import imgEd from '../../../assets/logo.png'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import moment from 'moment/moment';
import indexImg from '../../../assets/index 1.png'
import { useContext } from 'react';
import { AuthContext } from '../../Home/AuthProvider/AuthProvider';

const Header = () => {
   const {user, signOutForm} = useContext(AuthContext);
   // const [users, setUsers] = useState(null);

   const handleLogOut = () =>{
      signOutForm()
      .then(() =>{
         console.log("signOut");
      })
      .catch((error) =>{
         console.log(error.message);
      })
   }

    return (
        <div>
        <Container>
           <Row>
              <Col>
                <div className='py-5'>
                  <div className='text-center header-content'>
                     <img src={imgEd} alt="" className='headImg' />
                     <p className='text-secondary'>Journalism Without Fear or Favour</p>
                     <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                  </div>

                  <div className='headLine'>
                     <Button variant="danger">Latest</Button>
                     <Marquee className='marks' speed={100} delay={1} direction={'right'} pauseOnHover={true} gradientColor={[0]}>
                        Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
                     </Marquee>
                  </div>
               </div>

                 <Navbar bg="light" expand="lg" className='mb-5'>
                   <Container>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                           <Link to="" className='anchor'>Home</Link>
                           <Link to="/about" className='anchor'>About</Link>
                           <Link to="/career" className='anchor'>Career</Link>
                        </Nav>

                        <Nav className="ms-auto align-items-center">
                           {
                              user ? <Nav.Link href="#home"> <img src={user.photoURL} alt="" className='imgAuth mx-2' /></Nav.Link> :
                              <Link href="#home"> <img src={indexImg} alt="" className='imgAuth' /></Link> 
                           }                  
                              {
                                 user ? 
                                  <Button variant="secondary" className='mx-2' onClick={ handleLogOut }>LogOut</Button> :
                                  <Link to="/login"><Button variant="primary" className='mx-2'>Login</Button></Link>
                              }
                        </Nav>
                      </Navbar.Collapse>
                     </Container>
                  </Navbar>
              </Col>
           </Row>
        </Container>
     </div>
    );
};

export default Header;