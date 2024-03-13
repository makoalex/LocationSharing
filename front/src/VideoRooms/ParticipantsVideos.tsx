import React from "react";
import { useSelector } from "react-redux";
import { RoomState } from "../Types";
import Video from "./Video";
import VideoRoomButtons from "./VideoRoomButtons";

export default function ParticipantsVideos() {
  const inRoom = useSelector(
    (state: { videoRooms: RoomState }) => state.videoRooms.inRoom
  );
  const localStream = useSelector(
    (state: { videoRooms: RoomState }) => state.videoRooms.localStream
  );
  const remoteStream = useSelector(
    (state: { videoRooms: RoomState }) => state.videoRooms.remoteStream
  );
  return (
    <>
      <div className=" absolute top-2 right-2 h-[200px] w-[250px]">
        {/* using  muted for testing on same device  */}
        {inRoom && localStream ? <Video stream={localStream} muted /> : null}
        {inRoom && remoteStream ? <Video stream={remoteStream} muted /> : null}
        {inRoom ? <VideoRoomButtons inRoom={inRoom} /> : null}
      </div>
    </>
  );
}
