import React from "react";
import SingleMessage from "./SingleMessage";
import {ISingleMessage, chatState} from "../../Types";
import { ChatBoxInterface } from "../../Types";
import { useSelector } from "react-redux";



export default function Messages({ socketId }: ChatBoxInterface) {
  const messages = useSelector((state:{messenger:chatState}) => state.messenger.chatHistory[socketId!] ) 
  return (
    <section className="flex flex-grow flex-col overflow-y-auto w-full font-secondary text-sm tracking-wider font-light">
      {messages?.map((message)=>{
        return <SingleMessage key={message.id} myMessage={message.myMessage} content={message.content}/>})
      }

    </section>
  );
}
