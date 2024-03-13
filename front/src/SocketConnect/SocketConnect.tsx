import { Socket, io } from "socket.io-client";
import {
  OnlineUserHandler,
  UserDisconnectedHandler,
} from "../store/actions/UserActions";
import {
  IMessage,
  dataProps,
  dataUserProps,
  IRoomCreate,
  IRoomInfo,
} from "../Types";
import { chatMessageHandler } from "../store/actions/MessengerActions";
import { videoRoomListHandler } from "../store/actions/videRoomActions";
import { call, callProps } from "../realTimeCommunication/webRtcHanler";
import { disconnect } from "../realTimeCommunication/webRtcHanler";

let socket: Socket | null = null;
export const connectWithIoSocket = () => {
  socket = io("http://localhost:3003");
  socket.on("connect", () => {
  });
  socket.on("online-users", (userData: dataUserProps[]) => {
    if (socket) {
      OnlineUserHandler(socket.id, userData);
    }
  });
  socket.on("user-disconnected", (disconnectedUserSocketId) => {
    UserDisconnectedHandler(disconnectedUserSocketId);
  });
  socket.on("chat-message", (messageData: IMessage) => {
    if (socket) {
      chatMessageHandler(messageData);
    }
  });
  socket.on("video-rooms", (videoRooms: IRoomInfo[]) => {
    videoRoomListHandler(videoRooms);
  });

  socket.on("video-room-init", (data: callProps) => {
    call(data);
  });
  socket.on("video-room-disconnect", (data) => {
    disconnect();
  });
};

export const login = (data: dataProps) => {
  socket!.emit("user-login", data);
};
// function for exporting messages to the server
export const sendChatMessage = (data: IMessage) => {
  socket!.emit("chat-message", data);
};

export const createVideoRoom = (data: IRoomCreate) => {
  socket!.emit("video-room-create", data);
};

export const joinVideoRoom = (data: IRoomCreate) => {
  socket?.emit("video-room-join", data);
};
export const leaveRoom = (data: IRoomCreate) => {
  socket?.emit("video-room-leave", data);
};
