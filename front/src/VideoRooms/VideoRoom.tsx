import React from 'react'
import { useSelector } from 'react-redux'
import store from '../store/store'
import CreateRoomButton from './CreateRoomButton';

interface RoomState{
  inRoom: string;
  rooms: string[];
}

export const RoomList= ()=>{
    // const rooms = useSelector((state:{room:RoomState})=>state.room.rooms)
    return(
        <div>
          <CreateRoomButton/>
        </div>
    )
}

export default function VideoRoom() {
  return (
    <div>
      <RoomList />
    </div>
  )
}