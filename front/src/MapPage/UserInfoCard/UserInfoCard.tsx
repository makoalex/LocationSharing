import React from "react";
import Label from "./Label";
import { useSelector } from "react-redux";
import { mapState, userInfoCardProps } from "../../Types";

export default function UserInfoCard({
  username,
  socketId,
  userLocation,
}: userInfoCardProps) {
  const myLocation = useSelector(
    (state: { map: mapState }) => state.map.myLocation
  );
  return (
   
    <div className=" absolute top-11 left-5 flex flex-col  w-[400px] h-[200px] bg-primary/80 backdrop-blur-lg transition-all duration-75">
      <Label text={username} className="text-base font-primary" />
      <Label text={"19 kms"} className={"text-sm"} />
    </div>

  );
}
