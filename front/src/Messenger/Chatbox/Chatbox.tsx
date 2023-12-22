import React from "react";
import { ChatBoxInterface } from "../../Types";
import NavbarChatBox from "./NavbarChatBox";

export default function Chatbox({ socketId, userName }: ChatBoxInterface) {
  return (
    <section className="flex flex-col">
      <div className="w-[300px] h-[400px] flex flex-col bg-secondary">
        <NavbarChatBox socketId={socketId} userName={userName}/>
      </div>
    </section>
  );
}
