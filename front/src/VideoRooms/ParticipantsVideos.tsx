import React from 'react'
import { setLocalStream } from '../realTimeCommunication/videoRoomSlice'
import { useSelector } from 'react-redux'
import { IRoomInfo, RoomState } from '../Types'
import Video from './Video'

export default function ParticipantsVideos() {
    const inRoom = useSelector((state: any) => state.videoRooms.inRoom)
    const localStream= useSelector((state:any) => state.videoRooms.localStream)
  return (
    <div className=' absolute top-2 right-2 h-[200px] w-[250px]'>
        {inRoom && localStream ? <Video stream= {localStream} muted /> : null}
    </div>
  )
}
