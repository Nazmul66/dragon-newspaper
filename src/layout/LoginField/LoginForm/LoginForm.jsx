import React, { useContext, useRef, useState } from 'react';
import './LoginForm.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../../FIrebase.config';
import { AuthContext } from '../../../pages/Home/AuthProvider/AuthProvider';

const auth = getAuth(app)

const LoginForm = () => {
    const { signIn } = useContext(AuthContext)
    const emailRef = useRef();
    const [error , setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)

    const from = location.state?.from?.pathname || "/category/0";

    const handleLogin = (event) =>{
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email,password);
        setSuccess("");
        setError("");

        // for login user form
         signIn( email, password)
          .then((result) =>{
             const users = result.user;
             setSuccess("user Login successFully", users)
             navigate(from, { replace : true });
             event.target.reset();
          })
          .catch((error) =>{
            setError(error.message)
          })
      }

      // reset password system
      const handleResetPass = (event) =>{
        //  console.log(emailRef.current.value)
         const email = emailRef.current.value;
         
         if(!email){
            alert("Provide your email address");
         }

         sendPasswordResetEmail(auth, email)
         .then(() =>{
            alert("please check your gmail to reset password");
         })
         .catch((error) =>{
            setError(error.message);
         })
      }


    return (
          <Container className='mt-5'>
              <Row>
                 <Col lg={{ span: 6, offset: 3 }}>
                    <div className='form-div'>
                        <h1>Login your account</h1>
                        <hr className='HR' />
                        <Form method="POST" onSubmit={ handleLogin } >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='text'>Email address</Form.Label>
                                <Form.Control type="email" name="email" ref={emailRef} placeholder="Enter your email address" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPassword">
                                <Form.Label className='text'>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Enter your Password" />
                            </Form.Group>

                            <button className='btnInfos mb-4'> Login </button>
                            <p>Don’t Have An Account ?  
                                <Link to="/register" className='text-decoration-none'> <span className='linear'>Register</span></Link>
                            </p>
                            <p className='text-decoration-none'>Forget password ?   
                                 Please <button onClick={ handleResetPass } className='linear btn btn-link p-0'>Reset</button>
                            </p>

                            <span className=''>{success}</span>
                            <span className=''>{error}</span>
                        </Form>
                    </div>
                 </Col>
              </Row>
          </Container>
    );
};

export default LoginForm;