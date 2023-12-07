import { Socket } from "socket.io-client";
import { setOnlineUsers } from "../../MapPage/mapSlice";
import { dataProps } from "../../Types";
import store from "../store";

export const OnlineUserHandler =(socketId:string, userData: any)=>{
    store.dispatch(setOnlineUsers(userData.map((user:any)=>{
        if( user.socketId === socketId){
            user.myself= true
        }
        return user
    })))

}