import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-around  bg-indigo-50">
      <div className="hero-content flex-col md:flex-col-reverse lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/7zRGVR5/Professional.png"
          className="mb-4 lg:mb-0 lg:max-w-screen-lg lg:self-start"
        />
        <div className="md:px-10 lg:px-0">
          <h1 className="text-6xl font-bold">One Step Closer To Your <span className="text-indigo-400">Dream Job</span></h1>
          <p className="py-6">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn bg-indigo-400 text-slate-50 font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
