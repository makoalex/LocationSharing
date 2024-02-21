import { v4 as uuid } from "uuid";
import store from "../store";
import {
  setInRoom,
  setRooms,
} from "../../realTimeCommunication/videoRoomSlice";
import * as socketConnect from "../../SocketConnect/SocketConnect";
import { IRoomInfo } from "../../Types";
import { getAccessToLocalStream, getPeerId } from "../../realTimeCommunication/webRtcHanler";

export const createVideoRoom = async () => {
  // get access to local stream and create a new room
  const success = await getAccessToLocalStream();

  if (success) {
    const newRoomId = uuid();
    store.dispatch(setInRoom(newRoomId));

    socketConnect.createVideoRoom({
      peerId: getPeerId(), 
      newRoomId,
    });
  }
};
export const videoRoomListHandler = (videoRooms: IRoomInfo[]) => {
  store.dispatch(setRooms(videoRooms));
};
