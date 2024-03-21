import React from "react";
import LogoPic from "../assets/logo.png";

export default function Logo() {
  return (
    <>
      <img src={LogoPic} alt="logo" className="w-14 h-16 absolute left-2 top-0" />
    <div className="flex items-center mb-28 ">

      <h3
        data-testid="logo"
        className=" absolute top-8 left-8 font-primary text-2xl font-bold mt-10 "
      >
        SnapMap
        <p className=" text-sm  text-black/50 font-light font-secondary tracking-wider mt-2 ">
          Navigate and Connect with Friends
        </p>
      </h3>
    </div>
    </>
  );
}
