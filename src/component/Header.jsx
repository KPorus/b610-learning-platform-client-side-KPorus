import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='drawer sm:h-[87px]'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <div className='w-full navbar bg-base-300'>
          <div className='flex-none lg:hidden'>
            <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </label>
          </div>
          <div className='flex-1 px-2 mx-2'>
            <Link to='/'>
              <div className='flex items-center font-bold text-xl'>
                <img
                  src='https://img.icons8.com/fluency/48/000000/student-center.png'
                  alt='navIcon'
                />
                Student Center
              </div>
            </Link>
          </div>
          <div className='flex-none hidden lg:block'>
            <ul className='menu menu-horizontal'>
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
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <div className='avatar placeholder'>
                <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
                  <span>MX</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100'>
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
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <div className='avatar placeholder'>
            <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
              <span>MX</span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
