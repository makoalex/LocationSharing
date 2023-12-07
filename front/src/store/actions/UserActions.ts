import { setOnlineUsers } from "../../MapPage/mapSlice";
import {dataUserProps } from "../../Types";
import store from "../store";


export const OnlineUserHandler =(socketId:string, userData: dataUserProps[])=>{
    store.dispatch(setOnlineUsers(userData.map((user:dataUserProps)=>{
        if( user.socketId === socketId){
            user.myself= true
        }
        return user
    })))

}