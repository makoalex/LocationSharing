import React from "react";
import { ChatBoxInterface } from "../../Types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendChatMessage } from "../../store/actions/MessengerActions";

export default function NewMessages({ socketId }: ChatBoxInterface) {
  const [message, setMessage] = useState('')
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>) =>{
    setMessage(e.target.value)
  }

  const handleKeyDown=(e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.code=== 'Enter' && message.length>0){
      proceedChatMessage()
      setMessage('')
    }
  }
  const proceedChatMessage = ()=>{
  sendChatMessage(message, socketId!)
    
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Aa"
        value={message}
        name="message"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full h-11 tracking-wider border-black border-4 border-r-0 border-b-0 border-l-0 text-base placeholder:text-black/30 placeholder:translate-x-2 p-2 outline-none focus:border-t-black/30 placeholder:font-primary rounded-t-xl placeholder:tracking-wider"
      />
    </div>
  );
}
