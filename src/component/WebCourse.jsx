import React from 'react';
import { useLoaderData } from 'react-router-dom';

const WebCourse = () => {
   let webData= useLoaderData()
   console.log(webData);
    return (
        <div>
            {webData.length}
        </div>
    );
};

export default WebCourse;