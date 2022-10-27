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
    let id = { alldata }
    let id1 = id.alldata[0].catagory_id;
    let id2 = id.alldata[2].catagory_id;
    return (
        <div className='m-6 md:flex'>
            <div className='w-1/4'>
                <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                    <li> <Link to={`/allcourses/${id1}`}><button className="btn">Web Development</button></Link></li>
                    <li> <Link to={`/allcourses/${id2}`}><button className="btn">Programing</button></Link></li>
                </ul>
            </div>
            <div className="w-9/12 ">
                <CourseDetail product={alldata}></CourseDetail>
            </div>
        </div>
    );
};

export default Courses;