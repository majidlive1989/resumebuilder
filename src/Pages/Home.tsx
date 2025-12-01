import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Brands from "../component/Brands";
import Features from "../component/Features";
import Footer from "../component/Footer";
import PreFooter from "../component/PreFooter";
import Testimonial from "../component/Testimontal";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div className="flex flex-row justify-center items-center pt-15">
        <span>Trusting by leading brands, including</span>
      </div>
      <div>
        <Brands />
      </div>
      <Features />
      <Testimonial />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Home;
