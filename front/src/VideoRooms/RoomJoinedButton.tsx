import React from 'react'
import { IRoom } from '../Types'

export default function RoomJoinedButton(props: any) {
    const {creatorUsername,roomId,amountOfParticipants} = props
    const handleClick = ()=>{
        //stay tun coming soon
    }
  return (
    <div className=''>
        <button className='absolute bottom-12 float-left rounded-full mr-7 right-20 text-base border border-black p-2 bg-slate-500' onClick={handleClick}>{creatorUsername[0]} </button>
    </div>
  )
}