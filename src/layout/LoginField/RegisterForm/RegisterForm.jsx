import React from 'react';
import './RegisterForm.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../pages/Home/AuthProvider/AuthProvider';
import { useState } from 'react';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const RegisterForm = () => {
    const { createUsersWithEmail } = useContext(AuthContext);
    const [error , setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleRegistration = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const photoUrl = event.target.url.value;
        const numbers = event.target.number.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name,photoUrl,email,numbers,password);
        setSuccess("");
        setError("");

        if(password.length < 6){
           setError("Please fillUp your password minimum 6 Charecter")
           return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
           setError("Please AtLeast minimum One UpperCase")
           return;
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError("Please AtLeast minimum One Number")
            return;
        }
        else if(!/(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/.test(password)){
            setError("Please AtLeast minimum use special character")
            return;
        }

        // for create user emails
        createUsersWithEmail(email, password)
        .then(result =>{
            const user = result.user;
            event.target.reset();
            setSuccess("Form submit has been SuccessFully");
            sendVerification(result.user);
            updateProfiles(result.user, name, photoUrl);
            navigate("/login");
            console.log(user)
        })
        .catch(error =>{
            console.log(error.message)
        })
      }

      /// for displayName and photo url update firebase
      const updateProfiles = (users, name, photo) =>{
           updateProfile(users, {
            displayName : name,
            photoURL : photo,
           })
           .then(() =>{
               console.log("new name and photoUrl updated");
           })
           .catch(error =>{
              console.log(error);
           })
      }

      /// for send email verifications 
      const sendVerification = (verified) =>{
        sendEmailVerification(verified)
        .then(() =>{
            alert("send verify email message");
        })
        .catch((error) =>{
            console.log(error.message);
        })
      }

    return (
        <div>
             <Container className='mt-5'>
              <Row>
                 <Col lg={{ span: 6, offset: 3 }}>
                    <div className='form-div'>
                        <h1>Register your account</h1>
                        <hr className='HR' />
                        <Form method="POST" onSubmit={ handleRegistration }>
                           <Form.Group className="mb-3" >
                                <Form.Label className='text'>Your Name</Form.Label>
                                <Form.Control type="text" name="name" required placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label className='text'>Photo URL</Form.Label>
                                <Form.Control type="text" name="url" required placeholder="Enter your password" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label className='text'>Phone Number</Form.Label>
                                <Form.Control type="tel" name="number" required placeholder="Enter your phone number" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label className='text'>Email address</Form.Label>
                                <Form.Control type="email" name="email" required placeholder="Enter your email address" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label className='text'>Password</Form.Label>
                                <Form.Control type="password" name="password" required placeholder="Enter your Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" required label="Accept Term & Conditions" />
                            </Form.Group>

                            <button className='btnInfos mb-4'> Register </button>
                            <p>Already create An Account ?  
                                <Link to="/login" className='text-decoration-none'> <span className='linear'>Login</span></Link>
                            </p>
                            <span>{error}</span>
                            <span>{success}</span>
                        </Form>
                    </div>
                 </Col>
              </Row>
          </Container>
        </div>
    );
};

export default RegisterForm;