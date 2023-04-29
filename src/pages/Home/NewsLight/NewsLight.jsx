import React from 'react';
import './NewsLight.css'
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {  FaLongArrowAltLeft } from 'react-icons/fa';
import imgEditors1 from '../../../assets/1.png';
import imgEditors2 from '../../../assets/2.png';
import imgEditors3 from '../../../assets/3.png';
import vector from '../../../assets/Vector.png'

const NewsLight = () => {
    const newsSingleData = useLoaderData();
    console.log(newsSingleData)
    const { category_id, image_url, details, title} = newsSingleData
    return (
        <div className='news-page'>
            <h3>Dragon News </h3>
            <div className='singleContainer'>
               <img src={image_url} alt="" className='img_71' />
               <h4>{title}</h4>
               <p>{details}</p>
               <Link to={`/category/${category_id}`}><Button className='btn btn-danger'><FaLongArrowAltLeft className='arrRight' /> All news in this category</Button></Link>
            </div>

              <h3>Editors Insight</h3>
            <div className='editors'>
               <div className='Editors_insight'>
                  <img src={imgEditors1} alt="" />
                  <p>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <div className='dates d-flex align-items-center'>
                        <img src={vector} alt="" className='dateVector' />
                        <span>Jan 4, 2022</span>
                    </div>
               </div>

               <div className='Editors_insight'>
                  <img src={imgEditors2} alt="" />
                  <p>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <div className='dates d-flex align-items-center'>
                        <img src={vector} alt="" className='dateVector' />
                        <span>Jan 4, 2022</span>
                    </div>
               </div>

               <div className='Editors_insight'>
                  <img src={imgEditors3} alt="" />
                  <p>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <div className='dates d-flex align-items-center'>
                        <img src={vector} alt="" className='dateVector' />
                        <span>Jan 4, 2022</span>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default NewsLight;