import React from "react";
import { ChatBoxInterface } from "../../Types";

export default function Chatbox({ socketId }: ChatBoxInterface) {
  return (
    <section className="flex flex-col">
      <div className="w-[300px] h-[400px] flex flex-col bg-secondary">
        Chatbox
      </div>
    </section>
  );
}
