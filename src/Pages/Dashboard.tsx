import React from "react";
import img from "../img/logo.svg";
import Dash from "../component/Dash";

const Dashboard = () => {
  return (
    <>
      <div className=" flex flex-row justify-between px-30 py-9 bg-white border-b-1 border-b-gray-200">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="flex flex-row gap-4 p-3">
          <p>Hi</p>
          <button className="border-1 border-gray-300 rounded-3xl px-4">
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-row">
        <Dash />
      </div>
    </>
  );
};

export default Dashboard;
