import React from "react";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row h-[30px] gap-3  bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF] justify-center items-center">
        <h6 className="text-white bg-green-600 font-light  px-2 rounded-md">
          NEW
        </h6>
        <p className="text-green-600 text-[12px] font-semibold">
          AI Feature Added
        </p>
      </div>
      <div className="flex flex-row justify-around px-9 ">
        <div>
          <img className="pt-3 px-9" src={logo} alt="" />
        </div>
        <div>
          <ul className="flex flex-row items-center justify-center gap-4 pt-3">
            <li>Home</li>
            <li>Features</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-row gap-2 pt-3 px-5">
          <button className="bg-green-600 text-white tracking-wider rounded-full text-[13px] px-5 active:scale-95">
            Get Started
          </button>
          <button className="text-[14px] border-2 px-4 rounded-full border-black">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
