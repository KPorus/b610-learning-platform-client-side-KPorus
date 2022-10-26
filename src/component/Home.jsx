import React, { useContext} from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";
import Login from "./Login";

const Home = () => {
    const {user} = useContext(AuthContext);
    let data = useLoaderData()
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
                        <img src={data[0].image} alt='Shoes' />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>{data[0].title}</h2>
                        <p>{data[0].description}</p>
                        <div className='card-actions justify-end'>
                        <Link to={`${user ? "check-out" :  "/reg"}`}><button className='btn btn-primary'>Get Access</button></Link>
                        </div>
                    </div>
                </div>
                <div className='card card-compact w-96 bg-base-200 shadow-xl'>
                    <figure>
                        <img src={data[1].image} alt='Shoes' />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>{data[1].title}</h2>
                        <p>{data[1].description}</p>
                        <div className='card-actions justify-end'>
                        <Link to={`${user ? "check-out" :  "/reg"}`}><button className='btn btn-primary'>Get Access</button></Link>
                        </div>
                    </div>
                </div>

                <div className='card card-compact w-96 bg-base-200 shadow-xl'>
                    <figure>
                        <img src={data[2].image} alt='Shoes' />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>{data[2].title}</h2>
                        <p>{data[2].description}</p>
                        <div className='card-actions justify-end'>
                            <Link to={`${user ? "check-out" :  "/reg"}`}><button className='btn btn-primary'>Get Access</button></Link>
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
