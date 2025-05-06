import React from "react";
import { Outlet } from "react-router";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="h-[60vh]">
      <Slider></Slider>
    </div>
  );
};

export default Home;
