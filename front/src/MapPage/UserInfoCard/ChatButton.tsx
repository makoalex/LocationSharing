import React from 'react'
import { Socket } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import chatIcon from '../../assets/chatIcon.svg'
import { ChatButtonProps } from '../../Types'
import { addCheckBoxes } from '../../Messenger/messengerSlice';


export default function ChatButton({socketId, username}:ChatButtonProps) {
  const dispatch= useDispatch();
    const handleChatBox =()=>{
      dispatch(addCheckBoxes({socketId, username}))

    }
  return (
    <div>
        <img src={chatIcon} alt=" chat icon" onClick={handleChatBox} className= 'absolute right-1 p-2 top-1 w-[80px] h-[60px]'/>
    </div>
  )
}
