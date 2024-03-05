import React from "react";
import { Socket } from "socket.io-client";
import { useDispatch } from "react-redux";
import chatIcon from "../../assets/Message1.png";
import { ChatButtonProps } from "../../Types";
import { addCheckBoxes } from "../../Messenger/messengerSlice";

export default function ChatButton({ socketId, username }: ChatButtonProps) {
  const dispatch = useDispatch();
  const handleChatBox = () => {
    dispatch(addCheckBoxes({ socketId, username }));
  };
  return (
    <div className=" hover:bg-accent">
      <img
        src={chatIcon}
        alt=" chat icon"
        onClick={handleChatBox}
        className="absolute right-2 top-2 rounded-sm  w-[50px] h-[40px]  bg-black shadow-[4px_4px_0px_0px_#000] active:shadow-none active:transition-all active:duration-200 cursor-pointer"
      />
    </div>
  );
}
