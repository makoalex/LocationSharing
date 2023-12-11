import React from "react";
import { mapState } from "../Types";
import { markerProps } from "../Types";
import locationMarker from "../assets/locationMarker.svg";

export default function Marker(props: markerProps) {
  const {myself, coords, lat,lng, socketId, username } = props;
  return (
    <div className="" >
      <img src={locationMarker} alt={username} className="w-[35px] h-[50px] hover:translate-y-2 hover:transition-all" />
    </div>
  );
}