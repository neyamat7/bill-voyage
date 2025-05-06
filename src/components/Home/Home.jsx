import React from "react";
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
      <Services></Services>
      <AboutUs></AboutUs>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
