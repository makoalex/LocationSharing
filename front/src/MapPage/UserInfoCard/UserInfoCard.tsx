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
   
    <div className=" absolute bottom-2 left-5 flex flex-col items-center  w-[300px] h-[350px] border-2 border-black border-b-4 shadow-[4px_4px_0px_0px_#0B2447] bg-[#f9f9f9] transition-all duration-75">
      <Label text={username} className="text-lg font-primary" />
      <Label text={"19 kms"} className={"text-sm"} />
    </div>

  );
}
