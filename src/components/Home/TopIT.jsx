import React from "react";

const TopIT = () => {
  return (
    <div>
      <div>
        <h3 className="text-center font-bold text-4xl my-5">
          Top IT Companies in Bangladesh
        </h3>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-52 lg:gap-x-80 gap-y-10 md:px-5 mb-10 px-7">
          {/* Card-1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">TigerIT Bangladesh LTD.</h2>
              <p>
                Tiger it has 10 years of experience working in software
                development. It is one of the best software companies around
                Bangladesh to create the Automated Fingerprint Identification
                System AFIS. In 2008, for the general election of Bangladesh,
                Tiger it build a complete software of the national id and voter
                registration project. There are 20,000 personnel, 500id
                management servers made by Tiger it.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          {/* Card-2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Datasoft Systems BD ltd</h2>
              <p>
                Data Soft is well known as the first CMMI Level 5 software
                development company in Bangladesh. In both Corporate and public
                sectors, Data soft delivered innovative and cost effective
                technical services for the customers. In design and create
                projects, It has contributed significantly to the digitalization
                of Bangladesh.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          {/* Card-3 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Magnito Digital Limited</h2>
              <p>
                Magnito Digital is the largest digital agency of Bangladesh
                consisting of 70+ people. The magneto digital have deal with the
                largest clients of Bangladesh and solve problem by combining and
                creative strategies with data and technology. Magnito Digital
                becomes the ‘Campaign Asia-Pacific’ in the ‘Rest of South Asia’
                category. They believe that, they will drive the sustainable
                growth of technology & innovation.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-bold text-4xl my-5">
          Top IT Companies in World Wide
        </h3>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-52 lg:gap-x-80 gap-y-10 md:px-5 mb-10 px-7">
          {/* Card-1 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Microsoft Corporation</h2>
              <p>
                Microsoft Windows, Microsoft Office, and Internet Explorer,
                among other products, are used by nearly every business and
                professional around the world. Microsoft was established in
                1975, by Bill Gates and Paul Allen, and it has grown its market
                share by expanding its services beyond the operating system
                industry to other types of software's. It also used inorganic
                expansion to increase revenue by purchasing a number of firms.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          {/* Card-2 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">IBM</h2>
              <p>
                The firm began as a computer recording firm before being called
                IBM (International Business Machines) in 1924. IBM's
                headquarters are in Armonk, Future York, and the company has a
                comprehensive suite of software products and services that it is
                growing to meet the modern and rising demands of current and
                emerging users. Large income generators are cloud computation,
                cognitive computation, data analytic and the Internet of things,
                IT infrastructures, and securities. IBM's revenue is increasing
                by double digits, and they effectively strengthened in 2017.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          {/* Card-3 */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Accenture</h2>
              <p>
                The firm began as a computer recording firm before being called
                IBM (International Business Machines) in 1924. IBM's
                headquarters are in Armonk, Future York, and the company has a
                comprehensive suite of software products and services that it is
                growing to meet the modern and rising demands of current and
                emerging users. Large income generators are cloud computation,
                cognitive computation, data analytic and the Internet of things,
                IT infrastructures, and securities. IBM's revenue is increasing
                by double digits, and they effectively strengthened in 2017.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopIT;
