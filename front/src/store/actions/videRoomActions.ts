import { v4 as uuid } from "uuid";
import store from "../store";
import {
  setInRoom,
  setRooms,
} from "../../realTimeCommunication/videoRoomSlice";
import * as socketConnect from "../../SocketConnect/SocketConnect";
import { IRoomInfo } from "../../Types";
import {
  disconnect,
  getAccessToLocalStream,
  getPeerId,
} from "../../realTimeCommunication/webRtcHanler";

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
// function to join a Video Room

export const joinVideoRoom = async (roomId: string) => {
  const success = await getAccessToLocalStream();
  if (success) {
    store.dispatch(setInRoom(roomId));

    socketConnect.joinVideoRoom({
      roomId,
      peerId: getPeerId(),
    });
  }
};
export const videoRoomListHandler = (videoRooms: IRoomInfo[]) => {
  store.dispatch(setRooms(videoRooms));
};

export const leaveVideoRoom = (roomId: string) => {
  // disconnect function that will disconnect th WebRTC connection
  disconnect()
  socketConnect.leaveRoom({ roomId });
  store.dispatch(setInRoom(false))
};
