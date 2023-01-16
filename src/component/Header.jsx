import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";
import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Header = () => {
  const { user, usersignOut } = useContext(AuthContext);
  const [toggle, settoggle] = useState(false);
  const [Class, setClass] = useState("dark-theme");

  let theme = (toggle) => {
    if (toggle === false && Class === "dark-theme") {
      settoggle(!toggle);
      setClass("light-theme");
    } else {
      settoggle(!toggle);
      setClass("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = Class;
  }, [Class]);

  let handleSignOut = () => {
    usersignOut()
      .then(() => {
        //signout
        toast.success("Logout successfull!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='navbar '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#ffff] text-slate-800 rounded-box w-52'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className='sm:block hidden'>
              <Link to='/login'>Login</Link>
            </li>
            <div className='navbar-end sm:hidden'>
              <button className='btn btn-ghost btn-square p-2 mr-9 w-[60px]'>
                {user ? (
                  <button className='uppercase' onClick={handleSignOut}>
                    LogOut
                  </button>
                ) : (
                  <Link to='/login'>Login</Link>
                )}
              </button>
              <button className='btn btn-ghost btn-circle'>
                <div className='avatar placeholder'>
                  <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt='user'></img>
                    ) : (
                      <span>MX</span>
                    )}
                  </div>
                </div>
              </button>

              <div className='sm:block hidden' onClick={() => theme(toggle)}>
                {toggle ? (
                  <BsFillMoonFill className='text-2xl' />
                ) : (
                  <BsFillSunFill className='text-2xl' />
                )}
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className='sm:block hidden' onClick={() => theme(toggle)}>
        {toggle ? (
          <BsFillMoonFill className='text-2xl' />
        ) : (
          <BsFillSunFill className='text-2xl' />
        )}
      </div>
      <div className='navbar-center'>
        <div className='btn btn-ghost normal-case text-xl'>
          <Link to='/' className='flex items-center'>
            <img
              src='https://img.icons8.com/fluency/48/000000/student-center.png'
              alt='nav'
            />
            ProgRise
          </Link>
        </div>
      </div>
      <div className='navbar-end '>
        <button className='btn btn-ghost btn-square p-2 mr-9 w-[60px] sm:block hidden'>
          {user ? (
            <button className='uppercase' onClick={handleSignOut}>
              LogOut
            </button>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </button>
        <button className='btn btn-ghost btn-circle sm:block hidden'>
          <div className='avatar placeholder'>
            <div className='bg-neutral-focus text-neutral-content rounded-full w-12 '>
              {user?.photoURL ? (
                <img src={user.photoURL} alt='user'></img>
              ) : (
                <span>MX</span>
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
