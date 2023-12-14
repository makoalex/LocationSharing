import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setMyLocation } from "../MapPage/mapSlice";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../components/Logo";
import Input from "../components/Input";

import { getFakeLocations } from "./TestFakeLocation";
import { RootState } from "../Types";
import { connectWithIoSocket } from "../SocketConnect/SocketConnect";
import { proceedWithLogin } from "../store/actions/LoginPageActions";


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
  const handleLogin =  () => {
    proceedWithLogin({
      username: userName,
      coords: {
        lng: myLocation?.lng,
        lat: myLocation?.lat,
      },
    });
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
  const myLocation = useSelector((state: RootState) => state.map.myLocation);

  useEffect(() => {
    // commenting out for development purposes
    // navigator.geolocation.getCurrentPosition(success, error, locationOptions);
    success(getFakeLocations() as GeolocationPosition);
  }, []);
   useEffect(()=>{
    if(myLocation){
      connectWithIoSocket()
    }

   } , [
    myLocation
  ])

  return (
    <div className="section flex flex-row justify-center items-center w-full h-screen ">
      <div className="container relative border-2 border-black rounded-md flex flex-col justify-center items-center shadow-[7px_7px_0px_0px_#0B2447] w-3/4 md:w-3/5 lg:w-2/5 h-[350px] bg-primary mx-auto">
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
