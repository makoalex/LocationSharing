import React from "react";
import { ChatBoxInterface } from "../../Types";

export default function NewMessages({ socketId }: ChatBoxInterface) {
  return (
    <div>
      <input
        type="text"
        placeholder="Aa"
        className="w-full h-11 tracking-wider bg-secondary border-black border-4 border-r-0  border-l-0 text-base placeholder:text-black/30 placeholder:translate-x-2 p-2 outline-none focus:border-t-black/30 placeholder:font-primary rounded-t-xl placeholder:tracking-wider"
      />
    </div>
  );
}
