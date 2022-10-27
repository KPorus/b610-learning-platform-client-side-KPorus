import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseExplain = () => {
    let detail = useLoaderData()
    console.log(detail);
    return (
        <div>
            hi
        </div>
    );
};

export default CourseExplain;