import React from "react";
import insta from "../img/instagram.svg";
import framer from "../img/framer.svg";
import microsoft from "../img/microsoft.svg";
import huawei from "../img/huawei.svg";
import walmart from "../img/walmart.svg";

const Brands = () => {
  return (
    <div>
      <div className="flex flex-row justify-center gap-23 pt-9  *:w-30">
        <img src={insta} alt="" />
        <img src={framer} alt="" />
        <img src={microsoft} alt="" />
        <img src={huawei} alt="" />
        <img src={walmart} alt="" />
      </div>
    </div>
  );
};

export default Brands;
