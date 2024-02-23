import { stringify } from "querystring";
import store from "../store/store";
import { setLocalStream, setRemoteStream } from "./videoRoomSlice";
import { MediaConnection, Peer, PeerEvents } from "peerjs";
import { IParticipants, RoomState } from "../Types";

// interface IPeer extends Peer{
//     on:(event:keyof PeerEvents, callback:(...args:any[])=>void)=>void;
//     call:(mediaConnection: MediaConnection)=>void;

// }
let peer:Peer;
let peerId:string;

// getting the peer id
export const getPeerId = ()=>{
    return peerId

}

export const getAccessToLocalStream = async () => {
  let localStream = null;
  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    if (localStream) {
      store.dispatch(setLocalStream(localStream));
    }
    return Boolean(localStream);
  } catch (err) {
    console.error(err);
  }
};

export const connectWithPeerServer = () => {
  // create a peer object that will give access to event listeners to call other users
  peer = new Peer(undefined as unknown as string, {
    host: "localhost",
    port: 9000,
    path: "/peer",
  });

  peer.on("open", (id) => {
      console.log("Peer id is:", id);
    peerId = id;
  });
  peer.on('call', async (call)=>{
        console.log('call event is happening')
        const localStream:MediaStream|null= store.getState().videoRooms.localStream;
        // answer the call and send the local stream A/V
        call.answer(localStream!)
        call.on('stream', (remoteStream:MediaStream)=>{
            console.log('remote stream incoming')
            store.dispatch(setRemoteStream(remoteStream))
        })
  })
  
};
// function to call another user
 export interface callProps extends IParticipants{
    newParticipantPeerId:string
}

export const call= (data:callProps)=>{
    const{newParticipantPeerId}= data
    const localStream = store.getState().videoRooms.localStream;
    const peerCall= peer.call(newParticipantPeerId, localStream!)
    peerCall.on('stream', (remoteStream:MediaStream)=>{
        console.log('remote stream2 incoming')
        store.dispatch(setRemoteStream(remoteStream))
    })
} 
