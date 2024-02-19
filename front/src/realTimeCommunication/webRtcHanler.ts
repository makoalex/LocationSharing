import store from "../store/store";
import { setLocalStream } from "./videoRoomSlice";

 export const getAccessToLocalStream= async()=>{
    let localStream= null
    try{
         localStream= await navigator.mediaDevices.getUserMedia({
            audio:true,
            video:true,

        })
        if(localStream){
            console.log("localStream",localStream);
            const streamId= localStream.id
            store.dispatch(setLocalStream(streamId))
        }
        return Boolean(localStream)

    }catch(err){
        console.error(err);
    }
}