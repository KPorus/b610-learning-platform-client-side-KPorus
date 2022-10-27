import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryCourse from './CatagoryCourse';

const WebCourse = () => {
    let webData = useLoaderData()
    console.log(webData);
    return (
        <div className='md:flex m-5'>
            {
                webData.map(n=><CatagoryCourse data = {n}></CatagoryCourse>)
            }
        </div>
    );
};

export default WebCourse;