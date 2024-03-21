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
import { connectWithPeerServer } from "../realTimeCommunication/webRtcHanler";
import phone from "../assets/phone.png";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [locationErrorOccurred, setLocationErrorOccurred] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mousePosition, setMousePosition]= useState({x:0, y:0})

  const locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const handleLogin = () => {
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
    console.error(error);
    setLocationErrorOccurred(true);
  };
  const myLocation = useSelector((state: RootState) => state.map.myLocation);

  useEffect(() => {
    // commenting out for development purposes
    // navigator.geolocation.getCurrentPosition(success, error, locationOptions);
    success(getFakeLocations() as GeolocationPosition);
  }, []);
  useEffect(() => {
    if (myLocation) {
      connectWithIoSocket();
      connectWithPeerServer();
    }
  }, [myLocation]);
  // #FAE4DC
  // #F3DED5
  const handleMouseMove= (e:React.MouseEvent<HTMLDivElement>)=>{
    let bonds= e.currentTarget.getBoundingClientRect()
    let xPosition= e.clientX-bonds.left;
    let yPosition= e.clientY-bonds.top;
    setMousePosition({x:xPosition, y:yPosition})
  }

  return (
    <>
      <section className="  w-full h-full lg:flex lg:flex-row bg-white">
        <div className=" lg:w-1/2 moveInLeftBg bg-tertiary h-screen flex flex-row justify-center  items-center">
          <div onMouseMove={handleMouseMove} className="moveInLeft border-primary relative border-2 border-none flex flex-col justify-center items-center shadow-[7px_7px_7px_5px_#7736E0] w-3/4 md:w-3/5  h-[400px] bg-primary">
          <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient( 200px circle at ${mousePosition.x}px ${mousePosition.y}px, #9ef01a, transparent 60%)`,
              }}
            />
            <Logo />
            <Input
              userName={userName}
              setUserName={setUserName}
              onClickHandler={handleLogin}
              disabled={!isUserNameValid(userName) || locationErrorOccurred}
            />
          </div>
        </div>

        <div className="lg:w-1/2 lg:h-screen  max-h-screen hidden md:visible lg:flex flex-col justify-center items-center bg-primary ">
          <img
            src={phone}
            alt="phone"
            className=" header lg:h-[650px] h-[500px] mt-16"
          />
        </div>
      </section>
    </>
  );
}
