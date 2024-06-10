import React from "react";
import Hero from "../Homepage/Hero";
import Services from "../Homepage/Services";
import Pricing from "../Homepage/Pricing";
import Info from "../Homepage/Info";
import AboutUs from "../Homepage/AboutUs";
import Testimonial from "../Homepage/Testimonial";
import Team from "../Homepage/Team";
import ContactUs from "../Homepage/ContactUs";
import Navbar from "../Body/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonial />
      <Info />
      <Services />
      <Pricing />
      <Team />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
