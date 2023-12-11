import React from "react";
import { mapState } from "../Types";
import { markerProps } from "../Types";
import locationMarker from "../assets/locationMarker.svg";

export default function Marker(props: markerProps) {
  const { myself, coords, lat, lng, socketId, username } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={locationMarker}
        alt={username}
        className="w-[35px] h-[50px] hover:translate-y-2 hover:transition-all"
      />
      <p className="font-primary text-lg text-accent">
        {myself ? "me" : username}
      </p>
    </div>
  );
}
