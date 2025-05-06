import React from "react";
import { Outlet } from "react-router";
import Slider from "../Slider/Slider";
import PartnerBank from "../PartnerBank/PartnerBank";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Transaction from "../Transactions/Transactions";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PartnerBank></PartnerBank>
      <Transaction></Transaction>
      
    </div>
  );
};

export default Home;
