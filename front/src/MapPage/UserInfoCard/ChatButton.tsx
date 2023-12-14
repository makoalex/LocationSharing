import React from 'react'
import { Socket } from 'socket.io-client';
import chatIcon from '../../assets/chatIcon.svg'

export type ChatButtonProps = {
    socketId: string;
    userName: string;
}
export default function ChatButton({socketId, userName}:ChatButtonProps) {
    const handleChatBox =()=>{

    }
  return (
    <div>
        <img src={chatIcon} alt=" chat icon" onClick={handleChatBox} className= 'absolute right-1 p-2 top-1 w-[80px] h-[60px]'/>
    </div>
  )
}
