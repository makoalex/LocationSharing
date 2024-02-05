import React from "react";
import Call from "../assets/Group.png";
import { createVideoRoom } from "../store/actions/videRoomActions";

export default function CreateRoomButton() {
  // add the handler for creating a room
  const handleCreateRoom = () => {
    createVideoRoom();
  };
  return (
    <img
      src={Call}
      alt=" call button"
      onClick={handleCreateRoom}
      className=" right-16 bottom-12 rounded-sm  w-[50px] h-[40px] shadow-[5px_5px_0px_0px_#000]    active:shadow-none active:bg-none active:transition-all active:duration-300 cursor-pointer"
    />
  );
}
