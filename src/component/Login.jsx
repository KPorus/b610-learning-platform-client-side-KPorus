import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";

const Login = () => {
  const {googleLogin} =useContext(AuthContext);

  let googleProvider = new GoogleAuthProvider();
  let handleGoogleLogin = ()=>
  {
    googleLogin(googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user)
      // ...
    }).catch((error) => {
      console.log(error);
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // // ...
    });
  }
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:textcenter'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Welcome to student center.
            Build your career with us.
            Login Now to use our content.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                name="email"
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                name="password"
                className='input input-bordered'
                required
              />
              <label className='label'>
               
                  Forgot password?
                
              </label>
             <small> <Link to="/reg">New here!! Create New Account</Link></small>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
              <button className="btn btn-accent mt-2"onClick={handleGoogleLogin}><FcGoogle className="text-2xl mr-2"></FcGoogle>Google Login</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
