import React, { useContext, useState } from 'react';
import './RightNav.css'
import Qzone1 from "../../../assets/qZone1.png"
import Qzone2 from "../../../assets/qZone2.png"
import Qzone3 from "../../../assets/qZone3.png"
import { FaGoogle , FaGithub , FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../Home/AuthProvider/AuthProvider';

const RightNav = () => {
    const { GoogleSignIn, githubSignIn } = useContext(AuthContext);

    const handleGoogle = () =>{
        GoogleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch((error) => {
            console.log(error.message);
          });
    }

    const handleGithub = () =>{
        githubSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch((error) => {
            console.log(error.message);
          });
    }


    return (
        <div>
            {/* google and github signUp */}
            <div className=''>
                <h4 className='mb-3'>Login with</h4>
                <button className='btn-google' onClick={ handleGoogle }>
                    <FaGoogle />
                    <span className='ms-2'>Login With Google</span></button>
                <button className='btn-github' onClick={ handleGithub }>
                    <FaGithub />
                    <span className='ms-2'>Login With Github</span> </button>
            </div>

            {/* facebook , twitter and instagram socialLink */}
            <div className='social-link'>
               <h4 className='mb-3'>Find Us On</h4>
                <ul>
                    <li className='facebook'><a href="#" target='_blank'> <FaFacebookF /> Facebook</a></li>
                    <li className='twitter'><a href="#" target='_blank'><FaTwitter /> twitter</a></li>
                    <li><a href="#" target='_blank'><FaInstagram /> instagram</a></li>
                </ul>
            </div>

            <div className='images'>
                <h4>Q-Zone</h4>
                  <div className='QZone'>
                     <img src={Qzone1} alt="" />
                  </div>
                  <div className='QZone'>
                     <img src={Qzone2} alt="" />
                  </div>
                  <div className='QZone'>
                     <img src={Qzone3} alt="" />
                  </div>
            </div>

            <div className='colorFul-bg'>
                <h2>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='btn btn-danger'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;