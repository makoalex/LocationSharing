import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";

export default function Login() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/map");
  };
  const isUserNameValid = (userName: string) => {
    return (
      userName.length > 0 &&
      userName.length < 15 &&
      userName.match(/^[a-zA-Z0-9]+$/) &&
      !userName.includes(" ")
    );
  };

  return (
    <div className="section flex flex-row justify-center items-center w-full h-screen ">
      <div className="container relative border-2 border-black border-b-4 flex flex-col justify-center items-center w-3/4 md:w-3/5 lg:w-2/5 h-[350px] bg-primary mx-auto">
        <Logo />
        <Input
          userName={userName}
          setUserName={setUserName}
          onClickHandler={handleLogin}
          disabled={!isUserNameValid(userName)}
        />
      </div>
    </div>
  );
}
