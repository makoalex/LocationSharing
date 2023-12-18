import React from "react";
import { useDispatch } from "react-redux";
import { markerProps } from "../Types";
import locationMarker from "../assets/locationMarker.svg";
import { setCardChoseOption } from "./mapSlice";

export default function Marker(props: markerProps) {
  const { myself, coords, lat, lng, socketId, username } = props;
  const dispatch = useDispatch();


  const handleCardChosenOption = () => {
    if (!myself) {
      dispatch(
        setCardChoseOption({
          socketId,
          username,
          coords,
        })
      );
   
    }
  };


  return (
    <div
      className="flex flex-col justify-center items-center relative"
      onClick={handleCardChosenOption}
    >
      <img
        src={locationMarker}
        alt={username}
        className="w-[35px] h-[50px] hover:translate-y-2 hover:transition-all"
      />
      <p className="font-primary text-lg">
        {myself ? "me" : username}
      </p>
    </div>
  );
}
