import React from "react";
import SingleMessage from "./SingleMessage";
import {ISingleMessage} from "../../Types";
import { ChatBoxInterface } from "../../Types";


const messages:ISingleMessage[] = [
  {
    id:1,
    myMessage: true,
    content:'romeo?'
  },
  {
    id:2,
    myMessage: false,
    content:" what's in a name for which we call a rose by any other name would smell as sweet"
  }
]
export default function Messages({ socketId }: ChatBoxInterface) {
  return (
    <section className="flex flex-grow flex-col overflow-y-auto w-full font-secondary text-sm tracking-wider font-light">
      {messages.map((message)=>{
        return <SingleMessage key={message.id} myMessage={message.myMessage} content={message.content}/>})
      }

    </section>
  );
}
