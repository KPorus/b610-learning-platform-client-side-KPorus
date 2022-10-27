import React from 'react';
import Course from './Course';

const CourseDetail = (props) => {
    let course = props.product;
    return (
        <div className='grid grid-cols-2'>
            {
                course.map(data => <Course data={data} key={data.id}></Course>)
            }
        </div>
    );
};

export default CourseDetail;