import React from "react";
import { ChatBoxInterface } from "../../Types";

export default function Messages({ socketId }: ChatBoxInterface) {
  return (
    <section className="flex flex-grow flex-col overflow-y-auto w-full font-secondary text-sm tracking-wider font-light">
      Messages
    </section>
  );
}
