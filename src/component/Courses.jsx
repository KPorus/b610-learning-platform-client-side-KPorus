import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetail from './CourseDetail';

const Courses = () => {
    // const [state, setstate] = useState("");
    // useEffect(() => {
    //     fetch('http://localhost:5000/allcourses')
    //     .then(res => res.json())
    //     .then(data => setstate(data))
    // }, []);

    let alldata = useLoaderData()
    let id = {alldata}
    return (
        <div className='m-6 flex'>
            <div className='w-1/4'>
                <div className="btn-group btn-group-vertical">
                    <Link to={`/courses/${id.alldata[0].catagory_id}`}><button className="btn">Web Development</button></Link>
                    <Link to={`/courses/${id.alldata[2].catagory_id}`}><button className="btn">Programing</button></Link>
                </div>
            </div>
            <div className="w-9/12 ">
                <CourseDetail product={alldata}></CourseDetail>
            </div>
        </div>
    );
};

export default Courses;