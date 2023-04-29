import React from 'react';
import './News.css'
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const News = (category) => {
    // console.log(category)
    const {_id , author, details, rating, thumbnail_url, image_url, title, total_view} = category.category;

    return (
        <div className='news-main-div'>
            <div className='title-content d-flex align-items-center justify-content-between'>
                <div className='person-info d-flex align-items-center'>
                    <img src={thumbnail_url} alt="" className='img-person' />
                      <div className='person-bio'>
                         <h4>{author.name ? author.name : "Unknown Name"}</h4>
                         <p>{author.published_date ? author.published_date : ""}</p>
                      </div>
                </div>
                <div className='icons'>
                   <FaBookmark />
                   <FaShareAlt />
                </div>
            </div>

              <div className='body-content'> 
                 <h5>{title}</h5>
                 <img src={image_url} alt="" className='big-img' />
                 <p>{details.length < 250 ? <>{details}</> : <> {details.slice(0, 250)}... <span className='show-more'><Link to={`/news/${_id}`}>Read more</Link></span> </> } </p>
                 <hr />

                 <div className='ratings d-flex align-items-center justify-content-between'>
                     <div className='stars d-flex align-items-center'>
                        <Rating 
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar className='symbol' />}
                            placeholderSymbol={<FaStar className='symbol' />}
                            fullSymbol={<FaStar className='symbol' />}
                        ></Rating>
                        <p>{rating?.number}</p>
                     </div>
                     <div className='view d-flex align-items-center'>
                        <FaEye className='eye-icon' />
                        <span>{total_view}</span>
                     </div>
                 </div>
              </div>

        </div>
    );
};

export default News;