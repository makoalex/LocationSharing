import React from "react";
import { IRoom } from "../Types";

export default function RoomJoinedButton(props: any) {
  const { creatorUsername, roomId, amountOfParticipants } = props;
  const handleClick = () => {
    //stay tun coming soon
  };
  return (
    <button
      className=" text-secondary shadow-[6px_6px_0px_0px_#000] font-primary rounded-sm bg-accent w-[50px] h-[40px] text-base p-2 active:shadow-none active:bg-none active:transition-all active:duration-200 cursor-pointer active:bg-callAction"
      onClick={handleClick}
    >
      {creatorUsername[0]}{" "}
    </button>
  );
}
