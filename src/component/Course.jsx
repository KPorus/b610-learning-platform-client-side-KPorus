import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ data }) => {
    let { id, title, image, description,catagory_id } = data;
    return (

        <div className='card card-compact w-[15rem] md:w-[17rem] bg-base-200 shadow-xl m-4'>
            <figure>
                <img src={image} alt='Shoes' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p>{description}</p>
                <div className='card-actions justify-end'>
                <Link to={`/course-detail/${id}`}><button className='btn btn-primary'>View More</button></Link>
                     <Link to="/check-out" ><button className='btn btn-primary'>Get Access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;