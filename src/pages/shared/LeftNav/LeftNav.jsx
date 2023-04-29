import React from 'react';
import './LeftNav.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'
import frame from '../../../assets/Vector.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:4800/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);
    return (
        <div className='leftSide'>
              <h4>All Category</h4>
            <div className='px-4'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='catalogue'>
                            {category.name}
                        </Link>
                    </p>)
                }
            </div>

            <div>
              <div className='kidsDetails'>
                <img src={img1} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                  <div className='d-flex alien-items-center'>
                     <span>Sports</span>
                       <div className='d-flex alien-items-center date'>
                          <img src={frame} alt="" className='images'/>
                          <h5> Jan 4, 2022</h5>
                       </div>
                  </div>
              </div>

              <div className='kidsDetails'>
                <img src={img2} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                  <div className='d-flex alien-items-center'>
                     <span>Sports</span>
                       <div className='d-flex alien-items-center date'>
                          <img src={frame} alt="" className='images'/>
                          <h5> Jan 4, 2022</h5>
                       </div>
                  </div>
              </div>

              <div className='kidsDetails'>
                <img src={img3} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                  <div className='d-flex alien-items-center'>
                     <span>Sports</span>
                       <div className='d-flex alien-items-center date'>
                          <img src={frame} alt="" className='images'/>
                          <h5> Jan 4, 2022</h5>
                       </div>
                  </div>
              </div>
            </div>
        </div>
    );
};

export default LeftNav;