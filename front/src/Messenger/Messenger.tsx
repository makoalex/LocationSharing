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
    <div className='h-[300px] absolute bottom-1 left-0 flex flex-row z-10 gap-5 ml-5 rounded-md'>
      {dummy_chatBoxes.map((chatBox)=>(<Chatbox key={chatBox.socketId} socketId = {chatBox.socketId} userName={chatBox.userName}/>))}
    </div>
  )
}
