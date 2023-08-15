import React from "react";
import Banner from "./Banner";
import FresherJobs from "./FresherJobs";
import ExperiencedJobs from "./ExperiencedJobs";
import TopIT from "./TopIT";
import Blog from "../Blog";

const Home = () => {
  return (
    <div>
      <Banner />
      <FresherJobs />
      <ExperiencedJobs />
      <TopIT />
      <Blog/>
    </div>
  );
};

export default Home;
