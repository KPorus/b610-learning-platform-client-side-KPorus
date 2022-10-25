import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Home = () => {
    return (
        <div>
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
                            Take a journey with us. Toward your successful career. Use our
                            content to enrich your knowledge in your field.
                        </p>
                        <Link to='/reg'>
                            <button className='btn btn-primary'>Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Login></Login>
            </div>
            <h1 className="text-center font-bold font-[Lato] text-4xl m-2">Course Summary</h1>
            <div className="flex mx-32 gap-2 p-4">
                <div className='card card-compact w-96 bg-base-200 shadow-xl'>
                    <figure>
                        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='card card-compact w-96 bg-base-200 shadow-xl'>
                    <figure>
                        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className='card card-compact w-96 bg-base-200 shadow-xl'>
                    <figure>
                        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-around m-2">
                <Link to='/courses'> <button className="btn btn-active btn-primary">Courses List</button></Link>
            </div>
        </div>
    );
};

export default Home;
