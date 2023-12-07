import { Socket, io } from "socket.io-client";
import { OnlineUserHandler, UserDisconnectedHandler } from "../store/actions/UserActions";
import { dataProps,dataUserProps } from "../Types";

let socket: Socket | null = null;
export const connectWithIoSocket = () => {
  socket = io("http://localhost:3003");
  socket.on("connect", () => {
    console.log("connected to socket client");
  });
  socket.on("online-users", (userData: dataUserProps[]) => {
    console.log(userData);
    if (socket) {
      OnlineUserHandler(socket.id, userData);
    }
  });
  socket.on('user-disconnected', (disconnectedUserSocketId)=>{
    UserDisconnectedHandler(disconnectedUserSocketId)
  } )
};

export const login = (data: dataProps) => {
  socket!.emit("user-login", data);
};
