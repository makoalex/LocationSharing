import React from "react";
import Cam from "../assets/Cam.png";
import CamOff from "../assets/CamOff.png";
import Disconnect from "../assets/endCall.png";
import Mic from "../assets/Mic.png";
import Mute from "../assets/Mute.png";
import { leaveVideoRoom } from "../store/actions/videRoomActions"

export default function VideoRoomButtons({inRoom }: {inRoom: string} ) {
    const handleLeaveRoom= ()=>{
        leaveVideoRoom(inRoom)

    }
  return (
    <div className=" w-[250px] flex justify-between items-center  " >
      <button className="h-9 w-9  shadow-md first-letter:" onClick={handleLeaveRoom}>
        <img  src={Disconnect} alt="end call" />
      </button>
      <button className="h-9 w-9 shadow-md">
        <img src={Cam} alt=" cam button" />
      </button>


      <button className="h-9 w-9 shadow-md">
        <img src={CamOff} alt=" camera off" />
      </button>
      <button className="h-9 w-9 shadow-md">
        <img src={Mic} alt=" microphone" />
      </button>
      <button className="h-9 w-9 shadow-md">
        <img src={Mute} alt=" mute microphone" />
      </button>
    </div>
  );
}
