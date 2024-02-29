import Cam from "../assets/Cam.png";
import CamOff from "../assets/CamOff.png";
import Disconnect from "../assets/endCall.png";
import Mic from "../assets/Mic.png";
import Mute from "../assets/Mute.png";
import {
  setIsMicOn,
  setIsCameraOn,
} from "../realTimeCommunication/videoRoomSlice";
import { leaveVideoRoom } from "../store/actions/videRoomActions";
import { RoomState } from "../Types";
import { useSelector, useDispatch } from "react-redux";

export default function VideoRoomButtons({ inRoom }: { inRoom: string }) {
  const dispatch = useDispatch();
  const isMicOn = useSelector(
    (state: { videoRooms: RoomState }) => state.videoRooms.isMicOn
  );
  const isCameraOn = useSelector(
    (state: { videoRooms: RoomState }) => state.videoRooms.isCameraOn
  );

  const handleLeaveRoom = () => {
    leaveVideoRoom(inRoom);
  };

  const handleMuteMicChange = () => {
    dispatch(setIsMicOn(!isMicOn));
  };

  const handleCameraChange = () => {
    dispatch(setIsCameraOn(!isCameraOn));
  };

  return (
    <div className=" w-[250px] gap-2 flex justify-center items-center mt-2  ">
      <button className="h-9 w-9  shadow-md" onClick={handleLeaveRoom}>
        <img src={Disconnect} alt="end call" />
      </button>
      <button className="h-9 w-9 shadow-md" onClick={handleCameraChange}>
        <img src={isCameraOn ? Cam : CamOff} alt=" cam button" />
      </button>
      <button className="h-9 w-9 shadow-md" onClick={handleMuteMicChange}>
        <img src={isMicOn ? Mic : Mute} alt=" microphone" />
      </button>
    </div>
  );
}
