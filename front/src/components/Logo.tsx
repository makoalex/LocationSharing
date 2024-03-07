import React from "react";

export default function Logo() {
  return (
    <div>
      <h3
        data-testid="logo"
        className=" absolute top-8 left-8 font-primary text-2xl font-bold"
      >
        SnapMap
        <p className=" text-sm mt-1 text-black/50 font-light font-secondary tracking-wider" >Navigate and Connect with Friends</p>
      </h3>
    </div>
  );
}
