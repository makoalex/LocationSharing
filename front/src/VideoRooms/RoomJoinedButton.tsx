import React from "react";
import { IRoom, RoomState, IRoomToDisplay } from "../Types";
import { joinVideoRoom } from "../store/actions/videRoomActions";
import { useSelector } from "react-redux";

export default function RoomJoinedButton(props: IRoomToDisplay) {
  
  const inRoom = useSelector(
    (state: { videoRooms: RoomState }) => state.videoRooms.inRoom
  );
  const { creatorUsername, roomId, amountOfParticipants } = props;
  const handleClick = () => {
    if (inRoom) {
      return alert("You are already in a room");
    }
    if (amountOfParticipants > 1) {
      return alert("Room is full");
    }
    joinVideoRoom(roomId!);
  };
  return (
    <button
      className=" text-secondary shadow-[6px_6px_0px_0px_#000] font-primary rounded-full bg-accent w-[60px] h-[40px] text-sm capitalize active:shadow-none active:bg-none active:transition-all active:duration-200 cursor-pointer active:bg-callAction"
      onClick={handleClick}
    >
      {creatorUsername[0]}
    </button>
  );
}
