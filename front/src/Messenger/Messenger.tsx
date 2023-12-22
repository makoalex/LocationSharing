import React from 'react'
import Chatbox from './Chatbox/Chatbox'


const dummy_chatBoxes = [
    {
        userName: "John",
        socketId:'321121',
        messages:[]
    },
    {
        userName: "Mako",
        socketId:'675435',
        messages:[]
    }
]
export default function Messenger() {
  return (
    <div className='h-[300px] absolute bottom-0 left-0 flex flex-row justify-center place-items-baseline z-10 gap-5 ml-5 '>
      {dummy_chatBoxes.map((chatBox)=>(<Chatbox key={chatBox.socketId} socketId = {chatBox.socketId}/>))}
    </div>
  )
}
