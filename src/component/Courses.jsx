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
    console.log(alldata);
    let unique = [...new Set(alldata.map(n=>n.catagory_id))]
    console.log(unique);
    return (
        <div className='m-6 md:flex'>
            <div className='w-1/4'>
                <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                    {
                        unique.map(n => 
                        <li key={n}>{
                            (n === '01')? 
                            <Link to={`/allcourses/${n}`}><button className="btn">Web Development</button></Link>
                            :
                            <Link to={`/allcourses/${n}`}><button className="btn">Programing</button></Link>
                        }</li>
                        )
                    }
                    {/* <li> <Link to={`/allcourses/${id1}`}><button className="btn">Web Development</button></Link></li>
                    <li> <Link to={`/allcourses/${id2}`}><button className="btn">Programing</button></Link></li> */}
                </ul>
            </div>
            <div className="w-9/12 ">
                <CourseDetail product={alldata}></CourseDetail>
            </div>
        </div>
    );
};

export default Courses;