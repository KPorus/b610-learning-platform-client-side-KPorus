import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetail from './CourseDetail';

const Courses = () => {
    // const [state, setstate] = useState("");
    // useEffect(() => {
    //     fetch('http://localhost:5000/allcourses')
    //     .then(res => res.json())
    //     .then(data => setstate(data))
    // }, []);

    let alldata = useLoaderData()

    return (
        <div className='m-6 flex'>
            <div className='w-1/4'>
                <div className="btn-group btn-group-vertical">
                    <button className="btn btn-active">Button</button>
                    <button className="btn">Button</button>
                    <button className="btn">Button</button>
                </div>
            </div>
            <div className="w-9/12 ">
                <CourseDetail product={alldata}></CourseDetail>
            </div>
        </div>
    );
};

export default Courses;