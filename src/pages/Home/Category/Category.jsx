import React from 'react';
import './Category.css'
import { useLoaderData, useParams } from 'react-router-dom';
import News from '../News/News';

const Category = () => {
    const {id} = useParams();
    const categories = useLoaderData();
    // console.log(categories)
    return (
        <div>
            {id && <h3 style={{ marginBottom: "30px" }} >Dragon News Home</h3>}
            {
                 categories.map(category => <News 
                    key={category._id} 
                    category={category}
                    ></News> )
            }
        </div>
    );
};

export default Category;