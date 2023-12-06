import { Socket, io } from "socket.io-client";
import { dataProps } from '../Types';

let socket: Socket | null = null;
export const connectWithIoSocket = () => {
  socket = io("http://localhost:3003");
  socket.on("connect", () => {
    console.log("connected to socket client");
  });
};

export const login = (data: dataProps) => {
 
    socket!.emit("user-login", data);
  
};
