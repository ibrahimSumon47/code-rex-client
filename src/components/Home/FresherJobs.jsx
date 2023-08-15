import React from "react";
import { FaLocationPin } from "react-icons/fa6";
const FresherJobs = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold border-2 border-dotted my-5">
        Fresher Jobs Recommendation
      </h1>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-52 lg:gap-x-80 gap-y-10 md:px-5 px-7 mb-10">
        {/* card-1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title btn bg-red-100 hover:bg-none">
              Creative & Art
            </h2>
            <p className="font-bold">
              User Experience Designer - Employee Solutions
            </p>
            <div className="flex gap-5">
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" /> New York, USA
              </div>
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" />
                Full Time
              </div>
            </div>
            <div className="flex">
              <img
                src="https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo1.svg"
                alt=""
              />
              <p className="font-bold mt-3">Globe Solution Ltd.</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title btn bg-blue-200 rounded-full hover:bg-none text-blue-500">
              Finance & Accounting
            </h2>
            <p className="font-bold">
              Foreign Language Research Analyst (Chinese)
            </p>
            <div className="flex gap-5">
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" /> New York, USA
              </div>
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" />
                Full Time
              </div>
            </div>
            <div className="flex">
              <img
                src="https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo2.svg"
                alt=""
              />
              <p className="font-bold mt-3">Globe Solution Ltd.</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title btn bg-green-100 text-green-600 hover:bg-none">
              Medical
            </h2>
            <p className="font-bold">
              Medical Assistant, East Valley Primary Care
            </p>
            <div className="flex gap-5">
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" /> New York, USA
              </div>
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" />
                Full Time
              </div>
            </div>
            <div className="flex">
              <img
                src="https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo3.svg"
                alt=""
              />
              <p className="font-bold mt-3">Globe Solution Ltd.</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
        {/* card-4 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title btn bg-indigo-100 text-indigo-700 hover:bg-none">
              Corporate
            </h2>
            <p className="font-bold">
              Foreign Language Research Analyst (Chinese)
            </p>
            <div className="flex gap-5">
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" /> New York, USA
              </div>
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" />
                Full Time
              </div>
            </div>
            <div className="flex">
              <img
                src="https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo4.svg"
                alt=""
              />
              <p className="font-bold mt-3">Globe Solution Ltd.</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
        {/* card-5 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title btn bg-red-100 hover:bg-none">
              Creative & Art
            </h2>
            <p className="font-bold">
              User Experience Designer - Employee Solutions
            </p>
            <div className="flex gap-5">
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" /> New York, USA
              </div>
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" />
                Full Time
              </div>
            </div>
            <div className="flex">
              <img
                src="https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo5.svg"
                alt=""
              />
              <p className="font-bold mt-3">Globe Solution Ltd.</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
        {/* card-1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title btn bg-blue-100 text-blue-600 hover:bg-none">
              Programming & IT
            </h2>
            <p className="font-bold">
              User Experience Designer - Employee Solutions
            </p>
            <div className="flex gap-5">
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" /> New York, USA
              </div>
              <div className="flex gap-3">
                <FaLocationPin className="mt-1" />
                Full Time
              </div>
            </div>
            <div className="flex">
              <img
                src="https://preview.colorlib.com/theme/joblab/assets/img/icon/company-logo1.svg"
                alt=""
              />
              <p className="font-bold mt-3">Globe Solution Ltd.</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center text-center">
        <button className="btn btn-primary">Find More</button>
      </div>
    </div>
  );
};

export default FresherJobs;
