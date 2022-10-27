import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryCourse = ({data}) => {
    console.log(data);
    let {id,image,title,description} = data;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 m-auto mb-3 md:w-[32%]">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="dark:text-gray-100">{description}</p>
                </div>
               <div className='md:flex justify-between md:inline-block'>
               <Link to={`/course-detail/${id}`}><button className='btn btn-primary m-2 text-center w-44 md:w-[5rem]'>View More</button></Link>
                <Link to="/check-out" ><button className='btn btn-primary text-center m-2 sm:w-28 w-44'>Get Access</button></Link>
               </div>
            </div>
        </div>
    );
};

export default CatagoryCourse;