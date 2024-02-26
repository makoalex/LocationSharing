import React from "react";
import { setLocalStream } from "../realTimeCommunication/videoRoomSlice";
import { useSelector } from "react-redux";
import { IRoomInfo, RoomState } from "../Types";
import Video from "./Video";
import VideoRoomButtons from "./VideoRoomButtons";

export default function ParticipantsVideos() {
  const inRoom = useSelector((state: any) => state.videoRooms.inRoom);
  const localStream = useSelector((state: any) => state.videoRooms.localStream);
  const remoteStream = useSelector(
    (state: any) => state.videoRooms.remoteStream
  );
  return (
    <>
      <div className=" absolute top-2 right-2 h-[200px] w-[250px]">
        {/* using  muted for testing on same device  */}
        {inRoom && localStream ? <Video stream={localStream} muted /> : null}
        {inRoom && remoteStream ? <Video stream={remoteStream} muted /> : null}
        {inRoom ? <VideoRoomButtons /> : null}
      </div>
    </>
  );
}
