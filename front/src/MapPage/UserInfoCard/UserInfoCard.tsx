import React from "react";
import Label from "./Label";
import { useSelector } from "react-redux";
import { mapState, userInfoCardProps } from "../../Types";
import { calculateDistanceBetweenCords} from '../../utils/location'
import ActionButton from "../ActionButton";


export default function UserInfoCard({
  username,
  socketId,
  userLocation,
}: userInfoCardProps) {
  const myLocation = useSelector(
    (state: { map: mapState }) => state.map.myLocation
  );
  return (
   
    <div className=" absolute top-2 left-5 flex flex-col w-[270px] h-[100px] border-2 border-black border-b-4 p-2 shadow-[4px_4px_0px_0px_#0B2447] bg-[#FCF8E7] transition-all duration-75">
      <Label text={username} className="text-lg font-primary" />
      <Label text={`${calculateDistanceBetweenCords({ coord1: myLocation, coord2: userLocation })} kms`} className={'text-base font-primary'} />
      <ActionButton socketId= {socketId} username={username}/>
    </div>

  );
}
