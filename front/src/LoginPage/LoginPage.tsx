import React, { FC, useEffect, useRef, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { setMyLocation } from "../MapPage/mapSlice";
import { useDispatch } from "react-redux";
import Logo from "../components/Logo";
import Input from "../components/Input";
import { getFakeLocations } from "./TestFakeLocation";



export default function Login() {
  const [userName, setUserName] = useState("");
  const [locationErrorOccurred, setLocationErrorOccurred] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

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

  const success = (position: GeolocationPosition) => {
    dispatch(
      setMyLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };

  const error = (error: GeolocationPositionError) => {
    console.log(" there was an error getting the location");
    console.log(error);
    setLocationErrorOccurred(true);
  };

  useEffect(() => {
    // commenting out for development purposes
    // navigator.geolocation.getCurrentPosition(success, error, locationOptions);
    success(getFakeLocations() as GeolocationPosition)
  }, []);

  return (
    <div className="section flex flex-row justify-center items-center w-full h-screen ">
      <div className="container relative border-2 border-black border-b-4 flex flex-col justify-center items-center w-3/4 md:w-3/5 lg:w-2/5 h-[350px] bg-primary mx-auto">
        <Logo />
        <Input
          userName={userName}
          setUserName={setUserName}
          onClickHandler={handleLogin}
          disabled={!isUserNameValid(userName) || locationErrorOccurred}
        />
      </div>
    </div>
  );
}
