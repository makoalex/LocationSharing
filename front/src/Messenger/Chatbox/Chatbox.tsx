import React from "react";
import { ChatBoxInterface } from "../../Types";
import NavbarChatBox from "./NavbarChatBox";
import Messages from "./Messages";
import NewMessages from "./NewMessages";

export default function Chatbox({ socketId, userName }: ChatBoxInterface) {
  return (
    <section className="flex flex-col">
      <div className="w-[270px] h-[450px] flex flex-col justify-between bg-secondary border-black border-2  border-r-4">
        <NavbarChatBox socketId={socketId} userName={userName}/>
        <Messages socketId={socketId} />
        <NewMessages socketId={socketId} />
      </div>
    </section>
  );
}
