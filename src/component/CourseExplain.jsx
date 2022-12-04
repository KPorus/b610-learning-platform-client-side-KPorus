import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseExplain = () => {
    let detail = useLoaderData()
    let { title, price, description,image } = detail;
    console.log(title);
    return (
      <div className='text-center'>
          <div className="flex flex-col max-w-[85rem] p-6 space-y-6 overflow-hidden rounded-lg shadow-md m-8">
            <div>
                <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                <p className="text-sm ">{description}</p>
                <p className="mt-1 text-2xl font-medium">${price}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2 m-auto">
                    <Link to="/check-out" ><button className='btn btn-primary'>Get Access</button></Link>
                </div>
            </div>
        </div>
      </div>
    );
};

export default CourseExplain;