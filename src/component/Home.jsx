import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://i.ibb.co/HtL4QMg/pexels-christina-morillo-1181671.jpg")`,
      }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-4 text-5xl font-bold'>
            Hello there. Welcome to student center
          </h1>
          <p className='mb-5 font-medium text-2xl'>
          Take a journey with us. Toward your successful career. Use our content to enrich your knowledge in your field.
          </p>
          <button className='btn btn-primary'>
            <Link to='/reg'>Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
