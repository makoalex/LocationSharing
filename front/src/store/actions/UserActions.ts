import { setOnlineUsers } from "../../MapPage/mapSlice";
import { dataProps, onlineUsersProps } from "../../Types";
import store from "../store";
type userDataProps ={
    socketId:string,
        username:string;
        coords:{
            lng:number;
            lat:number;
}
}

export const OnlineUserHandler =(socketId:string, userData: onlineUsersProps[])=>{
    store.dispatch(setOnlineUsers(userData.map((user:onlineUsersProps)=>{
        if( user.socketId === socketId){
            user.myself= true
        }
        return user
    })))

}