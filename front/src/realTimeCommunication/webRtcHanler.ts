import store from "../store/store";
import { setLocalStream, setRemoteStream } from "./videoRoomSlice";
import { MediaConnection, Peer } from "peerjs";
import { IParticipants } from "../Types";


let peer: Peer;
let peerId: string;
let peerConnection = new Map<string, MediaConnection[]>();

// getting the peer id
export const getPeerId = () => {
  return peerId;
};

let localStream: MediaStream | null = null;
export const getAccessToLocalStream = async () => {
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
    peerId = id;
  });
  peer.on("call", async (call) => {
    // Retrieve or create an array for the peer's connections
    let connections = peerConnection.get(call.peer);
    const connection = call;
    if (!connections) {
      connections = [];
      peerConnection.set(call.peer, connections);
    }
    // Add the new connection to the array
    connections.push(connection);

    const localStream: MediaStream | null =
      store.getState().videoRooms.localStream;
    // answer the call and send the local stream A/V
    call.answer(localStream!);
    call.on("stream", (remoteStream: MediaStream) => {
      store.dispatch(setRemoteStream(remoteStream));
    });
  });
};
// function to call another user
export interface callProps extends IParticipants {
  newParticipantPeerId: string;
}

export const call = (data: callProps) => {
  const { newParticipantPeerId } = data;
  const localStream = store.getState().videoRooms.localStream;
  const peerCall = peer.call(newParticipantPeerId, localStream!);
  peerCall.on("stream", (remoteStream: MediaStream) => {
    store.dispatch(setRemoteStream(remoteStream));
  });
};

// clean up the local stream close the connection
const cleanUpLocalStream = () => {
  localStream?.getTracks().forEach((track) => track.stop());
};

export const disconnect = () => {
  peerConnection.forEach((connections) => {
    connections.forEach((connection) => {
      if (connection.peerConnection) {
        connection.peerConnection.close();
      }
      if (connection.close) connection.close();
    });
  });
  cleanUpLocalStream();
  store.dispatch(setRemoteStream(null));
};
