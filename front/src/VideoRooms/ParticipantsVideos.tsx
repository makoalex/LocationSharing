import React from 'react'
import { setLocalStream } from '../realTimeCommunication/videoRoomSlice'
import { useSelector } from 'react-redux'
import { IRoomInfo, RoomState } from '../Types'
import Video from './Video'

export default function ParticipantsVideos() {
    const inRoom = useSelector((state: any) => state.videoRooms.inRoom)
    const localStream= useSelector((state:any) => state.videoRooms.localStream)
    console.log('localStream', localStream)
    console.log('inRoom', inRoom)   
  return (
    <div className='h-[200px] w-[250px] bg-black flex justify-center items-center'>
        {inRoom && localStream && <Video stream= {localStream} muted />}
        {/* {inRoom && localStream ? <Video stream= {localStream} muted /> : null} */}
    </div>
  )
}
