import { stringify } from "querystring";
import store from "../store/store";
import { setLocalStream, setRemoteStream } from "./videoRoomSlice";
import { Peer } from "peerjs";
import { RoomState } from "../Types";
let peer;
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
  peer.on('call', (call)=>{
        console.log('call event is happening')
        const localStream:MediaStream|null= store.getState().videoRooms.localStream;
        // answer the call and send the local stream A/V
        call.answer(localStream!)
        call.on('stream', (remoteStream)=>{
            console.log('remote stream incoming')
            store.dispatch(setRemoteStream(remoteStream))
        })
  })
  
};
