import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOption = (
    <>
      <li>
        <Link className="text-2xl" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-2xl" to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link className="text-2xl" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="text-2xl" to="/contact">
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="relative">
      <div className="navbar bg-slate-400 text-black lg:w-[1864px] z-30">
        <div className="navbar-start">
          <div className="dropdown z-30">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 bg-slate-100 rounded-box w-52 text-center"
            >
              {navOption}
            </ul>
          </div>
          <Link to="/" className="">
            <div className="flex gap-2 items-center">
              <img
                className="w-10 h-10 rounded"
                src="https://i.ibb.co/SNqRKLg/unnamed-cleanup-1-removebg-preview.png"
                alt=""
              />
              <p className="font-bold md:text-2xl">Job Portal</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center ">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end gap-x-10">
        
      
          {user ? (
            <>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-primary hover:bg-green-700">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
