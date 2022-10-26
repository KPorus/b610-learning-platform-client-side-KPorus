import React from 'react';

const Course = ({ data }) => {
    let { id, title, image, description } = data;
    console.log(id, title);
    return (

        <div className='card card-compact w-96 bg-base-200 shadow-xl m-4'>
            <figure>
                <img src={image} alt='Shoes' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p>{description}</p>
                <div className='card-actions justify-end'>
                    {/* <Link to={`${user ? "check-out" :  "/reg"}`}><button className='btn btn-primary'>Get Access</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default Course;