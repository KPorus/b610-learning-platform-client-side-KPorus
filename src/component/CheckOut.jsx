import React from 'react';
import toast from 'react-hot-toast';

const CheckOut = () => {
    let submit =()=>
    {
        toast.success("Your request of get acsess has been sent. Wait for the confirmation")
    }
    return (
        <div className='text-center'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Please fill up the check out form to 
                        get acsess of the course.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Credit-card</span>
                                </label>
                                <input type="number" placeholder="900,48454,0000" className="input input-bordered" />
    
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={submit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;