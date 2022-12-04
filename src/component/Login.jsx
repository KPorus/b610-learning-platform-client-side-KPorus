import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { AuthContext } from "./Context/AuthProvider/AuthProvider";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { googleLogin, login, setLoading, setUser, forgetPassword } = useContext(AuthContext);


  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userInfo.email, userInfo.password)
      .then((result) => {
        toast.success("success");
        let user = result.user;
        setLoading(true)
        setUser(user);
        e.target.reset();
        navigate(from, {replace: true});
      })
      .catch((err) => {
        console.log(err);
        setErrors({ ...errors, general: err.message });
      });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const lengthError = password.length < 6;
    const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
    const noCapitalLetterError = !/[A-Z]{1,}/.test(password);

    if (lengthError) {
      setErrors({ ...errors, password: "Must be at least 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    }
    else if (noSymbolError) {
      setErrors({ ...errors, password: "Must have a unique number" });
      setUserInfo({ ...userInfo, password: " " });
    }
    else if (noCapitalLetterError) {
      setErrors({ ...errors, password: "Must have a capital letter" });
      setUserInfo({ ...userInfo, password: " " });
    }
    else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  let googleProvider = new GoogleAuthProvider();
  let handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user)
        toast.success("Login successfull!")
        navigate(from, {replace: true});
        // ...
      }).catch((error) => {
        console.log(error);
        toast.error("login failled")
      });
  }

  let resetPass = ()=>
  {
    setLoading(true);
    forgetPassword(userInfo.email)
    .then(() => {
      // Password reset email sent!
      // ..
      toast.success("Check your Mail. Reset password mail has been sent")
    })
    .catch((error) => {
      const errorMessage = error.message;
      setErrors({ ...errors, general: errorMessage });
      // ..
    });
  }

  return (
    <div className='hero min-h-screen font-bold'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:textcenter'>
          <h1 className='sm:text-5xl text-3xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Welcome to student center.
            Build your career with us.
            Login Now to use our content.
          </p>
        </div>
        <form className='card flex-shrink-0 sm:w-full w-[72%] max-w-sm shadow-2xl ' onSubmit={handleSubmit}>
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
                onChange={handleEmailChange}
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
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
                onChange={handlePasswordChange}
              />
              {errors.password && <p className="text-red-600">{errors.password}</p>}
              <label className='sm:flex sm:px-1 sm:py-2 sm:justify-between sm:items-center py-2 font-medium'>
                <a href="#my-modal-2" className="btn">Forgot password?</a>
                <div className="modal" id="my-modal-2">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Reset Password!!</h3>
                    <p className="py-4">Click the reset button to reset password</p>
                    <div className="modal-action">
                      <a href="#" className="btn" onClick={resetPass}>Reset Password</a>
                    </div>
                  </div>
                </div>
              </label>
              <small> <Link to="/reg">New here!! Create New Account</Link></small>
            </div>
            <div className='form-control mt-6'>
              {errors.general && <p className="text-red-600">{errors.general}</p>}
              <button className='btn btn-primary'>Login</button>
              <button className="btn btn-accent mt-2" onClick={handleGoogleLogin}><FcGoogle className="text-2xl mr-2"></FcGoogle>Google Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
