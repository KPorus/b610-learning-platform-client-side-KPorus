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

  const { googleLogin, login, setLoading,setUser } = useContext(AuthContext);


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
        console.log(location.state.from);
        navigate(location?.state?.from?.pathname);
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
    else if(noSymbolError)
    {
      setErrors({...errors,password:"Must have a unique number"});
      setUserInfo({...userInfo,password:" "});
    }
    else if(noCapitalLetterError)
    {
      setErrors({...errors,password:"Must have a capital letter"});
      setUserInfo({...userInfo,password:" "});
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
        // ...
      }).catch((error) => {
        console.log(error);
        toast.error("login failled")
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
        <form className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100' onSubmit={handleSubmit}>
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
              <label className='label'>

                Forgot password?

              </label>
              <small> <Link to="/reg">New here!! Create New Account</Link></small>
            </div>
            <div className='form-control mt-6'>
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
