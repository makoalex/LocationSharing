import React from "react";
import Chatbox from "./Chatbox/Chatbox";
import { useSelector } from "react-redux";
import { chatState } from "../Types";


export default function Messenger() {
  const chatBoxes = useSelector(
    (state: { messenger: chatState }) => state.messenger.chatBoxes
  );
  return (
    <div className="h-[300px] absolute bottom-1 left-0 flex flex-row z-10 gap-5 ml-5 rounded-md">
      {chatBoxes.map((chatBox) => (
        <Chatbox
          key={chatBox.socketId}
          socketId={chatBox.socketId}
          username={chatBox.username}
        />
      ))}
    </div>
  );
}
